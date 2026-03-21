namespace Vashotel.API.Models
{
    public class Destinations
    {
        public string City { get; set; }
        public string Count { get; set; }
        public string Image { get; set; }
        public List<DestinationHotels> Hotels { get; set; }
    }
}
