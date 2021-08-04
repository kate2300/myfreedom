console.log(123);
1

function createBox(he, wi, le) {
    return {
        height: he,
        width: wi,
        length: le,
        get size() {
            return [this.height, this.width, this.length];
        },
        set size(size) {
            [this.height, this.width, this.length] = size;
        }
    };
}

const box = createBox(50, 100, 200)
console.log(box)

//  2
function showTime() {

    const moscowCity = {
        city: 'Moscow',
        hour: 21,
    };
    const tokyoCity = {
        city: 'Tokyo',
        hour: 15,
    };
    const londonCity = {
        city: 'London',
        hour: 17,
    };
    const beijingCity = {
        city: 'Beijing',
        hour: 13,
    };


    const currentCity = {
        city: 'Moscow',
        month: 'Aug',
        date: 03,
        hour: 21,
        minutes: 58,
        seconds: 51,
    };


    let button = document.createElement('button')
    button.addEventListener('click', () => {
        currentCity.city = moscowCity.city
        currentCity.hour = moscowCity.hour

    })
    button.textContent = moscowCity.city
    button.classList.add('button_switch')
    document.body.append(button)

    let button2 = document.createElement('button')
    button2.addEventListener('click', () => {
        currentCity.city = tokyoCity.city
        currentCity.hour = tokyoCity.hour

    })
    button2.textContent = tokyoCity.city
    button2.classList.add('button_switch')
    document.body.append(button2)

    let button3 = document.createElement('button')
    button3.addEventListener('click', () => {
        currentCity.city = londonCity.city
        currentCity.hour = londonCity.hour

    })
    button3.textContent = londonCity.city
    button3.classList.add('button_switch')
    document.body.append(button3)

    let button4 = document.createElement('button')
    button4.addEventListener('click', () => {
        currentCity.city = beijingCity.city
        currentCity.hour = beijingCity.hour

    })
    button4.textContent = beijingCity.city
    button4.classList.add('button_switch')
    document.body.append(button4)


    const div = document.createElement('div');
    div.innerHTML = `${currentCity.city} - ${currentCity.month} - ${currentCity.date} - ${currentCity.hour} - ${currentCity.minutes} - ${currentCity.seconds}`;
    document.body.append(div);
    setInterval(() => {
        currentCity.seconds += 1
        if (currentCity.seconds === 60) {
            currentCity.minutes += 1
            currentCity.seconds = 0
        }
        if (currentCity.minutes === 60) {
            currentCity.hour += 1
            currentCity.minutes = 0
        }
        if (currentCity.hour === 60) {
            currentCity.date += 1
            currentCity.hour = 0
        }
        div.innerHTML = `${currentCity.city} - ${currentCity.month} - ${currentCity.date} - ${currentCity.hour} - ${currentCity.minutes} - ${currentCity.seconds}`;
    }, 1);
}
showTime();