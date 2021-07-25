using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCbt.Application.Journal.Commands;
using MyCbt.Application.Journal.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCbt.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JournalController : ApiControllerBase
    {
        [HttpPost]
        [Route("AddJournalEntry")]
        [Authorize]
        public async Task<IActionResult> AddJournalEntry(AddJournalEntryCommand addJournalEntryCommand)
        {
            var succeeded = await Mediator.Send(addJournalEntryCommand);
            return Ok(succeeded);
        }


        [HttpGet]
        [Route("GetJournalEntriesByUserId")]
        [Authorize]
        public async Task<IActionResult> GetJournalEntriesByUserId(string userId)
        {
            var succeeded = await Mediator.Send(new GetJournalEntriesByUserIdQuery()
            {
                UserId = userId
            }); ;
            return Ok(succeeded);
        }
    }
}
