console.log(123);
const dataTypes = [
    true,
    's',
    0,
    null,
    undefined,
    {},
    [],
    Symbol(),
    () => {},
]

let map = new Map();

for (let i = 0; i < dataTypes.length; i++) {

    map.set(dataTypes[i], workForElementsOfarr(dataTypes[i]));

}

function workForElementsOfarr(arg) {
    let objeckFoeElement = {};
    objeckFoeElement['value'] = arg;
    objeckFoeElement['type'] = typeof arg;
    objeckFoeElement['typeString'] = String(arg);
    objeckFoeElement['typeBoolean'] = Boolean(arg);


    if (typeof arg !== typeof Symbol()) {
        objeckFoeElement['typeNumber'] = Number(arg);
    } else {
        objeckFoeElement['typeNumber'] = '--'
    }

    return objeckFoeElement

}

console.log(map)

map.forEach((valObj) => {
    console.log("значение: " + String(valObj.value));
    console.log("тип: " + valObj.type);
    console.log("преобразование к числу:  " + valObj.typeNumber);
    console.log("преобразование к строке: " + valObj.typeString);
    console.log("преобразование к булеву: " + valObj.typeBoolean);

})