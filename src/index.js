
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ( matrix == undefined ){                     // return empty array if no params passed
        return [];
    } else {
        let newArr = [];

        for(let i = 0; i < matrix.length; i++){
            if ( i % 2 == 0) {
                for(let j = 0; j < matrix[i].length; j++){
                    newArr.push(matrix[i][j]);
                }
            } else {
                for(let j = matrix[i].length - 1; j >= 0; j--){
                    newArr.push(matrix[i][j]);
                }
            }
        }
    
        return newArr;
    }
}
