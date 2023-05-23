using AccountBalanceViewer.Models;
using Microsoft.AspNetCore.Mvc;

namespace MyReadingList.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly UserContext _context;
        public UsersController(UserContext context)
        {
            _context = context;
        }
    }
}