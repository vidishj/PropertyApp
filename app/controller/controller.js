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
    
    $scope.addProperty = function(num){
        
        var i, flag = 0;
        
        for(i=0; i<arrSavedProperties.length; i++){
            if(arrSavedProperties[i].id == num){
                flag = 1;
            }
        };
        
        if(flag == 0){
            var element = {
                id: arrProperties[num-1].id,
                price: arrProperties[num-1].price,
                mainImage: arrProperties[num-1].mainImage,
                agency: {
                    brandingColors: {
                        primary: arrProperties[num-1].agency.brandingColors.primary
                    },
                logo: arrProperties[num-1].agency.logo
                }      
            };
            arrSavedProperties.push(element);     
        }
        else {
            alert("Property has already been saved!");
        }
    }
});