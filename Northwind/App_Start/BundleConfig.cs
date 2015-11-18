﻿using System.Web;
using System.Web.Optimization;

namespace Northwind
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js",
                      "~/Scripts/main.js",
                      "~/Scripts/jquery.bootgrid.js",
                      "~/Scripts/Bootgrid-call.js",
                      "~/Scripts/Orders.js",
                      "~/Scripts/Customers.js",
                      "~/Scripts/Employees.js",
                      "~/Scripts/Territories.js",
                      "~/Scripts/Regions.js",
                      "~/Scripts/Products.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/jquery.bootgrid.css"));
        }
    }
}
