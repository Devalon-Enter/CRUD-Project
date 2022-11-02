using System.Data;
using test_project_data.App.Models;
using test_project_data.App.Interfaces;
using System;
using System.Collections.Generic;
using Dapper;

namespace test_project_data.App.Storage
{
    public class UserRepository : IUserRepository
    {
        private readonly IDbConnection _db;

        public UserRepository(IDbConnection db)
        {
            _db = db;
        }

        public User GetUser(Guid id) => _db.Get<User>(id);

        public IEnumerable<User> GetUsers()
        {
            return _db.GetList<User>();
        }

        public User CreateUser(User user)
        {
            user.id = _db.Insert<Guid, User>(user);
            return user;
        }

        public void UpdateUser(User user)
        {
            _db.Update(user);
        }

        public void DeleteUser(Guid id)
        {
            var user = _db.Get<User>(id);
            _db.Delete(user);
        }
    }
}