using System;
using System.Collections.Generic;
using test_project_data.App.Models;

namespace test_project_data.App.Interfaces
{   
    public interface IUserRepository
    {
        User GetUser(Guid id);
        IEnumerable<User> GetUsers();
        User CreateUser(User user);
        void UpdateUser(User user);
        void DeleteUser(Guid id);
    }
}