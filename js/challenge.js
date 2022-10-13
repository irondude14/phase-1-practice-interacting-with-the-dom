
const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
let pause = document.querySelector('#pause');
let paused = false
const submit = document.querySelector('#submit');
const likes =  document.querySelector('.likes');
const leaveComment = document.querySelector('#comment-input');


function timer() {
    return setInterval(() => {
        a = parseInt(counter.innerText);
        counter.innerText = a + 1
    }, 1000)
}

minus.addEventListener('click', () => {
    a = parseInt(counter.innerText);
    counter.innerText = a - 1;
})

plus.addEventListener('click', () => {
    a = parseInt(counter.innerText);
    counter.innerText = a + 1;
})

heart.addEventListener('click', () => {
    a = document.createTextNode(`${counter.innerText} was just liked!`);
    b = document.createElement('li');
    b.appendChild(a)
    document.querySelector('.likes').appendChild(b)
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    a = document.createElement('p')
    b = document.createTextNode(leaveComment.value)
    a.appendChild(b)
    document.querySelector('.comments').appendChild(a)
});


counterNumber = timer();

pause.addEventListener('click', () => {
    btn = document.querySelectorAll('button')
    clearInterval(counterNumber);
    paused = !paused;  
    pause.innerText = "resume";
    heart.setAttribute('disabled', true);
    minus.setAttribute('disabled', true);
    plus.setAttribute('disabled', true);
    submit.setAttribute('disabled', true);
    if (!paused) {
        pause.innerText = 'pause'
        heart.removeAttribute('disabled');
        minus.removeAttribute('disabled');
        plus.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        counterNumber = timer();
    };
})



