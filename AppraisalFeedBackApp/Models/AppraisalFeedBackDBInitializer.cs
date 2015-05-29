using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;

namespace AppraisalFeedBackAPI.Models
{
    public class AppraisalFeedBackDBInitializer : CreateDatabaseIfNotExists<AppraisalFeedBackContext>
    {
        protected override void Seed(AppraisalFeedBackContext context)
        {
            context.Appraisals.Add(new Appraisal() { ProjectName = "AFC", AppraisalType = "Mid Year", AppraisalYear = 2015, AppraisalStatus = "Pending", CustomerEmail = "sudatht@99x.lk" });

            base.Seed(context);
        }
    }
}
