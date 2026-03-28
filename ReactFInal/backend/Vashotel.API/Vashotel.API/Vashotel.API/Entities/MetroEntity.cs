using System.ComponentModel.DataAnnotations;
using Vashotel.API.Models;

namespace VasHotel.API.Entities
{
    public class MetroEntity
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Distance { get; set; }

        public List<HotelEntity>? Hotels { get; set; }
    }
}
