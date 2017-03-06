angular.module('starter.controllers', [])
    .controller('CityCtrl', function ($scope, $ionicModal) {
            $ionicModal.fromTemplateUrl('./city-list.html', {
                id: 'cityList',
                scope: $scope,
                animation: 'slide-in-right'
            }).then(function (modal) {
                $scope.cityListModal = modal;
            });

            $scope.openCityListModal = function () {
                $scope.cityListModal.show();
            };

            $scope.closeCityListModal = function () {
                $scope.cityListModal.hide();
            };
            $scope.currentCityChange = function (data) {
                $scope.closeCityListModal();
                $scope.currentCity = {
                    cityName: data
                };
            };
        }
    );
