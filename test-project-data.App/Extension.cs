using test_project_data.App.Dtos;
using test_project_data.App.Models;

namespace test_project_data.App
{
    public static class MyExtension
    {
        public static UserDto AsDto(this User user)
        {
            return new UserDto
            {
                id = user.id,
                name = user.name,
                vorname = user.vorname,
                e_mail = user.e_mail,
                telefon = user.telefon,
                geburtstag = user.geburtstag
            };
        }
    }
}