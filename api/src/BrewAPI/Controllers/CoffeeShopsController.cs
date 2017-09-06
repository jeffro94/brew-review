using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoffeeShopCore.Models;

namespace CoffeeShopCore.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class CoffeeShopsController : Controller
    {
        private readonly BrewContext _context;

        public CoffeeShopsController(BrewContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<CoffeeShop> GetAll()
        {
            return _context.Shops;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var shop = await _context.Shops.SingleOrDefaultAsync(m => m.Key == id);

            if (shop == null)
            {
                return NotFound();
            }

            return Ok(shop);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CoffeeShop shop)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Shops.Add(shop);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = shop.Key }, shop);
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Update([FromRoute] string id, [FromBody] CoffeeShop shop)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != shop.Key)
            {
                return BadRequest();
            }

            _context.Entry(shop).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CoffeeShopExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var shop = await _context.Shops.SingleOrDefaultAsync(m => m.Key == id);
            if (shop == null)
            {
                return NotFound();
            }

            _context.Shops.Remove(shop);
            await _context.SaveChangesAsync();

            return Ok(shop);
        }

        private bool CoffeeShopExists(string id)
        {
            return _context.Shops.Any(e => e.Key == id);
        }
    }
}
