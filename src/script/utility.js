// Select element
const element = (selector) => document.querySelector(selector);
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