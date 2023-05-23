//https://teachablemachine.withgoogle.com/models/ne5h6ehYp/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ne5h6ehYp/model.json', modelReady);
}

function modelReady(){
    Classifier.classify(gotResults);
}