using System;

namespace test_project_data.App.Dtos
{
    public record UserDto
    {
        public Guid? id { get; set; }
        public string? name { get; set; }
        public string? vorname { get; set; }
        public string? e_mail { get; set; }
        public string? telefon { get; set; }
        public string? geburtstag { get; set; }
        
    }
}