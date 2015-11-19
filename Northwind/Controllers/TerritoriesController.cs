using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Northwind.Models;

namespace Northwind.Controllers
{
    public class TerritoriesController : Controller
    {
        private NorthwindEntities db = new NorthwindEntities();

        // GET: /Territories/
        public ActionResult Index()
        {
            var territories = db.Territories.Include(t => t.Region);
            return View(territories.ToList());
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
