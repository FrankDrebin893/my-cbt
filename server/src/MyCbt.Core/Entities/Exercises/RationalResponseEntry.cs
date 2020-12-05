using System;
using System.Collections.Generic;
using System.Text;

namespace MyCbt.Core.Entities.Exercises
{
    public class RationalResponseEntry
    {
        public int Id { get; set; }
        public string Statement { get; set; }
        public string Response { get; set; }
        public string UserId { get; set; }
    }
}
