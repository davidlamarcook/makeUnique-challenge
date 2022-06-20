// Write your solution below:
let makeUnique = (string) => {
    let newStr = ''
    for (let i = 0; i < string.length; i++ ) {
        if (newStr.includes(string[i])){
            continue
        } else {
            newStr += string[i]
        }
    }
    return newStr
}

console.log(makeUnique("helloWorld"))