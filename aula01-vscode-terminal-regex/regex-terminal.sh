# a partir da pasta raiz

# find . -name *.test.js 
#find . -name *.test.js -not -path '*node_module**'
#find . -name *.js -not -path '*node_module**'


#npm i -g ipt

#find . -name *.js -not -path '*node_module**' | ipt

CONTENT="'use strict';"
find . -name *.js -not -path '*node_modules**' \
| ipt -o \
| xargs -I '{file}' sed -i "" -e '1s/^/\'$CONTENT'\
/g' {file}


# 1s -> primeira linha
# ^-> primeira coluna
# substitui pelo $CONTENT
# quebrou a linha para adicionar um \n implicito

# muda tudo!
find . -name *.js -not -path '*node_modules**' \
| xargs -I '{file}' sed -i "" -e '1s/^/\'$CONTENT'\
/g' {file}
