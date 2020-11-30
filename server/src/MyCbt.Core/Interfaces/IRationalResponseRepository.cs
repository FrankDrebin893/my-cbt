using MyCbt.Core.Entities.Exercises;
using System;
using System.Collections.Generic;
using System.Text;

namespace MyCbt.Core.Interfaces
{
    interface IRationalResponseRepository
    { 
        int Add(RationalResponseExercise rationalResponseExercise);
    }
}
