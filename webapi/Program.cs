using AccountBalanceViewer.Models;
using AutoMapper;
//using AutoMapper;
using Microsoft.EntityFrameworkCore;
using webapi.Helpers;
using webapi.Models;
using webApi.Authorization;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";


// Add services to the container.
var connection = builder.Configuration["ConnectionSqlite:SqliteConnectionString"];
builder.Services.AddDbContext<UserContext>(options => options.UseSqlite(connection));
builder.Services.AddDbContext<AccountContext>(options => options.UseSqlite(connection));
builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Services.AddControllers();



// Auto Mapper Configurations
//builder.Services.AddAutoMapper(typeof(AuthenticateResponse))


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "mypolicy",
                      policy =>
                      {
                          policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                      });
});

// configure automapper with all automapper profiles from this assembly
var mappingConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new MappingProfile());
});

IMapper mapper = mappingConfig.CreateMapper();
builder.Services.AddSingleton(mapper);
// configure strongly typed settings object
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

// configure DI for application services
builder.Services.AddScoped<IJwtUtils, JwtUtils>();
builder.Logging.ClearProviders();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(builder =>
               builder.AllowAnyOrigin()
                      .AllowAnyMethod()
                      .AllowAnyHeader());
}

app.UseHttpsRedirection();
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
