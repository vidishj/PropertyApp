angular.module('PropertySaver').controller('PropertyController', function PropertyController($scope, $http) {
    
    $scope.urlProperties = "properties.json";
    $scope.urlSavedProperties = "saved-properties.json";
    var arrProperties, arrSavedProperties = [];
    
    $http.get($scope.urlProperties).success(function(data) {
        
        arrProperties = $scope.properties = data;
        
    });
    
    $http.get($scope.urlSavedProperties).success(function(data) {
       
        arrSavedProperties = $scope.savedProperties = data; 
         
    });
    
    
});