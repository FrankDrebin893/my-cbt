using MediatR;
using MyCbt.Core.Entities.Journal;
using MyCbt.Infrastructure.Persistence;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MyCbt.Application.Journal.Commands
{
    public class AddJournalEntryCommand : IRequest<int>
    {
        public string UserId { get; set; }
        public string EntryContent { get; set; }

        protected class AddJournalEntryCommandHandler : IRequestHandler<AddJournalEntryCommand, int>
        {
            private readonly ApplicationContext _context;

            public AddJournalEntryCommandHandler(ApplicationContext context)
            {
                _context = context;
            }

            public async Task<int> Handle(AddJournalEntryCommand request, CancellationToken cancellationToken)
            {
                var entity = new JournalEntry()
                {
                    Created = DateTime.UtcNow,
                    EntryContent = request.EntryContent,
                    UserId = request.UserId
                };

                var result = await _context.JournalEntries.AddAsync(entity);
                await _context.SaveChangesAsync();
                return result.Entity.Id;
            }
        }
    }
}
