using AccountBalanceViewer.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Web;
using System.Data;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Hosting;
using System.Reflection.PortableExecutable;
using ExcelDataReader;
using System.Net.Http;
using System.Security.Principal;
using System.Text.Json.Nodes;

namespace MyReadingList.WebAPI.Controllers
{
    [ApiController]
    [EnableCors("mypolicy")]
    [Route("[controller]")]

    public class AccountsController : ControllerBase
    {
        private readonly AccountContext _context;
        private readonly ILogger<AccountsController> _logger;
        IWebHostEnvironment hostEnvironment;
        IExcelDataReader reader;
        public AccountsController(AccountContext context, ILogger<AccountsController> logger)
        {
            _context = context;
            _logger = logger;
            this.hostEnvironment = hostEnvironment;
        }

        //Get a Book by id
        [HttpGet("{id}")]
        public async Task<ActionResult<Account>> GetBook(string id)
        {
            Guid guidId = Guid.Parse(id);

            var book = await _context.Account.FindAsync(guidId);

            if (book == null)
                return NotFound();

            return book;
        }

        //Add monthly account details
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Create([FromBody] List<AccountRequest> details)
        {

          
            foreach (AccountRequest accountData in details)
            {
                Account account = new Account();
                account.Id = Guid.NewGuid();
                account.CEOCar = accountData.CEOCar;
                account.RandD = accountData.RandD;
                account.Canteen = accountData.Canteen;
                account.Parking = accountData.Parking;
                account.Month = accountData.Month;

                await _context.Account.AddAsync(account);
                await _context.SaveChangesAsync();
            }
            var createdResource = new { Id = 1, Version = "1.0" };

            var routeValues = new { id = createdResource.Id, version = createdResource.Version };
            //return "Done"
            return CreatedAtAction(nameof(GetBook), routeValues,createdResource);


        }



        //Get account details
        [HttpGet("read")]
        public async Task<ActionResult<IEnumerable<Account>>> GetAccountRead()
        {
            bool read = true;
            var accountDetails = await _context.Account.ToListAsync();

            var accountsRead = (from data in accountDetails select data).ToList();

            return accountsRead;
        }


        
    }
}