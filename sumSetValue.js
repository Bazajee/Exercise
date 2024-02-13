
let set1 = [7, 2, 8, 6, 9] 
const set2 =[1, 2, 7, 3]
const set3 = [48, 390, 246, 430, 61]
const set4 = [75575, 12452, 34431, 114225, 84566, 60250]

function sumOset (setValues, goalValue) {
    let array = setValues.slice(1)
    if (setValues.length <= 2 ) {
        if ((setValues[0]+ setValues[1]) === goalValue) {
            return 'A'
        }
        else {
            return 'R'
        }
    }
    
    for (let value of array) {
        if ((setValues[0]+ value) === goalValue) {
            return 'A'
        }
    }
     return sumOset(setValues.slice(1), goalValue)
}



console.log(sumOset(set1, 15))      //A
console.log(sumOset(set2, 15))      //R
console.log(sumOset(set3, 445))     //R
console.log(sumOset(set4, 87545))   //R


// Objectif
// Using a set of values and a sum value, form this sum value from the given set. (addition)
// Entrée
// Line 1: sum int represents the sum value to be found.

// Line 2: n int represents the number of integers on the next line.

// Line 3:

// - inputs is an array of integers. (integers are space-separated)
// - The value of each arguments is designated in the variable argument
// Sortie
// ACCEPTED, if there is such a subset of values, otherwise REJECTED.
// Contraintes
// Not all values are required and they can be used only once.

// 1 < n < 6

// 15 5
// 7
// 2
// 8
// 6
// 9
// A

// 15 4
// 1
// 2
// 7
// 3
// R

// 445 5
// 48
// 390
// 246
// 430
// 61
// R

// 87545 6
// 75575
// 12452
// 34431
// 114225
// 84566
// 60250
// R