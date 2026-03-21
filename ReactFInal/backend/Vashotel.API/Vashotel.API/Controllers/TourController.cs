using Microsoft.AspNetCore.Mvc;
using Vashotel.API.Data;
using Vashotel.API.Models;
using VasHotel.API.Models;


namespace Vashotel.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TourController : ControllerBase
    {
        //api/tour
        [HttpGet]
        public ActionResult GetAllHotels([FromQuery] RequestFilters filters)
        {
            var hotels = DataSeeds.AllHotels.AsQueryable();

            if (!string.IsNullOrEmpty(filters.Destination))
            {
                hotels = hotels.Where(h => h.Locality == filters.Destination);
            }

            if (filters.Stars.HasValue)
            {
                hotels = hotels.Where(h => h.Stars == filters.Stars.Value);
            }

            if (filters.MaxPrice.HasValue)
            {
                hotels = hotels.Where(h => h.Price <= filters.MaxPrice.Value);
            }

            if (filters.MinRating.HasValue)
            {
                hotels = hotels.Where(h => h.Rating >= filters.MinRating.Value);
            }

            return Ok(hotels.ToList());
        }

        //api/tour/filters
        [HttpGet("filters")]
        public ActionResult<Filters> GetFilters()
        {
            var hotels = DataSeeds.AllHotels;

            var filters = new Filters
            {
                Destination = hotels
                    .Select(h => h.Locality)
                    .Distinct()
                    .ToList(),

                Stars = hotels
                    .Select(h => h.Stars)
                    .Distinct()
                    .OrderBy(s => s)
                    .ToList(),

                MinPrice = hotels.Min(h => h.Price),
                MaxPrice = hotels.Max(h => h.Price),


                MinRating = hotels.Min(h => h.Rating),
                MaxRating = hotels.Max(h => h.Rating)
            };

            return Ok(filters);
        }


        [HttpGet("{id}")]
        public ActionResult<Hotel> GetById(int id)
        {
            var hotel = DataSeeds.AllHotels.FirstOrDefault(h => h.Id == id);

            if (hotel == null)
            {
                return NotFound($"Отель с ID {id} не найден");
            }

            return Ok(hotel);
        }
    }
}
