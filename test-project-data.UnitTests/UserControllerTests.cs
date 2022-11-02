using Xunit;
using System;
using Moq;
using test_project_data.App.Interfaces;
using test_project_data.App.Models;
using Microsoft.Extensions.Logging;
using test_project_data.App.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace test_project_data.UnitTests {
        public class UserControllerTests
    {
        
        private readonly Mock<IUserRepository> repositoryStub = new();
        private readonly Mock<ILogger<UserController>> loggerStub = new();


        //UnitOfWork_StateUnderTest_ExpectedBehavior
        [Fact]
        public void GetUser_WithUnexistingUser_ReturnsNotFound()
        {
            //Arrange
            // repositoryStub.Setup(repo => repo.GetUser(It.IsAny<Guid>()))
            //     .Returns((User)null);
            
            var controller = new UserController(loggerStub.Object, repositoryStub.Object);

            //Act
            var result = controller.GetUser(Guid.NewGuid());

            //Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public void GetUser_WithExistingUser_ReturnsExpectedUser()
        {
            //Arrange

            //Act

            //Assert

        }

        // private User CreateRandomUser()
        // {
        //     return new()
        //     {
        //         id = Guid.NewGuid(),
        //         name =  
        //     }
        // }
    }
}