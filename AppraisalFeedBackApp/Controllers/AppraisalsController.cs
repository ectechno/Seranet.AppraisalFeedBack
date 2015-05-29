using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AppraisalFeedBackAPI.Models;
using System.Web.Http.Cors;
using System.Web.Http.OData;

namespace AppraisalFeedBackAPI.Controllers
{
    [Authorize]
    [EnableCorsAttribute("http://localhost:53617", "*", "*")]
    public class AppraisalsController : ApiController
    {
        private AppraisalFeedBackContext db = new AppraisalFeedBackContext();

        // GET: api/Appraisals
        [EnableQuery()]
        public IQueryable<Appraisal> GetAppraisals()
        {
            return db.Appraisals.AsQueryable();
        }

        //public IQueryable<Appraisal> GetAppraisals(string search)
        //{
        //    var appraisals = db.Appraisals.Where(a => a.ProjectName.Contains(search));
        //    if (appraisals == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(appraisals);
        //}

        // GET: api/Appraisals/5
        [ResponseType(typeof(Appraisal))]
        public IHttpActionResult GetAppraisal(int id)
        {
            Appraisal appraisal = db.Appraisals.Find(id);

            if (id == 0)
            {
                appraisal = new Appraisal() { AppraisalYear =  short.Parse(DateTime.Today.Year.ToString()) };
            }

            if (appraisal == null)
            {
                return NotFound();
            }

            return Ok(appraisal);
        }

        // PUT: api/Appraisals/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAppraisal(int id, Appraisal appraisal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != appraisal.Id)
            {
                return BadRequest();
            }

            db.Entry(appraisal).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppraisalExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Appraisals
        [ResponseType(typeof(Appraisal))]
        public IHttpActionResult PostAppraisal(Appraisal appraisal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Appraisals.Add(appraisal);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = appraisal.Id }, appraisal);
        }

        // DELETE: api/Appraisals/5
        [ResponseType(typeof(Appraisal))]
        public IHttpActionResult DeleteAppraisal(int id)
        {
            Appraisal appraisal = db.Appraisals.Find(id);
            if (appraisal == null)
            {
                return NotFound();
            }

            db.Appraisals.Remove(appraisal);
            db.SaveChanges();

            return Ok(appraisal);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AppraisalExists(int id)
        {
            return db.Appraisals.Count(e => e.Id == id) > 0;
        }
    }
}