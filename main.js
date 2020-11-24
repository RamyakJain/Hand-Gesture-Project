Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90
});
camera = docuemnt.getElementById("camera");
Webcam.attach( '#camera' );
function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img src="'+data_uri+'"id="captured_image"/>'
    });
}
console.log("ml5 version", ml5.version);
classifier = ("https://teachablemachine.withgoogle.com/models/pxoEwzE6U/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
       connsole.log(results); 
       document.getElementById("result_gesture_name").innerHTML = results[0].label;
    }
    if (results[0].label == "amazing"){
        document.getElementById("update_gesture").innerHTML = "&#128076;";
    }
    if (results[0].label == "nice"){
        document.getElementById("update_gesture").innerHTML = "&#128077;";
    }
    if (results[0].label == "victory"){
        document.getElementById("update_gesture").innerHTML = "&#9996;";
    }
    if (results[0].label == "bad"){
        document.getElementById("update_gesture").innerHTML = "&#128078;";
    }
    if (results[0].label == "stop"){
        document.getElementById("update_gesture").innerHTML = "&#128400;";
    }
    function speak(){
        var synth = window.speechSynthesis;
        speak_data = results[0].label;
        synth.speak(utterThis);
    }
}