using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MyCbt.Core.Entities.Exercises;
using MyCbt.Infrastructure.Persistence;

namespace MyCbt.Application.RationalResponse.Commands
{
    public class AddRationalResponseCommand : IRequest<int>
    {
        public string UserId { get; set; }
        public List<RationalResponseEntry> Entries { get; set; }

        protected class AddRationalResponseCommandHandler : IRequestHandler<AddRationalResponseCommand, int>
        {
            private readonly ApplicationContext _context;

            public AddRationalResponseCommandHandler(ApplicationContext context)
            {
                _context = context;
            }

            public async Task<int> Handle(AddRationalResponseCommand request, CancellationToken cancellationToken)
            {
                var entity = new RationalResponseExercise();
                entity.Entries = request.Entries;
                entity.UserId = request.UserId;
                var added = await _context.AddAsync<RationalResponseExercise>(entity, cancellationToken);
                await _context.SaveChangesAsync(cancellationToken);
                return added.Entity.Id;
            }
        }
    }
}
