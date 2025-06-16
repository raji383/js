function words(string) {
    let arry = []
    let s = ''
    for (let index = 0; index < string.length; index++) {
        if (string[index] !== ' ') {
            s += string[index]
        } else {
            arry.push(s)
            s = ''
        }
    }
    if (s !== '') {
        arry.push(s)
    }
    return arry
}

function sentence(array) {
    let s = ''
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        s += element + ' '
    }
    return s.trim() 
}

function yell(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function capitalize(string) {
    let array = words(string)
    for (let index = 0; index < array.length; index++) {
        let word = array[index];
        if (word.length > 0) {
            let first = yell(word[0]);
            let rest = whisper(word.slice(1));
            array[index] = first + rest;
        }
    }
    return sentence(array)
}

console.log(capitalize('hI brO'))
