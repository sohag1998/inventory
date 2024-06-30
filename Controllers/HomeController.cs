using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace inventory.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Dashboard()
        {
            if (Session["User"] == null)
                return RedirectToAction("Login", "Auth");
            return View();
            
        }
    }
}