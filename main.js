function startclassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MW54S6NVN/model.json',modelready);
}

function modelready(){
    classifier.classifier(gotresults);
}

function gotresults(error,results){
    console.log('got result');
}