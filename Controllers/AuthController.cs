using inventory.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace inventory.Controllers
{
    public class AuthController : Controller
    {
        // GET: Auth
        public ActionResult Login()
        {
            ViewBag.Message = "";
            return View();
        }
        [HttpPost]
        public ActionResult Login(Account Model)
        {
            if (!ModelState.IsValid)
            {
                return View(Model);
            }
            if (Model.userName == "Sohag" && Model.password == "12345")
            {
                Session["User"] = Model.userName;
                ViewBag.Message = "Login Success";
                ViewBag.status = "True";
            }
            else
            {
                ViewBag.Message = "Wrong username or password";
                ViewBag.status = "False";

            }
            return View();
        }
    }
}