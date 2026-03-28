using Microsoft.EntityFrameworkCore;
using Vashotel.API.Models;
using VasHotel.API.Entities;

namespace VasHotel.API
{
    public class AppDbContext : DbContext
    {
        public DbSet<HotelEntity> Hotels { get; set; }
        public DbSet<MetroEntity> Metros { get; set; }

        public AppDbContext(DbContextOptions options) : base(options) { }

        
    }
}
