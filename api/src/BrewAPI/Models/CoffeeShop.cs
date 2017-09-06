using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace CoffeeShopCore.Models
{
    public class BrewContext : DbContext
    {
        public BrewContext(DbContextOptions<BrewContext> options)
            : base(options)
        { }

        public DbSet<CoffeeShop> Shops { get; set; }
    }

    public class CoffeeShop
    {
        [Key]
        public string Key { get; set; }
        [MaxLength(200)]
        [Required]
        public string Name { get; set; }
        [MaxLength(400)]
        public string Address { get; set; }
        [Range(1,5)]
        public int Rating { get; set; }
        [Range(0,1000)]
        public double MediumCoffeePrice { get; set; }
    }
}
