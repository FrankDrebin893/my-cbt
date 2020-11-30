using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyCbt.Core.Entities.Exercises;
using MyCbt.Infrastructure.Persistence;

namespace MyCbt.Application.RationalResponse.Queries
{
    public class GetRationalResponsesQuery : IRequest<List<RationalResponseExercise>>, IRequest<RationalResponseExercise>
    {
    }

    public class
        GetRationalResponsesQueryHandler : IRequestHandler<GetRationalResponsesQuery, List<RationalResponseExercise>
        >
    {
        private readonly ApplicationContext _context;

        public GetRationalResponsesQueryHandler(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<List<RationalResponseExercise>> Handle(GetRationalResponsesQuery request,
            CancellationToken cancellationToken)
        {
            return await _context.RationalResponseExercises
                .Include(r => r.Entries)
                .ToListAsync(cancellationToken: cancellationToken);
        }
    }
}