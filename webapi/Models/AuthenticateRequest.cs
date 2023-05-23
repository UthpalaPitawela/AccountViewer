using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class AuthenticateRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
