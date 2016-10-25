using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoffeeShopCore.Models;

namespace CoffeeShopCore.Controllers
{
    [Route("api/[controller]")]
    public class CoffeeShopController : Controller
    {
        public CoffeeShopController(ICoffeeShopRepository shops)
        {
            CoffeeShops = shops;
        }
        public ICoffeeShopRepository CoffeeShops { get; set; }

        [HttpGet]
        public IEnumerable<CoffeeShop> GetAll()
        {
            return CoffeeShops.GetAll();
        }

        [HttpGet("{id}", Name = "GetCoffeeShop")]
        public IActionResult GetById(string id)
        {
            var item = CoffeeShops.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody]CoffeeShop shop)
        {
            if (shop == null)
            {
                return BadRequest();
            }
            CoffeeShops.Add(shop);
            return CreatedAtRoute("GetCoffeeShop", new { id = shop.Key }, shop);
        }

        [HttpPatch("{id}")]
        public IActionResult Update(string id, [FromBody] CoffeeShop shop)
        {
            if (shop == null || shop.Key != id)
            {
                return BadRequest();
            }

            var theShop = CoffeeShops.Find(id);
            if (theShop == null)
            {
                return NotFound();
            }

            CoffeeShops.Update(shop);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var theShop = CoffeeShops.Find(id);
            if (theShop == null)
            {
                return NotFound();
            }

            CoffeeShops.Remove(id);
            return new NoContentResult();
        }

    }
}
