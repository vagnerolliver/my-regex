# a partir da pasta raiz

# find . -name *.test.js 
#find . -name *.test.js -not -path '*node_module**'
#find . -name *.js -not -path '*node_module**'


#npm i -g ipt

#find . -name *.js -not -path '*node_module**' | ipt


CONTENT="'use strict';"
find . -name *.js -not -path '*node_module**' \
| ipt -o \
| xargs -I '{file}' sed -i "" -e '1s/^/\'$CONTENT'\
/g' {file}
