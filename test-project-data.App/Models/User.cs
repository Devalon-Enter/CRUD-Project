using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace test_project_data.App.Models
{
    [Table("T_USER")]
    public record User
    {
        [Key]
        public Guid id { get; set; }
        public string? name  { get; set; }
        public string? vorname { get; set; }
        public string? e_mail { get; set; }
        public string? telefon { get; set; }
        public string? geburtstag { get; set; }
    }
}