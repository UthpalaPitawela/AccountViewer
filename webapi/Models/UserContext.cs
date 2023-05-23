using Microsoft.EntityFrameworkCore;

namespace AccountBalanceViewer.Models
{
    public class UserContext: DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }
        public DbSet<User> User { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>().HasKey(b => b.Id);
            base.OnModelCreating(builder);
        }
    }
}
