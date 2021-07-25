using System;
using System.Collections.Generic;
using System.Text;

namespace MyCbt.Core.Entities.Journal
{
    public class JournalEntry
    {
        public int Id { get; set; }
        public DateTime Created { get; set; }
        public string EntryContent { get; set; }
        public string UserId { get; set; }
    }
}
