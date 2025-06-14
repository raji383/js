function Abs(int){
    if (int>=0) {
        return int
    }
    return int*-1

}
function isPositive(int){   
    if (int>0) {
        return true
    }
    return false
}
const h=Abs(-10)
console.log(h)