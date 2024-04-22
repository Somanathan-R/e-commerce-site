// var app=angular.module("myapp",[]);
// app.controller("ctrl",function($scope, $http){
//     $scope.submitForm=function(){
//         // $scope.nameError=""
//         // $scope.emailError=""
//         // $scope.passError=""
//         // $scope.successError=""

//         // if ($scope.name == undefined){
//         //     $scope.nameError= "❌ Please enter your name"
//         // }
//         // if ($scope.name.length < 3){
//         //     $scope.nameError = "❌ username must be more than 3 characters"
//         // }

//         // if (! /^\S+@\S+\.\S+$/.test($scope.email)){
//         //     $scope.emailError = "❌ Enter a valid email id"
//         // }

//         // if ($scope.password == undefined){
//         //     $scope.passError = "❌ Please enter your password"
//         // }
//         // if ($scope.password.length > 10 || $scope.password.length < 6){
//         //     $scope.passError = "❌ password must be between 6 and 10 charecters"
//         // }

//         // else{
//         //     $scope.successMsg = "✅ Form is Validated"

//         // }

//         var requestBody = {
//             username: $scope.name,
//             email : $scope.email,
//             password: $scope.password
//           };
      
//           // Send POST request to Express server API
//           $http.post('/api/login', requestBody)
//             .then(function(response) {
//               // Successful login
//               console.log(response.data.message);
//               // Redirect to dashboard or perform other actions
//             })
//             .catch(function(error) {
//               // Error handling
//               console.error(error.data.error);
//               // Display error message to the user
//               $scope.errorMessage = error.data.error;
//             });


//     }
    
// })

// /*var app = angular.module('myapp',[]);

// app.controller('ctrl',function($scope){

//     $scope.submitForm = function (){
//         $scope.nameErrorMsg = ""
//         $scope.emailErrorMsg = ""
//         $scope.passErrorMsg = ""
//         $scope.successMsg = ""
        
//         if ($scope.name == undefined){
//             $scope.nameErrorMsg = "❌ name is a reuqired field"
//         }
//         if ($scope.name.length > 8 || $scope.name.length < 3){
//             $scope.nameErrorMsg = "❌ name must be between 3 and 8 charecters"
//         }

//         if (! /^\S+@\S+\.\S+$/.test($scope.email)){
//             $scope.emailErrorMsg = "❌ username is not a valid email"
//         }

//         if ($scope.password == undefined){
//             $scope.passErrorMsg = "❌ password is a required field"
//         }
//         if ($scope.password.length > 8 || $scope.password.length < 6){
//             $scope.passErrorMsg = "❌ password must be between 6 and 8 charecters"
//         }

//         else{
//             $scope.successMsg = "✅ form validated"
//         }

//     }
// })
// */
