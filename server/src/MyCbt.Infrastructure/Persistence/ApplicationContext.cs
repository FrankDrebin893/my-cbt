using Microsoft.EntityFrameworkCore;
using MyCbt.Core.Entities.Exercises;
using System;
using System.Collections.Generic;
using System.Text;

namespace MyCbt.Infrastructure.Persistence
{
    public class ApplicationContext : DbContext
    {
        public DbSet<RationalResponseExercise> RationalResponseExercises {get;set;}
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("name=MyCbtDatabase");
        }
    }
}
