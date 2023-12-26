#!/bin/bash

echo '
**************************

updae zy server

**************************
'

ssh zy "
cd /ws/cs/tiddlywikis/work
/usr/local/git/bin/git restore *
/usr/local/git/bin/git clean -f *
/usr/local/git/bin/git pull
"