rm -rf app/bower_components/videogular-questions
ln -s ../../../videogular-questions app/bower_components/videogular-questions

rm -rf app/bower_components/videogular-controls
ln -s ../../../bower-videogular-controls app/bower_components/videogular-controls

http-server -a localhost -p 8000 -c-1