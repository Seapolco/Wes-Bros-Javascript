window.addEventListener('keydown', (e) => {
    console.log(e.keycode);
    const audio = document.querySelector(`audio[data-key=${e.keyCode}]`);
    console.log(audio)

})

