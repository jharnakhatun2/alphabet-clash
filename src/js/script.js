const playBtn = element('.homeBtn');
const playAgainBtn = elementById('play-again');
//compare the alphabet and keyboard key
function handleKeyboardButtonPress(event){
    //key button
    const keyboardButton = event.key;
    console.log(keyboardButton);
    if(keyboardButton === 'Escape'){
        gameOver();
    }
    //current key
    const currentAlphabet = elementById('current-alphabet');
    const currentAlphabetText = currentAlphabet.textContent ;
    console.log(currentAlphabetText, keyboardButton);
    //check right or wrong
    if(currentAlphabetText === keyboardButton){
        //update score
        //1. get the current score
        const currentScore = getTextElement('current-score');
                
        //2. increase the score by 1 
        let newScore = currentScore + 1;

        //3. show the updated score
        setTextElement('current-score', newScore)
       
        //start a new round
        removeBackgroundColor(currentAlphabetText)
        continueGame()
    }else{
        //get the current life number
        const lifeScore = getTextElement('life-score');
       
        //reduce the life count and 
        const newLife = lifeScore - 1;

        //display the updated life count
        setTextElement('life-score', newLife)

        //game over
        if(newLife === 0){
            gameOver();
        }
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
    hideElement('.score');
    showElement('.playground');
    //reset life and score
    setTextElement('life-score', 5);
    setTextElement('current-score', 0);
    continueGame();
}
playBtn.addEventListener('click', play);

function gameOver(){
    hideElement('.playground');
    showElement('.score'); 
    //set total score
    const currentScore = getTextElement('current-score');
    setTextElement('final-score', currentScore);
    //removeBackgroundColor(id)
    const currentAlphabetKey = getText('current-alphabet');
    removeBackgroundColor(currentAlphabetKey)

}
playAgainBtn.addEventListener('click', play);