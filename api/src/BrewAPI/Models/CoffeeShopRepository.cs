using System;
using System.Collections.Generic;
using System.Collections.Concurrent;

namespace CoffeeShopCore.Models
{
    public class CoffeeShopRepository : ICoffeeShopRepository
    {
        private static ConcurrentDictionary<string, CoffeeShop> _todos =
              new ConcurrentDictionary<string, CoffeeShop>();

        public CoffeeShopRepository()
        {
            Add(new CoffeeShop { Name = "Brew Urban Cafe", Address = "541 NW 1st Ave, Fort Lauderdale, FL 33301", MediumCoffeePrice = 2.49, Rating = 4 });
            Add(new CoffeeShop { Name = "Starbucks", Address = "10 S Federal Hwy, Fort Lauderdale, FL 33301", MediumCoffeePrice = 1.89, Rating = 3 });
            Add(new CoffeeShop { Name = "Warsaw Coffee Co", Address = "815 NE 13th St, Fort Lauderdale, FL 33304", MediumCoffeePrice = 3.49, Rating = 4 });
        }

        public IEnumerable<CoffeeShop> GetAll()
        {
            return _todos.Values;
        }

        public void Add(CoffeeShop item)
        {
            item.Key = Guid.NewGuid().ToString();
            _todos[item.Key] = item;
        }

        public CoffeeShop Find(string key)
        {
            CoffeeShop item;
            _todos.TryGetValue(key, out item);
            return item;
        }

        public CoffeeShop Remove(string key)
        {
            CoffeeShop item;
            _todos.TryRemove(key, out item);
            return item;
        }

        public void Update(CoffeeShop item)
        {
            _todos[item.Key] = item;
        }
    }
}
