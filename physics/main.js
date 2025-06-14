function getAcceleration(a){
    if (!isNaN(a.f/a.m)) {
        return a.f/a.m
    }else if (!isNaN(a.Δv/a.Δt)) {
        return a.Δv/a.Δt
    }else if (!isNaN(2*a.d/(a.t*a.t))) {
        return 2*a.d/(a.t*a.t)
    }
    return 'impossible'
}
const a={
    t:7,
    m:8,
    f:6
}
console.log(getAcceleration(a));
