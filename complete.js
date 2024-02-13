// In progress


const str2 = "     #     #  # #  "

let str1 = "#   #"

function complete(string) {

    let firstIndex = string.indexOf("#")
    let lastIndex = string.slice(firstIndex + 1).indexOf('#') + firstIndex + 1
    if (lastIndex === -1) { return string }

    for (let i = firstIndex + 1; i <= lastIndex; i++) {
        let array = string.split("")[i].replace("","#")
        console.log(array)
        
        
    }
    // return complete(array.join('').slice(lastIndex + 1))

}


// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(complete(str2))

// complete the space between a # pair