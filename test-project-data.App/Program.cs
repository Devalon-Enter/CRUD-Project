using System.Data.SqlClient;
using System.Data;
using test_project_data.App.Interfaces;
using test_project_data.App.Storage;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var ConnectionStrings = builder.Configuration.GetConnectionString("Default");

builder.Services.AddControllersWithViews();
builder.Services.AddTransient<IDbConnection>(_ => new SqlConnection(ConnectionStrings));

// repositoriesp
builder.Services.AddTransient<IUserRepository, UserRepository>();

//Authentication
builder.Services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
  .AddEntityFrameworkStores<ApplicationDbContext>();

//Add CORS
builder.Services.AddCors(options =>
{
options.AddPolicy(
  name: "CORSOpenPolicy", 
  builder => {    builder.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();
  });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("CORSOpenPolicy");


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
