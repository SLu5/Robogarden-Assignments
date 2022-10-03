function sortArray(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

function divisibles(arr) {
    var sum = 0
    for (const item of arr) {
        if (item % 5 === 0) {
            sum = sum + item;
        }
    }
    return sum;
}

function printArray(arr, useIterator){
    if (useIterator) {
        for (const item of arr) {
            console.log(item);
        }
    } else {
        for (var q = 0; q < arr.length; q++) {
            console.log(arr[q]);
        }
    }
}

var array = [4, 6, 5, 2, 7, 34, 69, 420, 12,25,125,1225,123123124125, -6453]
var x = sortArray(array);
console.log("The sum is: " + divisibles(x));
printArray(x);