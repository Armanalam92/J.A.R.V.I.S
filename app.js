//elements 
 

 const startBtn=document.querySelector("#start")
 const stopBtn=document.querySelector("#stop");
 const speakBtn=document.querySelector("#speak");

//speech recognition setup  
   



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//sr start 
recognition.onstart = function () {
    console.log("vr active");

};

//sr result
recognition.onresult = function (event){

    let current = event.resultIndex;
    let transcript = event.results[current]
    [0].transcript;
    readout(transcript);
    //console.log(transcript);
};

//sr stop 
recognition.onend = function() {
    console.log("vr deactivated");
};
//sr conntinuous 
//recognition.continuous=true;

startBtn.addEventListener("click", () => {
    recognition.start();
});


stopBtn.addEventListener("click", () => {
    recognition.stop();
});

speakBtn.addEventListener("click", () =>{
     readout("hi, my name is JARVIS and i am a ai maded by armaan, let's talk to me");
});

// J.A.R.V.I.S speech 
function readout(message){
    const speech = new SpeechSynthesisUtterance()
    speech.text = message;
    speech.volume = 1
    window.speechSynthesis.speak(speech)
    console.log("speaking out")
} 



