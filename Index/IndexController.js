var LoginSystem = angular.module('LoginSystem', ['ngSanitize', 'ngCookies'])
LoginSystem.controller('LoginUser', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {

  // -------------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------------------------------

  //   $scope.LoginFunction = function () {
  //     var FD = new FormData()

  //     var UserName = $('#userName').val()
  //     var Password = $('#password').val()

  //     // ERROR Handling
  //     var ErrorCode = false
  //     var LoggedIn = false

  //     FD.append('UserName', UserName)
  //     FD.append('Password', Password)

  //     $http({
  //       method: 'POST',
  //       url: './LoginController.php?FuncLoginUser="true"',
  //       data: FD,
  //       headers: {
  //         'Content-Type': undefined
  //       }
  //     }) // End of http Function

  //       .then(function (response, data) {
  //         if (UserName.length == 0 || Password.length == 0) {
  //           $scope.LoginError = 'Enter Username and Password!'
  //           document.cookie = 'LoggedIn = false; expires=Thu, 18 Dec 2060 12:00:00 UTC'
  //           ErrorCode = true
  //         } else if (response.data.LoggedIn === false) {
  //           $scope.LoginError = 'Wrong Username and/or Password!'
  //           document.cookie = 'LoggedIn = false; expires=Thu, 18 Dec 2060 12:00:00 UTC'
  //           ErrorCode = true
  //         } else if (ErrorCode === false && response.data.LoggedIn === true) {

  //         }
  //       }); // End of .then fcuntion...
  //   }; // End of Login Function...

  $scope.checkUserName = function (UserName) {
    var UserName = $('#userName').val()

    if (UserName.length <= 3 || UserName.length >= 21) {
      $('#userName').css('border-color', 'yellow')
    }
    if (UserName.length >= 4 && UserName.length <= 20) {
      $('#userName').css('border-color', 'green')
    }
  }

  $scope.checkPassword = function () {
    var password = $('#password').val()

    if (password.length <= 3 || password.length >= 21) {
      $('#password').css('border-color', 'yellow')
    }
    if (password.length >= 4 && password.length <= 20) {
      $('#password').css('border-color', 'green')
    }
  }
}]); // End of Login System and Controller...
$('#loginSystem').ready(function () {
  angular.bootstrap($('#loginSystem'), ['LoginSystem'])
})
// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------
// -------------------Scope.BindCookieData on plus expansion------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------
