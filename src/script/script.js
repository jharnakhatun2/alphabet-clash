const playBtn = element('.homeBtn');
function play(){
    hideElement('.home');
    showElement('.playground')
}
playBtn.addEventListener('click', play);