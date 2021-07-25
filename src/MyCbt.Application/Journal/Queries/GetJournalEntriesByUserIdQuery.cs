using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MyCbt.Core.Entities.Exercises;
using System.Linq;
using MyCbt.Core.Entities.Journal;
using MyCbt.Infrastructure.Persistence;

namespace MyCbt.Application.Journal.Queries
{
    public class GetJournalEntriesByUserIdQuery : IRequest<List<JournalEntry>>
    {
        public string UserId { get; set; }
    }

    public class
        GetJournalEntriesByUserIdQueryHandler : IRequestHandler<GetJournalEntriesByUserIdQuery, List<JournalEntry>>
    {
        private readonly ApplicationContext _context;

        public GetJournalEntriesByUserIdQueryHandler(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<List<JournalEntry>> Handle(GetJournalEntriesByUserIdQuery request,
            CancellationToken cancellationToken)
        {
            return await _context.JournalEntries
                .AsNoTracking()
                .Where(j => j.UserId.Equals(request.UserId))
                .ToListAsync(cancellationToken);
        }
    }
}
