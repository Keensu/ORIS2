import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SearchForm from '../components/search/SearchForm';
import SearchResults from '../components/search/SearchResults';
import '../assets/styles/SearchPage.css';

const SearchPage = () => {
  const location = useLocation();
  const [allHotels, setAllHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState(null);

  // Загрузка начальных данных
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const city = params.get('city');
    const checkIn = params.get('checkIn');
    const checkOut = params.get('checkOut');
    const minPrice = params.get('minPrice');
    const maxPrice = params.get('maxPrice');
    const minRating = params.get('minRating');
    const stars = params.get('stars');

    const initialFilters = { city, checkIn, checkOut, minPrice, maxPrice, minRating, stars };

    setSearchParams(initialFilters);
    loadHotels(initialFilters);
  }, [location.search]);

  const filterHotels = (hotels, currentFilters) => {
    let result = [...hotels];

    if (currentFilters.city && currentFilters.city.trim()) {
      result = result.filter(hotel =>
        hotel.locality.toLowerCase().includes(currentFilters.city.toLowerCase())
      );
    }

    if (currentFilters.minPrice) {
      const minPrice = Number(currentFilters.minPrice);
      result = result.filter(hotel => Number(hotel.price) >= minPrice);
    }

    if (currentFilters.maxPrice) {
      const maxPrice = Number(currentFilters.maxPrice);
      result = result.filter(hotel => Number(hotel.price) <= maxPrice);
    }

    if (currentFilters.minRating) {
      const minRating = Number(currentFilters.minRating);
      result = result.filter(hotel => Number(hotel.rating || 0) >= minRating);
    }

    if (currentFilters.stars) {
      const minStars = Number(currentFilters.stars);
      result = result.filter(hotel => Number(hotel.stars || 0) >= minStars);
    }

    return result;
  };

  const loadHotels = (initialFilters = {}) => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('/api/hotels.json')
        .then(response => response.json())
        .then(data => {
          const allHotelsData = data.lastOrders || [];
          setAllHotels(allHotelsData);

          const filtered = filterHotels(allHotelsData, initialFilters);
          setFilteredHotels(filtered.length > 0 ? filtered : allHotelsData);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Ошибка при загрузке данных:', error);
          setIsLoading(false);
        });
    }, 300);
  };

  const applyFilters = (currentFilters) => {
    const result = filterHotels(allHotels, currentFilters);

    setFilteredHotels(result);
    setSearchParams({
      city: currentFilters.city,
      checkIn: currentFilters.checkIn,
      checkOut: currentFilters.checkOut,
      minPrice: currentFilters.minPrice,
      maxPrice: currentFilters.maxPrice,
      minRating: currentFilters.minRating,
      stars: currentFilters.stars
    });
  };

  const handleFilterChange = (newFilters) => {
    applyFilters(newFilters);
  };

  return (
    <div>
      <div className="body_main">
        <Header />
        <main className="body" role="main">
          <div className="body_int">
            <div className="index search-page">
              <div className="left col">
                <div className="int">
                  <SearchForm
                    formId="searchFilters"
                    searchParams={searchParams}
                    onSearch={handleFilterChange}
                    navigateOnSubmit={false}
                  />
                </div>
              </div>
              
              <div className="right col search-results-container">
                <div className="int">
                  {isLoading ? (
                    <div className="loading">Загружаем отели...</div>
                  ) : filteredHotels.length > 0 ? (
                    <>
                      <div className="search-info">
                        {searchParams && (
                          <p>
                            Отели в городе <strong>{searchParams.city || 'по всему миру'}</strong>
                            {searchParams.checkIn && ` с ${searchParams.checkIn}`}
                            {searchParams.checkOut && ` по ${searchParams.checkOut}`}
                          </p>
                        )}
                        <p className="results-count">Найдено гостиниц: <strong>{filteredHotels.length}</strong></p>
                      </div>
                      <SearchResults hotels={filteredHotels} />
                    </>
                  ) : (
                    <div className="no-results">
                      <p>По вашему запросу не найдено отелей.</p>
                      <p>Попробуйте изменить параметры поиска.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
