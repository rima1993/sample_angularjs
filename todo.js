

var app = angular.module("toDoList", [])

/*Controller is like a brain of our app. It contain models and logics required
  to operate our to do list.
*/
  app.controller("toDoListCtrl", ['$scope',
    function($scope) {
      //A model holding tasks
      $scope.taskList = [
        {done: true,
        task: 'something'
      },
        {
        done: false,
        task: 'nothing'
      }
      ];

    //Function for adding task to the task list
      $scope.addTask = function(task) {
        
        //I'm pushing a new task to the task list
        $scope.taskList.push({
          done: false,
          task: task
        });
      };
 
      $scope.removeTask = function() {
        var oldList = $scope.taskList;
        $scope.taskList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.taskList.push(x);
        });
    };
    }
  ]);