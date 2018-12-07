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
            "Company 1", "Company 2", "Company 3", "Company 4"
        };

        [HttpGet("[action]")]
        public IEnumerable<StockPrice> StockPrices(int index) {
            var rng = new Random();
            return Enumerable.Range(1,6).Select( i => NewMethod(i,index,rng));
        }

        public static StockPrice NewMethod(int i, int startIndex,Random rng) => new StockPrice {
            index = i + startIndex,
            CurrentPrice = rng.Next(0,500),
            StockName = Companies[rng.Next(Companies.Length)]
        };

        public class StockPrice
        {
            public int index { get; set; }
            public int CurrentPrice { get; set; }
            public string StockName { get; set; }
        }

    }



}