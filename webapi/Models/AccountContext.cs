using Microsoft.EntityFrameworkCore;

namespace AccountBalanceViewer.Models
{
    public class AccountContext : DbContext
    {
        public AccountContext(DbContextOptions<AccountContext> options) : base(options) { }
        public DbSet<Account> Account{ get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Account>().HasKey(b => b.Id);
            base.OnModelCreating(builder);
        }
    }
}
