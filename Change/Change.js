const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}
function get(a){
    return sourceObject[a]
}
function set(a,b){
    sourceObject[a] =b+1
    return sourceObject[a]
}
console.log(set("num",32))