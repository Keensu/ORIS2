using Vashotel.API.Models;

namespace Vashotel.API.Data
{
    public static class DataSeeds
    {
        public static List<Destinations> Destinations { get; } = new List<Destinations>
    {
        new Destinations
        {
            City = "Гостиницы Москвы",
            Count = "14446",
            Image = "/images/1.png",
            Hotels = new List<DestinationHotels>
            {
                new DestinationHotels { Name = "Гостиница Коломенская", Price = 2300, Link = "#" },
                new DestinationHotels { Name = "Гостиница Гагаринский", Price = 3200, Link = "#" },
                new DestinationHotels { Name = "Гостиница Юность", Price = 5500, Link = "/hotel.html" },
                new DestinationHotels { Name = "Гостиница \"Берлин\"", Price = 3900, Link = "#" }
            }
        },
        new Destinations
        {
            City = "Гостиницы Санкт-Петербурга",
            Count = "15919",
            Image = "/images/3.jpg",
            Hotels = new List<DestinationHotels>
            {
                new DestinationHotels { Name = "Гостиница Русь", Price = 3900, Link = "#" },
                new DestinationHotels { Name = "Арт-отель Карелия", Price = 3100, Link = "#" },
                new DestinationHotels { Name = "Гостиница Россия", Price = 3410, Link = "#" },
                new DestinationHotels { Name = "Гостевой дом Володарский", Price = 3900, Link = "#" }
            }
        },
        new Destinations
        {
            City = "Гостиницы Нижнего Новгорода",
            Count = "1664",
            Image = "/images/7.jpg",
            Hotels = new List<DestinationHotels>
            {
                new DestinationHotels { Name = "Гостиница Заречная", Price = 5300, Link = "#" },
                new DestinationHotels { Name = "Отель Ибис Нижний Новгород", Price = 3200, Link = "#" },
                new DestinationHotels { Name = "Отель Саврасовская", Price = 2700, Link = "#" },
                new DestinationHotels { Name = "Гостиница Автозаводская", Price = 5850, Link = "#" }
            }
        }
    };

        public static List<Hotel> LastOrders { get; } = new List<Hotel>
    {
        new Hotel
        {
            Id = 583942,
            Name = "Отель Timhotel Paris Gare Montparnasse",
            Stars = 3,
            Locality = "Париж",
            Destination = "",
            Image = "/images/a44c1e385c5ffc33288d7ce7159c0df2f9087e9d.jpeg",
            Price = 7700,
            Rating = 4.8f,
            Reviews = 2,
            LastOrder = "3 час. 4 мин. назад",
            Link = "#"
        },
        new Hotel
        {
            Id = 10671,
            Name = "Отель ibis Styles Paris Nation Porte De Montreuil",
            Stars = 3,
            Locality = "Париж",
            Destination = "",
            Image = "/images/6c5f09ba56db26f0f4e3b7e823253997d885772d.jpeg",
            Price = 2200,
            Rating = 5f,
            Reviews = 37,
            LastOrder = "3 час. 8 мин. назад",
            Link = "#"
        },
        new Hotel
        {
            Id = 3249252,
            Name = "Отель Xenophon Hotel",
            Stars = 4,
            Locality = "Афины",
            Destination = "",
            Image = "/images/d737e537f8c0aaedd0fd10ce5e2788f3c4c51f43.JPEG",
            Price = 4200,
            Rating = 3.5f,
            Reviews = 0,
            LastOrder = "5 час. 4 мин. назад",
            Link = "#"
        },
        new Hotel
        {
            Id = 5270333,
            Name = "Отель B&B Hotel Wien-Stadthalle",
            Stars = 3,
            Locality = "Вена",
            Destination = "",
            Image = "/images/e55dcc3637fc1f3dccbabdd91f07a77cc58044bf.JPEG",
            Price = 5800,
            Rating = 0,
            Reviews = 0,
            LastOrder = "5 час. 16 мин. назад",
            Link = "#"
        },
        new Hotel
        {
            Id = 1377,
            Name = "Отель Мандарин Москва 4*",
            Stars = 4,
            Locality = "Москва",
            Destination = "Ольховская ул., д. 23",
            Image = "/images/0000001938889321_852130.jpg",
            Price = 4800,
            Rating = 4.0f,
            Reviews = 156,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Красносельская", Distance = "597 м" }
            },
            LastOrder = "44 мин. назад",
            Link = "#"
        },
        new Hotel
        {
            Id = 1555,
            Name = "Гостиница Юность",
            Stars = 3,
            Locality = "Москва",
            Destination = "ул. Хамовнический Вал, д. 34",
            Image = "/images/ece96037a0afdbe6542053ee625eaa315ddc9ed5.JPEG",
            Price = 5500,
            Rating = 4.7f,
            Reviews = 299,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Спортивная", Distance = "123 м" }
            },
            LastOrder = "3 час. 44 мин. назад",
            Link = "/hotel.html"
        },
        new Hotel
        {
            Id = 1,
            Name = "Мини-отель Петровка 17",
            Stars = 3,
            Locality = "Москва",
            Destination = "ул. Петровка, д. 17",
            Image = "/images/0000002550848237_473639.jpg",
            Price = 3500,
            Rating = 4.5f,
            Reviews = 78,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Театральная", Distance = "350 м" }
            },
            LastOrder = "2 час. 23 мин. назад",
            Link = "#"
        }
    };

        public static List<Hotel> TopMoscowHotels { get; } = new List<Hotel>
    {
        new Hotel
        {
            Id = 1555,
            Name = "Гостиница Юность",
            Stars = 3,
            Locality = "Москва",
            Destination = "ул. Хамовнический Вал, д. 34",
            Image = "/images/ece96037a0afdbe6542053ee625eaa315ddc9ed5.JPEG",
            Price = 5500,
            Rating = 4.7f,
            Reviews = 299,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Спортивная", Distance = "123 м" },
                new MetroStation { Name = "Лужники", Distance = "210 м" }
            },
            LastOrder = "44 мин. назад",
            Link = "/hotel.html"
        },
        new Hotel
        {
            Id = 3226621,
            Name = "Гостиница \"Берлин\"",
            Stars = 3,
            Locality = "Москва",
            Destination = "ул. Малая Юшуньская, д.1. корп. 2",
            Image = "/images/0000001094978059_948517.jpg",
            Price = 4400,
            Rating = 5f,
            Reviews = 188,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Каховская", Distance = "325 м" },
                new MetroStation { Name = "Севастопольская", Distance = "389 м" }
            },
            LastOrder = "16 февраля",
            Link = "#"
        },
        new Hotel
        {
            Id = 1377,
            Name = "Отель Мандарин Москва",
            Stars = 4,
            Locality = "Москва",
            Destination = "Ольховская ул., д. 23",
            Image = "/images/0000001938889321_852130.jpg",
            Price = 4800,
            Rating = 4.3f,
            Reviews = 156,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Красносельская", Distance = "597 м" },
                new MetroStation { Name = "Бауманская", Distance = "736 м" }
            },
            LastOrder = "12 февраля",
            Link = "#"
        },
        new Hotel
        {
            Id = 4402442,
            Name = "Гостиница Академическая",
            Stars = 3,
            Locality = "Москва",
            Destination = "ул. Донская, д. 1",
            Image = "/images/4179d9e34940a65be131835247cda79c.jpg",
            Price = 5100,
            Rating = 4.6f,
            Reviews = 218,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Октябрьская", Distance = "361 м" },
                new MetroStation { Name = "Добрынинская", Distance = "774 м" }
            },
            LastOrder = "8 февраля",
            Link = "#"
        }
    };

        public static List<Hotel> TopSpbHotels { get; } = new List<Hotel>
    {
        new Hotel
        {
            Id = 1232,
            Name = "Гостиница Русь",
            Stars = 4,
            Locality = "Санкт-Петербург",
            Destination = "ул. Артиллерийская, д. 1",
            Image = "/images/0000001474381638_144078.jpg",
            Price = 3900,
            Rating = 3.9f,
            Reviews = 145,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Чернышевская", Distance = "536 м" },
                new MetroStation { Name = "Маяковская", Distance = "1.07 км" }
            },
            LastOrder = "28 января",
            Link = "#"
        },
        new Hotel
        {
            Id = 133179,
            Name = "Арт-отель Карелия",
            Stars = 4,
            Locality = "Санкт-Петербург",
            Destination = "ул. Маршала Тухачевского, 27/2",
            Image = "/images/0000002906309150_353006.jpg",
            Price = 3100,
            Rating = 4.2f,
            Reviews = 89,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Новочеркасская", Distance = "1.2 км" }
            },
            LastOrder = "9 февраля",
            Link = "#"
        },
        new Hotel
        {
            Id = 103,
            Name = "Гостиница Россия",
            Stars = 3,
            Locality = "Санкт-Петербург",
            Destination = "пл. Чернышевского, д. 11",
            Image = "/images/0000000773570029_164436.jpg",
            Price = 3410,
            Rating = 3.8f,
            Reviews = 203,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Парк Победы", Distance = "477 м" }
            },
            LastOrder = "15 января",
            Link = "#"
        },
        new Hotel
        {
            Id = 5557343,
            Name = "Гостевой дом Володарский",
            Stars = 3,
            Locality = "Санкт-Петербург",
            Destination = "Территория Сергиево, ул. Мичурина, д. 1",
            Image = "/images/d78c25800dbf2c4176f341ba3563a7d0dc8ca82c.JPEG",
            Price = 3900,
            Rating = 4.5f,
            Reviews = 67,
            Metro = null,
            LastOrder = "28 ноября",
            Link = "#"
        }
    };

        public static List<Hotel> TopNnHotels { get; } = new List<Hotel>
    {
        new Hotel
        {
            Id = 813191,
            Name = "Гостиница Заречная",
            Stars = 3,
            Locality = "Нижний Новгород",
            Destination = "проспект Ленина, д. 36",
            Image = "/images/0000000267313223_608227.jpg",
            Price = 5300,
            Rating = 3.9f,
            Reviews = 221,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Заречная", Distance = "164 м" }
            },
            LastOrder = "20 января",
            Link = "#"
        },
        new Hotel
        {
            Id = 10729,
            Name = "Отель Ибис Нижний Новгород",
            Stars = 3,
            Locality = "Нижний Новгород",
            Destination = "ул. Максима Горького, д. 115",
            Image = "/images/1c316aebebf7813a89338d47f9acaca09683aa87.jpeg",
            Price = 3200,
            Rating = 3.8f,
            Reviews = 345,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Горьковская", Distance = "446 м" }
            },
            LastOrder = "11 декабря",
            Link = "#"
        },
        new Hotel
        {
            Id = 5054673,
            Name = "Отель Саврасовская",
            Stars = 3,
            Locality = "Нижний Новгород",
            Destination = "ул. Верхняя, д. 18",
            Image = "/images/5b1b1ce377ef9a9ff7a6d82d8019772377edbacb.jpeg",
            Price = 2700,
            Rating = 4.2f,
            Reviews = 105,
            Metro = null,
            LastOrder = "22 декабря",
            Link = "#"
        },
        new Hotel
        {
            Id = 313,
            Name = "Гостиница Автозаводская",
            Stars = 3,
            Locality = "Нижний Новгород",
            Destination = "Молодежный пр-т, 6",
            Image = "/images/0000001330303210_895836.jpg",
            Price = 5850,
            Rating = 4.0f,
            Reviews = 187,
            Metro = new List<MetroStation>
            {
                new MetroStation { Name = "Парк культуры", Distance = "263 м" }
            },
            LastOrder = "5 февраля",
            Link = "#"
        }
    };
        public static List<Hotel> AllHotels { get; } = new List<Hotel>();
        static DataSeeds()
        {
            AllHotels.AddRange(LastOrders);
            AllHotels.AddRange(TopMoscowHotels);
            AllHotels.AddRange(TopSpbHotels);
            AllHotels.AddRange(TopNnHotels);
            AllHotels.RemoveAll(h => AllHotels.Count(x => x.Id == h.Id) > 1);
        }
    }
}
