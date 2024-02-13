function howManyIn (array) {
    let object  = {}
    for (let number of array) {
        if (!(number in object)) {
            object[number]=0
        }
        object[number]++
    }
    return object
}




let array1 = [1,1,2,2,2,4]
let array2 = [222,2,2,3,3,77,7,7]
console.log(howManyIn(array1))
console.log(howManyIn(array2))
