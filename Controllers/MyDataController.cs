// lets use some linq to sexy this up

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactWithNetCore.Controllers
{
    [Route("api/[controller]")]
    public class MyDataController : Controller
    {
        private static string[] Companies = new[] {
            "Kier", "Balfour Beatty", "McAlpine","Carillion"
        };

        [HttpGet("[action]")]
        public IEnumerable<StockPrice> StockPrices() {
            var rng = new Random();
            return Enumerable.Range(1,6).Select( i => NewMethod(rng));
        }

        public static StockPrice NewMethod(Random rng) => new StockPrice {
            CurrentPrice = rng.Next(0,500),
            StockName = Companies[rng.Next(Companies.Length)]
        };

        public class StockPrice
        {
            public int CurrentPrice { get; set; }
            public string StockName { get; set; }
        }

    }



}