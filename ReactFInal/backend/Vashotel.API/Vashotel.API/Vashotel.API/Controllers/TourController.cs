using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vashotel.API.Data;
using Vashotel.API.Models;
using VasHotel.API;
using VasHotel.API.Entities;
using VasHotel.API.Models;

namespace Vashotel.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TourController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TourController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/tour
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hotel>>> GetAllHotels([FromQuery] RequestFilters filters)
        {
            var query = _context.Hotels.Include(h => h.MetroStations).AsQueryable();

            if (!string.IsNullOrEmpty(filters.Destination))
                query = query.Where(h => h.Locality == filters.Destination);

            if (filters.Stars.HasValue)
                query = query.Where(h => h.Stars == filters.Stars.Value);

            if (filters.MaxPrice.HasValue)
                query = query.Where(h => h.Price <= filters.MaxPrice.Value);

            if (filters.MinRating.HasValue)
                query = query.Where(h => h.Rating >= filters.MinRating.Value);

            var hotels = await query
                .Select(h => new Hotel
                {
                    Id = h.Id,
                    Name = h.Name,
                    Stars = h.Stars,
                    Locality = h.Locality,
                    Destination = h.Destination,
                    Image = h.Image,
                    Price = h.Price,
                    Rating = h.Rating,
                    Reviews = h.Reviews,
                    LastOrder = h.LastOrder,
                    Link = h.Link,
                    Metro = h.MetroStations.Select(m => new MetroStation
                    {
                        Name = m.Name,
                        Distance = m.Distance
                    }).ToList()
                })
                .ToListAsync();

            return Ok(hotels);
        }

        // GET: api/tour/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Hotel>> GetById(int id)
        {
            var hotel = await _context.Hotels
                .Include(h => h.MetroStations)
                .Where(h => h.Id == id)
                .Select(h => new Hotel
                {
                    Id = h.Id,
                    Name = h.Name,
                    Stars = h.Stars,
                    Locality = h.Locality,
                    Destination = h.Destination,
                    Image = h.Image,
                    Price = h.Price,
                    Rating = h.Rating,
                    Reviews = h.Reviews,
                    LastOrder = h.LastOrder,
                    Link = h.Link,
                    Metro = h.MetroStations.Select(m => new MetroStation
                    {
                        Name = m.Name,
                        Distance = m.Distance
                    }).ToList()
                })
                .FirstOrDefaultAsync();

            if (hotel == null)
                return NotFound($"Отель с ID {id} не найден");

            return Ok(hotel);
        }

        // POST: api/tour
        [HttpPost]
        public async Task<ActionResult<Hotel>> Create(Hotel hotel)
        {
            var entity = new HotelEntity
            {
                Name = hotel.Name,
                Stars = hotel.Stars,
                Locality = hotel.Locality,
                Destination = hotel.Destination,
                Image = hotel.Image,
                Price = hotel.Price,
                Rating = hotel.Rating,
                Reviews = hotel.Reviews,
                LastOrder = hotel.LastOrder,
                Link = hotel.Link,
                MetroStations = hotel.Metro?.Select(m => new MetroEntity
                {
                    Name = m.Name,
                    Distance = m.Distance
                }).ToList()
            };

            _context.Hotels.Add(entity);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = entity.Id }, hotel);
        }

        // PUT: api/tour/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Hotel updatedHotel)
        {
            if (id != updatedHotel.Id)
                return BadRequest();

            var hotel = await _context.Hotels
                .Include(h => h.MetroStations)
                .FirstOrDefaultAsync(h => h.Id == id);

            if (hotel == null)
                return NotFound();

            hotel.Name = updatedHotel.Name;
            hotel.Stars = updatedHotel.Stars;
            hotel.Locality = updatedHotel.Locality;
            hotel.Destination = updatedHotel.Destination;
            hotel.Image = updatedHotel.Image;
            hotel.Price = updatedHotel.Price;
            hotel.Rating = updatedHotel.Rating;
            hotel.Reviews = updatedHotel.Reviews;
            hotel.LastOrder = updatedHotel.LastOrder;
            hotel.Link = updatedHotel.Link;

            
            hotel.MetroStations = updatedHotel.Metro?.Select(m => new MetroEntity
            {
                Name = m.Name,
                Distance = m.Distance
            }).ToList();

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/tour/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var hotel = await _context.Hotels.FindAsync(id);

            if (hotel == null)
                return NotFound();

            _context.Hotels.Remove(hotel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/tour/filters
        [HttpGet("filters")]
        public async Task<ActionResult<Filters>> GetFilters()
        {
            var hotels = await _context.Hotels.ToListAsync();

            var filters = new Filters
            {
                Destination = hotels.Select(h => h.Locality).Distinct().ToList(),
                Stars = hotels.Select(h => h.Stars).Distinct().OrderBy(s => s).ToList(),
                MinPrice = hotels.Min(h => h.Price),
                MaxPrice = hotels.Max(h => h.Price),
                MinRating = hotels.Min(h => h.Rating),
                MaxRating = hotels.Max(h => h.Rating)
            };

            return Ok(filters);
        }
    }
}