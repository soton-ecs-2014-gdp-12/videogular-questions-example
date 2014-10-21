#!/bin/sh

wget -nc -O app/video.ogg http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_stereo.ogg
wget -nc -O app/video.mov http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov
wget -nc -O app/video.avi http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_stereo.avi
wget -nc -O app/video.mp4 http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4
wget -nc -O app/video.m4v http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_640x360.m4v

wget -nc -O app/caesar-cipher.mp4 http://cbaines.net/caesar-cipher.mp4

echo "Fake echo to ensure return code is 0, check wget output to ensure valid behavior"
