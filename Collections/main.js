function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return [...set];
}

function setToStr(set) {
    return [...set].join('');
}

function strToArr(str) {
    return str.split('');
}

function strToSet(str) {
    return new Set(str);
}

function mapToObj(map) {
    return Object.fromEntries(map);
}

function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    return Object.assign({}, arr);
}

function strToObj(str) {
    return Object.assign({}, str.split(''));
}

function superTypeOf(value) {
    if (value === null) return 'null';
    if (value instanceof Map) return 'Map';
    if (value instanceof Set) return 'Set';
    if (Array.isArray(value)) return 'Array';
    return typeof value === 'object' ? 'Object' : typeof value[0] === 'string' && value.length !== undefined ? 'String' : typeof value;
}
