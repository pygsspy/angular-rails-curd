'use strict';

angular.module('notesApp')
.factory('Note', function ($resource) {
  return $resource(
    '/api/notes/:noteId',
    null,
    {'update': {method: 'put'}}
    );
})

.controller('MainCtrl', function ($scope, Note) {

  $scope.notes = Note.query();
  $scope.create = function(title, body) {
    Note.save({title: title, body: body}, function(note) {
      $scope.notes.push(note);
    });
  };

  $scope.delete = function(index) {
    Note.delete({noteId: $scope.notes[index].id}, function() {
      $scope.notes.splice(index, 1);
    });
  };
})

.controller('ShowCtrl', function ($scope,  $routeParams, Note) {
  Note.get({noteId: $routeParams.id}, function(note) {
    $scope.note = note;
  });
})

.controller('UpdateCtrl', function ($scope,  $routeParams, $location, Note) {
  Note.get({noteId: $routeParams.id}, function(note) {
    $scope.note = note;
  });

  $scope.update = function(note) {
    // Note.update({noteId: note.id}, {title: note.title, body: note.body});
    Note.update({noteId: note.id}, note);
    $location.path('/api/notes');
  };
});


