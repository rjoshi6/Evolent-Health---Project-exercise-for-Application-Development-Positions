var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'html/home.html',
    controller  : 'HomeController'
  })

  .when('/add', {
    templateUrl : 'html/addContact.html',
    controller  : 'AddController'
  })

  .when('/about', {
    templateUrl : 'html/about.html',
    controller  : 'AboutController'
  })
  .when('/list', {
    templateUrl : 'html/listContact.html',
    controller  : 'ListController'
  })  
  .when('/delete', {
    templateUrl : 'html/deleteContact.html',
    controller  : 'DeleteController'
  })
  .when('/edit', {
    templateUrl : 'html/editContact.html',
    controller  : 'EditController'
  })
  .otherwise({redirectTo: '/'});
});



app.controller('HomeController', function($scope) {
	  $scope.message = 'Hello from HomeController';
	});

	app.controller('AddController', function($scope,$http) {
	  //$scope.message = 'Hello from AddController';
	  $scope.insertdata = function(){
		  $http.post("insert.php", {
		'first_name':$scope.firstname, 
	'second_name' : $scope.secondname, 
	'email' : $scope.email,
	'phone_number': $scope.phonenumber,
		  'status' : $scope.status})
		  .success(function(msg){
	
	$scope.msg = "CONTACT HAS BEEN ADDED";

	}).error(function(error){
	$scope.error(error);
		});
	}

});

app.controller('ListController', function($scope,$http) {
		  $scope.message = 'Hello from ListController';
		  
		  $scope.displayContacts = function(){
			 
			  $http.get("retrieveAll.php").
			  success(function(data){
				  $scope.data = data;
			  })
		  }
		});
		
app.controller('DeleteController', function($scope, $http) {
		  $scope.message = 'Hello from DeleteController';
		 $scope.displayContacts = function(){		 
			  $http.get("retrieveAll.php").
			  success(function(data){
				  $scope.data = data;
			  })
		  }
		 $scope.deleteContacts = function(phone_number){
			 $http.post("delete.php",{'phone_number':phone_number}).
			 success(function(msg){
				 $scope.displayContacts();
				 $scope.msg = "Contact Deleted";
				 
			 }).error(function(msg){
				 $scope.msg = "Problem deleting contact";
			 })
		 } 
		 
		});
	app.controller('EditController', function($scope, $http) {
			
		$scope.message = 'Hello from EditController';
 
		  $scope.displayContacts = function(){
			 
			  $http.get("retrieveAll.php").
			  success(function(data){
				  $scope.data = data;
			  })
		  }	 		
			$scope.editContacts = function(phone_number){
				$scope.phone_number = phone_number
				
				$scope.msg = "Edit for number :";
				
			
		  }
		  $scope.updateContacts = function(){

				 $http.post("update.php", {
				'first_name':$scope.firstname, 
				'second_name' : $scope.secondname, 
				'email' : $scope.email,
				'phone_number':$scope.phone_number,
				'status' : $scope.status}).success(function(msg){
				$scope.msg = "Data updated";
				}).error(function(error){
				$scope.error(error);
				}) 

		}

	});

	app.controller('AboutController', function($scope) {
	  $scope.message = 'Hello from AboutController';
	});