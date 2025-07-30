const animatedElements = document.getElementsByClassName('wobble-text');
// commit moment
[...animatedElements].forEach(elm => {
    let text = elm.innerText.split('');
    elm.innerText = ''; // Clear the text in the div

    text.forEach(letter => {
        const span = document.createElement('span');
        span.innerText = letter;
        elm.appendChild(span);
    });
});
