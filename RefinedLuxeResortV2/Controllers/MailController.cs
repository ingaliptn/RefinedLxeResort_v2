using RefinedLuxeResortV2.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;

namespace RefinedLuxeResortV2.Controllers;
    public class MailController : Controller
    {
        [HttpPost]
        public IActionResult ProcessForm(ContactUsModel cu, LogicModel l)
        {
            if (ModelState.IsValid)
            {
                string body;
                if (!string.IsNullOrEmpty(cu.Name)) // Check if formData contains fields specific to the first method
                {
                    body = ConstructBodyFromContactUsModel(cu);
                    l.Subject = $"Refined Luxe Resort Contact Form: {cu.Name}";
                }
                else
                {
                    // Handle the case where neither set of data is present
                    return BadRequest("Invalid form data");
                }


            using (var client = new SmtpClient())
            {
                client.Host = l.Smtp; // Your SMTP server (e.g., Gmail)
                client.Port = l.Port; // SMTP Port (Gmail uses 587)
                                      //client.EnableSsl = true;
                                      client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential(l.Login, l.Password);
                var message = new MailMessage();
                message.From = new MailAddress(l.FromEmail, l.FromName); // Your email address
                string[] toEmails = l.ToEmail.Split(',');
                foreach (string email in toEmails)
                {
                    message.To.Add(email.Trim());
                }
                message.Subject = l.Subject; // Email subject
                message.IsBodyHtml = true;
                message.Body = body;



                client.Send(message);
            }

        }
            else
            {
                var errors = ModelState.Values.SelectMany(v => v.Errors);
                // Handle validation errors
                return BadRequest(errors);
            }
            return RedirectToAction("Index", "Home");
        }

        private string ConstructBodyFromContactUsModel(ContactUsModel bn)
        {
            return $"Contact request from Refined Luxe Resort<br />" +
           $"Details: <br />" +
           $"Name: {bn.Name}<br>" +
           $"Phone: {bn.Phone}<br>" +
           $"Email: {bn.Email}<br>" +
           $"Date: {String.Format("{0:dddd, MMMM d, yyyy}", bn.Date)}<br>" +
           $"Message: {bn.Message}";
		}
    }
