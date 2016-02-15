angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function ($scope, $state) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  $scope.goTo = function () {
      $state.go('app.browse');
      window.plugins.nativepagetransitions.slide(
        { "direction": "up" },
        function (msg) { console.log("success: " + msg) }, // called when the animation has finished
        function (msg) { alert("error: " + msg) } // called in case you pass in weird values
      );
  }

})



.controller('SearchCtrl', function ($scope, $stateParams) {

    $scope.draggableObjects = [{ name: 'one' }, { name: 'two' }, { name: 'three' }, { name: 'four' }];

    $scope.droppedObjects1 = [];
    $scope.droppedObjects2 = [];
    $scope.centerAnchor = true;


    $scope.onDropComplete1 = function (data, evt) {
        var index = $scope.droppedObjects1.indexOf(data);
        if (index == -1)
            $scope.droppedObjects1.push(data);
    }
    $scope.onDragSuccess1 = function (data, evt) {
        console.log("133", "$scope", "onDragSuccess1", "", evt);
        var index = $scope.droppedObjects1.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects1.splice(index, 1);
        }
    }

    var inArray = function (array, obj) {
        var index = array.indexOf(obj);
    }

})

.controller('PlaylistCtrl', function ($scope, $stateParams) {



})

.directive('goNative', ['$ionicGesture', '$ionicPlatform', function ($ionicGesture, $ionicPlatform) {
    return {
        restrict: 'A',

        link: function (scope, element, attrs) {

            $ionicGesture.on('tap', function (e) {

                var direction = attrs.direction;
                var transitiontype = attrs.transitiontype;

                $ionicPlatform.ready(function () {

                    switch (transitiontype) {
                        case "slide":
                            window.plugins.nativepagetransitions.slide({
                                "direction": direction
                            },
                              function (msg) {
                                  console.log("success: " + msg)
                              },
                              function (msg) {
                                  alert("error: " + msg)
                              }
                            );
                            break;
                        case "flip":
                            window.plugins.nativepagetransitions.flip({
                                "direction": direction
                            },
                              function (msg) {
                                  console.log("success: " + msg)
                              },
                              function (msg) {
                                  alert("error: " + msg)
                              }
                            );
                            break;

                        case "fade":
                            window.plugins.nativepagetransitions.fade({

                            },
                              function (msg) {
                                  console.log("success: " + msg)
                              },
                              function (msg) {
                                  alert("error: " + msg)
                              }
                            );
                            break;

                        case "drawer":
                            window.plugins.nativepagetransitions.drawer({
                                "origin": direction,
                                "action": "open"
                            },
                              function (msg) {
                                  console.log("success: " + msg)
                              },
                              function (msg) {
                                  alert("error: " + msg)
                              }
                            );
                            break;

                        case "curl":
                            window.plugins.nativepagetransitions.curl({
                                "direction": direction
                            },
                              function (msg) {
                                  console.log("success: " + msg)
                              },
                              function (msg) {
                                  alert("error: " + msg)
                              }
                            );
                            break;

                        default:
                            window.plugins.nativepagetransitions.slide({
                                "direction": direction
                            },
                              function (msg) {
                                  console.log("success: " + msg)
                              },
                              function (msg) {
                                  alert("error: " + msg)
                              }
                            );
                    }


                });
            }, element);
        }
    };
}]);

