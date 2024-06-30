using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace inventory.Models
{
    public class Account
    {
        [Required(ErrorMessage = "User name is required")]
        public string userName { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string password { get; set; }
    }
}