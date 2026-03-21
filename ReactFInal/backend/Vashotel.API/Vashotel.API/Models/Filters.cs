namespace Vashotel.API.Models
{
    public class Filters
    {
        public List<string>? Destination { get; set; }
        public DateTime? CheckInDate { get; set; }
        public DateTime? CheckOutDate { get; set; }
        public int? MinPrice { get; set; }
        public int? MaxPrice { get; set; }
        public float? MinRating { get; set; }
        public float? MaxRating { get; set; }
        public List<int>? Stars { get; set; }

    }
}
