function dogYears(name, age) {
    let years = 0
    years = (age / 31557600) * 7

    switch (name) {
        case "earth":
            years = years * 1;
            break;
        case "mercury":
            years = years * 0.2408467;
            break;
        case "venus":
            years = years * 0.61519726;
            break;
        case "mars":
            years = years * 1.8808158;
            break;
        case "jupiter":
            years = years * 11.862615;
            break;
        case "saturn":
            years = years * 29.447498;
            break;
        case "uranus":
            years = years * 84.016846;
            break;
        case "neptune":
            years = years * 164.79132;
            break;
    }

    return years + " " + name + "-years old"
}
console.log(dogYears("earth", 1000000000))