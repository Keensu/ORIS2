namespace VasHotel.API.Models
{
    public class RequestFilters
    {
        public string? Destination { get; set; }
        public int? Stars { get; set; }
        public decimal? MaxPrice { get; set; }
        public float? MinRating { get; set; }
    }
}
