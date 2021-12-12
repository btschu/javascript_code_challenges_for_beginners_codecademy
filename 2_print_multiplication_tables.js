//todo Let's start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

//todo Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

var result = 'x ';

for (var i = 0; i < 11; i++) {
    for (var j = 0; j < 11; j++) {
        if(i == 0 && j > 0){
            result += '[' + j + ']';
        } else if(j == 0 && i>0){
            result += '[' + i + '] ';
        } else if(i>0 && j>0){
            result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);