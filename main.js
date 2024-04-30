var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start(){
    document.getElementById("Mensagem").innerHTML = "";
    recognition.start()
}

recognition.onresult = function(event) {
    console.log(event)
    var content = event.results[0][0].transcript;
    document.getElementById("Mensagem").innerHTML = content;
    speak()
}

function speak(){
    var synth = window.speechSynthesis;
    speakData = document.getElementById("Mensagem").value;
    //speakData = "Olá"
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach( camera );
}

camera = document.getElementById("camera")
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
