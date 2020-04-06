//DO NOT MODIFY THE CODE BETWEEN THIS COMMENT
function calculateMyWeightOnAnotherPlanet(myWeight, otherPlanet) {
    myWeight = parseFloat(myWeight);
    if(isNaN(myWeight)) throw new Error ("Error: first argument must be a numeric value!");
    otherPlanet = otherPlanet.toUpperCase().trim();
    switch(otherPlanet) {
        case "MERCURY":
            return Number((myWeight * .38).toFixed(2));
        case "VENUS":
            return Number((myWeight * .91).toFixed(2));
        case "MARS":
            return Number((myWeight * .38).toFixed(2));
        case "JUPITER":
            return Number((myWeight * 2.34).toFixed(2));
        case "SATURN":
            return Number((myWeight * .93).toFixed(2));
        case "URANUS":
            return Number((myWeight * .92).toFixed(2));
        case "NEPTUNE":
            return Number((myWeight * 1.12).toFixed(2));
        default:
            throw new Error("Error: Valid values for second argument are Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune only.");
    }
}
//AND THIS COMMENT
//WRITE YOUR TESTS BELOW
test('170 pounds on Mercury = 64.60?', ()=> {//first 7 check conversion
    expect(()=> {
        calculateMyWeightOnAnotherPlanet(170, 'Mercury')
    }).toBe(64.60);
});
test('170 pounds on Venus = 154.70?', ()=> {
    expect(()=> {
        calculateMyWeightOnAnotherPlanet(170, 'Venus')
    }).toBe(154.70);
});
test('170 pounds on Mars = 64.60?', ()=> {
    expect(()=> {
        calculateMyWeightOnAnotherPlanet(170, 'Mars')
    }).toBe(64.60);
});
test('170 pounds on Jupiter = 397.80?', ()=> {
    expect(()=> {
        calculateMyWeightOnAnotherPlanet(170, 'Jupiter')
    }).toBe(397.80);
});
test('170 pounds on Saturn = 158.10?', ()=> {
    expect(()=> {
        calculateMyWeightOnAnotherPlanet(170, 'Saturn')
    }).toBe(158.10);
});
test('170 pounds on Uranus = 156.40?', ()=> {
    expect(()=> {
        calculateMyWeightOnAnotherPlanet(170, 'Uranus')
    }).toBe(156.40);
});
test('170 pounds on Neptune = 190.40?', ()=> {
    expect(()=> {
        calculateMyWeightOnAnotherPlanet(170, 'Neptune')
    }).toBe(190.40);
});

test('error from arg2 not a planet?', ()=> {//check errors
    expect(()=> {
        calculateMyWeightOnAnotherPlanet(170, 'Cat')
    }).toThrowError("Error: Valid values for second argument are Mercury, Venus, Mars, Jupiter, Saturn, Uranus, and Neptune only.");
});
test('error from arg1 not being numeric?', ()=> {
    expect(()=> {
        calculateMyWeightOnAnotherPlanet('three', 'Neptune')
    }).toThrowError("Error: first argument must be a numeric value!");
});

test('"170" pounds on Neptune = 190.40?', ()=> {//check ambiguity
    expect(()=> {
        calculateMyWeightOnAnotherPlanet('170', 'Neptune')
    }).toBe(190.40);
});