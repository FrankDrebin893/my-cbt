using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyCbt.Core.Entities.Exercises;
using MyCbt.Infrastructure.Persistence;

namespace MyCbt.Application
{
    public class RationalResponseService
    {
        private readonly ApplicationContext _context;

        public RationalResponseService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<RationalResponseExercise> GetById(int rationalResponseId)
        {
            return await _context.RationalResponseExercises.FindAsync(rationalResponseId);
        }

        public async Task<List<RationalResponseExercise>> GetAll()
        {
            return await _context.RationalResponseExercises.ToListAsync();
        }
    }
}
