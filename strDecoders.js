// Given string
const s = "qsdflmkj|\_/|jmlkjlkj(oo)|\_/|qsdgfqsdf(ooqsdf|\_d/|qsdf|\_/|\_/|"

// Function f with parameters str, o, and w
function f(str, o = 0, w = 0) {
    // Find the index of the special substrings
    let wI = str.indexOf("|\_/|")
    let oI = str.indexOf("(oo)")

    // If both substrings are not found in the string, return the count of occurrences of each
    if (wI === -1 && oI === -1) {
        return { o, w }
    } else {
        // If one substring is missing, adjust its index
        if (wI === -1 || oI === -1) {
            if (wI < 0) {
                wI = oI + 10
            } else {
                oI = wI + 10
            }
        }
        // Compare the indices of the substrings and increment the corresponding counter
        if (wI < oI) {
            w += 1
            // Recursively call f with the sliced string after the found "|_/|" substring
            return f(str.slice(wI + 4), o, w)
        } else if (oI < wI) {
            o += 1
            // Recursively call f with the sliced string after the found "(oo)" substring
            return f(str.slice(oI + 4), o, w)
        }
    }
}

// Output the result by calling function f with string s
console.log(f(s))

