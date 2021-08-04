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

function countWords(text, checkWord) {
    let counter = 0;
    text.forEach((textWord) => {
        if (textWord.toLowerCase() === checkWord) counter += 1;
    });
    return counter;
}

function calculateAnswers(text, testWords) {
    const newAnswers = [];
    testWords.forEach((elem) => {
        newAnswers.push({
            keyName: elem,
            count: countWords(text, elem),
        });
    });
    return newAnswers;
}

function convertToINNERHTNL(WORDS_OBJ) {
    let finalText = '';
    WORDS_OBJ.forEach((elem) => {
        finalText = `${finalText} <br/>${elem.keyName} : ${elem.count}<br/>`;
    });
    return finalText;
}

function main() {
    const div = document.querySelector('div');
    const wrapper = document.createDocumentFragment();
    const textArea = document.createElement('textarea');
    const button = document.createElement('button');
    const answers = document.createElement('div');

    let testWords = [];

    button.addEventListener('click', () => {
        const textSliced = textArea.value.split(' ');
        const mySet = new Set();
        textSliced.forEach((elem) => { mySet.add(elem.toLowerCase()); });
        testWords = calculateAnswers(textSliced, mySet);
        answers.innerHTML = convertToINNERHTNL(testWords);
    });

    wrapper.appendChild(textArea);
    wrapper.appendChild(button);
    wrapper.appendChild(answers);

    answers.innerHTML = convertToINNERHTNL(testWords);
    div.append(wrapper);
}

main();