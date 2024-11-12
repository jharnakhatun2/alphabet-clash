// Select element
const element = (selector) => document.querySelector(selector);
const elementById = (id) => document.getElementById(id);
// Hide element
const hideElement = (selector) =>{
    const element = document.querySelector(selector);
    element.classList.add('hidden')
}
// Show element
const showElement = (selector) =>{
    const element = document.querySelector(selector);
    element.classList.remove('hidden')
}
//random alphabet
const getRandomAlphabet = () =>{
    //create alphabet array
    const alphabetStrings = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetStrings.split('');
    //crate random index
    const randomIndex = Math.random()*25;
    const index = Math.round(randomIndex);
    //get alphabet index
    const alphabet = alphabets[index];
    return alphabet;
    
}

//set Background color on key
const setBackgroundColor = (id)=>{
    const element = elementById(id);
    element.classList.add('bg-orange-400', 'text-black');
}