﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AppraisalFeedBackAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class AppraisalFeedBackContext : DbContext
    {
        public AppraisalFeedBackContext()
            : base("name=AppraisalFeedBackContext")
        {
            Database.SetInitializer<AppraisalFeedBackContext>(new AppraisalFeedBackDBInitializer());
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Appraisal> Appraisals { get; set; }
        public virtual DbSet<Appraisee> Appraisees { get; set; }
    }

    
}