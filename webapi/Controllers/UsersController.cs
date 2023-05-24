using AccountBalanceViewer.Models;
//using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;
using BCrypt.Net;
namespace MyReadingList.WebAPI.Controllers
{
    [ApiController]
    [EnableCors("mypolicy")]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        private UserContext _context;
        //private readonly IMapper _mapper;
        public UsersController(UserContext context)

        {
            _context = context;
            //_mapper = mapper;
        }

        //Get account details

        [HttpPost("authenticate")]
        public async Task<ActionResult<User>> Authenticate(AuthenticateRequest authRequest)
        {
            var user = _context.User.SingleOrDefault(x => x.Username == authRequest.Username);

            // validate
            //if (user == null || !BCrypt.Net.BCrypt.Verify(authRequest.Password, user.Password))
            //    throw new Exception("Username or password is incorrect");
            string salt = BCrypt.Net.BCrypt.GenerateSalt();
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(authRequest.Password, salt);
            //bool correctPassword = BCrypt.Net.BCrypt.Verify(passwordHash, storedPassword);
            if (user == null || !BCrypt.Net.BCrypt.Verify(user.Password,passwordHash))
                throw new Exception("Username or password is incorrect");

            // authentication successful
            //AuthenticateResponse response = _mapper.Map<AuthenticateResponse>(user);
            return user;
        }
    }
}

