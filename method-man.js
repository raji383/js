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
    return '*' + string.toLowerCase() + '*'
}
function whisper1(string) {
    return string.toLowerCase()
}


function capitalize(string) {

    let first = yell(string[0]);
    let rest = whisper1(string.slice(1));
    const array = first + rest;

    return array
}

console.log(capitalize('hI brO'))
