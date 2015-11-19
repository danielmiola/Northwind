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
    public class OrdersController : Controller
    {
        private NorthwindEntities db = new NorthwindEntities();

        // GET: /Orders/
        public ActionResult Index()
        {
            var orders = db.Orders.Include(o => o.Customers).Include(o => o.Employees).Include(o => o.Shippers);
            return View(orders);
        }

        //// POST: /Orders
        //[HttpPost]
        //public ActionResult Index(string sort = "", int? current = 1, int? rowCount = 10, string searchPhrase = "")
        //{
        //    var orders = db.Orders.Include(o => o.Customers).Include(o => o.Employees).Include(o => o.Shippers);

        //    switch (sort)
        //    {
        //        case "date":
        //            orders = orders.OrderByDescending(o => o.OrderDate);
        //            break;
        //        case "customer":
        //            orders = orders.OrderBy(o => o.Customers.CompanyName);
        //            break;
        //        case "employee":
        //            orders = orders.OrderByDescending(o => o.Employees.FirstName);
        //            break;
        //        case "shipper":
        //            orders = orders.OrderByDescending(o => o.Shippers.CompanyName);
        //            break;
        //        case "shipcity":
        //            orders = orders.OrderByDescending(o => o.ShipCity);
        //            break;
        //        case "shipcountry":
        //            orders = orders.OrderByDescending(o => o.ShipCountry);
        //            break;
        //        case "asc":
        //            orders = orders.OrderByDescending(o => o.ShipCountry);
        //            break;
        //        default:
        //            orders = orders.OrderBy(o => o.OrderDate);
        //            break;
        //    }

        //    var take = rowCount.GetValueOrDefault();
        //    var skip = ((current.GetValueOrDefault() - 1) * take);
        //    var count = orders.Count();

        //    orders = orders.Skip(skip).Take(take);

        //    var rows = new List<Object>();
        //    foreach (var o in orders)
        //    {
        //        rows.Add(new
        //        {
        //            date = o.OrderDate.ToString(),
        //            customer = o.Customers.CompanyName,
        //            employee = o.Employees.FirstName,
        //            shipper = o.Shippers.CompanyName,
        //            shipaddress = o.ShipAddress,
        //            shipcity = o.ShipCity,
        //            shipcountry = o.ShipCity
        //        });
        //    }

        //    return Json(new
        //    {
        //        current = current,
        //        rowCount = rowCount,
        //        rows = rows,
        //        total = count
        //    }, JsonRequestBehavior.AllowGet);
        //}

        // GET: /Orders/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Orders orders = db.Orders.Find(id);
            if (orders == null)
            {
                return HttpNotFound();
            }
            return PartialView("~/views/Orders/Details.cshtml", orders);
        }

        // GET: /Orders/Create
        public ActionResult Create()
        {
            ViewBag.CustomerID = new SelectList(db.Customers, "CustomerID", "CompanyName");
            ViewBag.EmployeeID = new SelectList(db.Employees, "EmployeeID", "LastName");
            ViewBag.ShipVia = new SelectList(db.Shippers, "ShipperID", "CompanyName");
            return PartialView("~/views/Orders/Create.cshtml");
        }

        // POST: /Orders/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include="OrderID,CustomerID,EmployeeID,OrderDate,RequiredDate,ShippedDate,ShipVia,Freight,ShipName,ShipAddress,ShipCity,ShipRegion,ShipPostalCode,ShipCountry")] Orders orders)
        {
            if (ModelState.IsValid)
            {
                db.Orders.Add(orders);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CustomerID = new SelectList(db.Customers, "CustomerID", "CompanyName", orders.CustomerID);
            ViewBag.EmployeeID = new SelectList(db.Employees, "EmployeeID", "LastName", orders.EmployeeID);
            ViewBag.ShipVia = new SelectList(db.Shippers, "ShipperID", "CompanyName", orders.ShipVia);
            return View(orders);
        }

        // GET: /Orders/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Orders orders = db.Orders.Find(id);
            if (orders == null)
            {
                return HttpNotFound();
            }
            ViewBag.CustomerID = new SelectList(db.Customers, "CustomerID", "CompanyName", orders.CustomerID);
            ViewBag.EmployeeID = new SelectList(db.Employees, "EmployeeID", "LastName", orders.EmployeeID);
            ViewBag.ShipVia = new SelectList(db.Shippers, "ShipperID", "CompanyName", orders.ShipVia);
            return PartialView("~/views/Orders/Edit.cshtml", orders);
        }

        // POST: /Orders/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include="OrderID,CustomerID,EmployeeID,OrderDate,RequiredDate,ShippedDate,ShipVia,Freight,ShipName,ShipAddress,ShipCity,ShipRegion,ShipPostalCode,ShipCountry")] Orders orders)
        {
            if (ModelState.IsValid)
            {
                db.Entry(orders).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CustomerID = new SelectList(db.Customers, "CustomerID", "CompanyName", orders.CustomerID);
            ViewBag.EmployeeID = new SelectList(db.Employees, "EmployeeID", "LastName", orders.EmployeeID);
            ViewBag.ShipVia = new SelectList(db.Shippers, "ShipperID", "CompanyName", orders.ShipVia);
            return View(orders);
        }

        // GET: /Orders/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Orders orders = db.Orders.Find(id);
            if (orders == null)
            {
                return HttpNotFound();
            }
            return PartialView("~/views/Orders/Details.cshtml", orders);
        }

        // POST: /Orders/Delete/5
        [HttpPost]
        public JsonResult DeleteConfirmed(int id)
        {
            Orders orders = db.Orders.Find(id);
            db.Order_Details.RemoveRange(orders.Order_Details);
            db.Orders.Remove(orders);
            db.SaveChanges();

            return Json(id);
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
