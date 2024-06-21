console.log('App loaded!!!', document);

document.addEventListener('DOMContentLoaded', () => {

    const input = document.getElementById('input');
    const button = document.getElementById('button');
    const output = document.getElementById('output');

    button.addEventListener('click',()=>{
        const userInput  = input.value;
        output.textContent = userInput;
    })

})