var app = angular.module('myApp', [])

app.controller('namesCtrl', function ($scope) {
    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Hege', country: 'Sweden' },
        { name: 'Kai', country: 'Denmark' }
    ];
});

app.controller('personCtrl', function ($scope) {
    $scope.firstName = "John",
        $scope.lastName = "Doe",
        $scope.fullName = function () {
            return $scope.firstName + " " + $scope.lastName;
        }
});
app.controller('costCtrl', function ($scope) {
    $scope.quantity = 1;
    $scope.price = 9.99;
});