using AccountBalanceViewer.Models;
using AutoMapper;
//using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webApi.Authorization;

namespace MyReadingList.WebAPI.Controllers
{
    [ApiController]
    [EnableCors("mypolicy")]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        private UserContext _context;
        private IJwtUtils _jwtUtils;
        private IMapper _mapper;
        public UsersController(UserContext context, IJwtUtils jwtUtils, IMapper mapper)

        {
            _context = context;
            _jwtUtils = jwtUtils;
            _mapper = mapper;
        }

        //Get account details

        [HttpPost("authenticate")]
        public async Task<ActionResult<AuthenticateResponse>> Authenticate(AuthenticateRequest authRequest)
        {
            var user = _context.User.SingleOrDefault(x => x.Username == authRequest.Username);


            string salt = BCrypt.Net.BCrypt.GenerateSalt();
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(authRequest.Password, salt);
            if (user == null || !BCrypt.Net.BCrypt.Verify(user.Password,passwordHash))
                throw new Exception("Username or password is incorrect");

            // authentication successful

            var response = _mapper.Map<AuthenticateResponse>(user);
            response.Token = _jwtUtils.GenerateToken(user);

            return response;
        }
    }
}

