using System;
using System.Collections.Generic;

namespace Api.Movies
{
    public class CustomerDto
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Status { get; set; }
        public DateTime? StatusExpirationDate { get; set; }
        public decimal MoneySpent { get; set; }
        public List<PurchasedMovieDto> PurchasedMovies { get; set; }
    }
}
