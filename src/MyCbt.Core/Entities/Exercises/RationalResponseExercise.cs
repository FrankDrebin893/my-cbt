using System;
using System.Collections.Generic;
using System.Text;

namespace MyCbt.Core.Entities.Exercises
{
    public class RationalResponseExercise
    {
        public int Id { get; set; }
        public List<RationalResponseEntry> Entries { get; set; }
        public string UserId { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
