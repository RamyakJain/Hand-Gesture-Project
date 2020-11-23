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