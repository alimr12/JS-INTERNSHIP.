let numb = [5, 12, 8, 20, 15, 3];

function countGreater(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            count++;
        }
    }

    return count;
}

console.log(countGreater(numb));