using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using RefinedLuxeResortV2.Models;

namespace RefinedLuxeResortV2.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult News_Blog_Details()
    {
        return View();
    }

    public IActionResult TermsAndConditions()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

