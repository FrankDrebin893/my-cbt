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
    public class GetRationalResponseByIdQuery : IRequest<RationalResponseExercise>
    {
        public int Id { get; set; }
    }

    public class
        GetRationalResponseByIdQueryHandler : IRequestHandler<GetRationalResponseByIdQuery, RationalResponseExercise
        >
    {
        private readonly ApplicationContext _context;

        public GetRationalResponseByIdQueryHandler(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<RationalResponseExercise> Handle(GetRationalResponseByIdQuery request,
            CancellationToken cancellationToken)
        {
            return await _context.RationalResponseExercises
                .Include(r => r.Entries)
                .FirstAsync(r => r.Id == request.Id, cancellationToken: cancellationToken);
        }
    }
}