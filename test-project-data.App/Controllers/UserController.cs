using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using test_project_data.App.Dtos;
using test_project_data.App.Interfaces;
using test_project_data.App.Models;

namespace test_project_data.App.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private IDbConnection? _db;
        private IUserRepository _userRepository;
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger, IUserRepository userRepository)
        {
            _logger = logger;
            _userRepository = userRepository;
        }

        [HttpGet("{id}")]
        public ActionResult<UserDto> GetUser(Guid id)
        {
            var user = _userRepository.GetUser(id);

            if (user is null)
                return NotFound();

            return user.AsDto();
        }

        [HttpGet]
        public IEnumerable<UserDto> GetUsers()
        {
           return _userRepository.GetUsers().Select(user => user.AsDto());
        }

        [HttpPost]
        public ActionResult<UserDto> CreateUser(CreateUserDto userDto)
        {
            User user = new()
            {
                name = userDto.name,
                vorname = userDto.vorname,
                e_mail = userDto.e_mail,
                telefon = userDto.telefon,
                geburtstag = userDto.geburtstag
            };

            _userRepository.CreateUser(user);

            return CreatedAtAction(nameof(GetUser), new { id = user.id }, user.AsDto());
        }

        [HttpPut("{id}")]
        public ActionResult UpdateUser(Guid id, UpdateUserDto userDto)
        {
            var existingUser = _userRepository.GetUser(id);

            if (existingUser is null)
                return NotFound();
            
            User updatedUser = existingUser with
            {
                name = userDto.name,
                vorname = userDto.vorname,
                e_mail = userDto.e_mail,
                telefon = userDto.telefon,
                geburtstag = userDto.geburtstag
            };

            _userRepository.UpdateUser(updatedUser);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteUser(Guid id)
        {
            var existingUser = _userRepository.GetUser(id);

            if (existingUser is null)
                return NotFound();

            _userRepository.DeleteUser(id);

            return NoContent();
        }

    }
}