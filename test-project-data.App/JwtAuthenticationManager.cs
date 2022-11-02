using Microsoft.AspNetCore.Authorization;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;

namespace lorin_project_data.App
{
    public class JwtAuthentificationManager
    {
        private readonly string key;

        private readonly IDictionary<string, string> users = new Dictionary<string, string>()
        {
            {"test", "password"}, {"test1", "password"}
        };

        public JwtAuthentificationManager(string key)
        {
            this.key = key;
        }

        public string Authenticate(string username, string password)
        {
            if(!username.Any(u => u.Key == username && u.Value == password))
            {
                return null;
            }

            return null;
        }
    }
}