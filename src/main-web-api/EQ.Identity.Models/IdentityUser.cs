﻿namespace EQ.Identity.Models
{
    public class IdentityUser
    {
        public string UserId { get; set; }

        public string Email { get; set; }

        public string UserName { get; set; }

        public string NickName { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string FullName { get; set; }

        public string PhoneNumber { get; set; }

        public bool? VerifyEmail { get; set; }
    }
}