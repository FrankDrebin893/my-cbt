using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyCbt.Application.RationalResponse.Commands;
using MyCbt.Application.RationalResponse.Queries;
using MyCbt.Core.Entities.Exercises;
using MyCbt.Infrastructure.Persistence;

namespace MyCbt.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RationalResponseController : ApiControllerBase
    {
        private readonly ILogger<RationalResponseController> _logger;

        public RationalResponseController(ILogger<RationalResponseController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await Mediator.Send(new GetRationalResponsesQuery()));
        }

        [HttpGet]
        [Route("GetById")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await Mediator.Send(new GetRationalResponseByIdQuery() {Id = id}));
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> AddRationalResponse(AddRationalResponseCommand addRationalResponseCommand)
        {
            return Ok(await Mediator.Send(addRationalResponseCommand));
        }
    }
}