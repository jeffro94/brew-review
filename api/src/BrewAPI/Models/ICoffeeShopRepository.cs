using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShopCore.Models
{
    public interface ICoffeeShopRepository
    {
        void Add(CoffeeShop item);
        IEnumerable<CoffeeShop> GetAll();
        CoffeeShop Find(string key);
        CoffeeShop Remove(string key);
        void Update(CoffeeShop item);
    }
}
