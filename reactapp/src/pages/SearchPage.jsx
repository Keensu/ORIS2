import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FilterPanel from '../components/search/FilterPanel';
import SearchResults from '../components/search/SearchResults';
import '../assets/styles/SearchPage.css';

const SearchPage = () => {
  const location = useLocation();
  const [allHotels, setAllHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState(null);
  const [filters, setFilters] = useState(null);

  // Загрузка начальных данных
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const city = params.get('city');
    const checkIn = params.get('checkIn');
    const checkOut = params.get('checkOut');

    setSearchParams({ city, checkIn, checkOut });
    loadHotels(city);
  }, [location.search]);

  const loadHotels = (city) => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('/api/hotels.json')
        .then(response => response.json())
        .then(data => {
          const allHotelsData = data.lastOrders || [];
          setAllHotels(allHotelsData);
          
          // Фильтруем по дефолтному городу
          if (city) {
            const filtered = allHotelsData.filter(hotel =>
              hotel.locality.toLowerCase().includes(city.toLowerCase())
            );
            setFilteredHotels(filtered.length > 0 ? filtered : allHotelsData);
          } else {
            setFilteredHotels(allHotelsData);
          }
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Ошибка при загрузке данных:', error);
          setIsLoading(false);
        });
    }, 300);
  };

  const applyFilters = (currentFilters) => {
    let result = [...allHotels];

    // Фильтр по городу
    if (currentFilters.city && currentFilters.city.trim()) {
      result = result.filter(hotel =>
        hotel.locality.toLowerCase().includes(currentFilters.city.toLowerCase())
      );
    }

    setFilteredHotels(result);
    setSearchParams({
      city: currentFilters.city,
      checkIn: currentFilters.checkIn,
      checkOut: currentFilters.checkOut
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
                  <FilterPanel searchParams={searchParams} onSearch={handleFilterChange} />
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
