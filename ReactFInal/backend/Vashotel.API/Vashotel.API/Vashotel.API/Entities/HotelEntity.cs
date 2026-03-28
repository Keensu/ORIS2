using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Vashotel.API.Models;

namespace VasHotel.API.Entities
{
    public class HotelEntity
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public int Stars { get; set; }
        public string? Locality { get; set; }
        public string? Destination { get; set; }
        public string? Image { get; set; }
        public int? Price { get; set; }
        public float? Rating { get; set; }
        public int? Reviews { get; set; }
        public string? LastOrder { get; set; }
        public string? Link { get; set; }

        public List<MetroEntity>? MetroStations { get; set; }

    }
}
