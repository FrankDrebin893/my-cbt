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
    public class UpdateRationalResponseCommand : IRequest<bool>
    {
        public RationalResponseExercise RationalResponse { get; set; }

        protected class UpdateRationalResponseCommandHandler : IRequestHandler<UpdateRationalResponseCommand, bool>
        {
            private readonly ApplicationContext _context;

            public UpdateRationalResponseCommandHandler(ApplicationContext context)
            {
                _context = context;
            }

            public async Task<bool> Handle(UpdateRationalResponseCommand request, CancellationToken cancellationToken)
            {
                _context.RationalResponseExercises.Attach(request.RationalResponse);
                await _context.SaveChangesAsync(cancellationToken);
                return true;
            }
        }
    }
}
