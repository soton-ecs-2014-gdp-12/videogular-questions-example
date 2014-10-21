'use strict';

angular.module('videogularQuizExample.version', [
  'videogularQuizExample.version.interpolate-filter',
  'videogularQuizExample.version.version-directive'
])

.value('version', '0.2');
