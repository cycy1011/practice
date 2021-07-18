const fastSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            } else break
        }
    }
    return arr
}

console.log('hahh')
console.log(fastSort([2, 1, 5, 3]));