const playBtn = element('.homeBtn');
//compare the alphabet and keyboard key
function handleKeyboardButtonPress(event){
    //key button
    const keyboardButton = event.key;
    //current key
    const currentAlphabet = elementById('current-alphabet');
    const currentAlphabetText = currentAlphabet.textContent ;
    console.log(currentAlphabetText, keyboardButton);
    //check right or wrong
    if(currentAlphabetText === keyboardButton){
        removeBackgroundColor(currentAlphabetText)
        continueGame()
    }else{
        console.log("The game is end");
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);

//continue the game
function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabet = elementById('current-alphabet');
    currentAlphabet.textContent = alphabet;
    setBackgroundColor(alphabet);
}

//start game
function play(){
    hideElement('.home');
    showElement('.playground');
    continueGame();
}
playBtn.addEventListener('click', play);