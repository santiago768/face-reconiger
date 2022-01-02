Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach("#camera");

function takepic() {
    Webcam.snap(function (campic) {
        document.getElementById("result").innerHTML = '<img id="pic" src="' + campic + '">'
    })
}
console.log("ml5 version is ", ml5.version)
model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DyzyfOcyp/model.json", modelloded)

function modelloded() {
    console.log("modelloded succesfuly")
}

function identifypic(){
    pic=document.getElementById("pic");
    model.classify(pic, getresult);

}
function getresult(error,result_array){
if (error){
    console.error(error);
}
else {
    console.log(result_array);
    object_name=result_array[0].label;
acuracy=result_array[0].confidence.toFixed(3);
document.getElementById("object_name").innerHTML=object_name;
document.getElementById("accuracy").innerHTML=acuracy;
}
}
