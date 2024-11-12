const playBtn = element('.homeBtn');

function continueGame(){
    const alphabet = getRandomAlphabet();
    const currentAlphabet = elementById('current-alphabet');
    currentAlphabet.textContent = alphabet;
    setBackgroundColor(alphabet);
}

function play(){
    hideElement('.home');
    showElement('.playground');
    continueGame();
}
playBtn.addEventListener('click', play);