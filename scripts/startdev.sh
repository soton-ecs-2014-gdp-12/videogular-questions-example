rm -rf app/bower_components/videogular-questions
ln -s ../../../videogular-questions app/bower_components/videogular-questions

http-server -a localhost -p 8000 -c-1
