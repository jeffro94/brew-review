using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShopCore.Models
{
    public class CoffeeShop
    {
        public string Key { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int Rating { get; set; }
        public double MediumCoffeePrice { get; set; }
    }
}
