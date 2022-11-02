using System.ComponentModel.DataAnnotations;

namespace test_project_data.App.Dtos
{
    public record CreateUserDto
    {
        [Required]
        public string? name { get; set; }
        [Required]
        public string? vorname { get; set; }
        [Required]
        public string? e_mail { get; set; }
        [Required]
        public string? telefon { get; set; }
        [Required]
        public string? geburtstag { get; set; }
    }
}