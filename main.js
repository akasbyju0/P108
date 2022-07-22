 function startClassification(){
     navigator.mediaDevices.getUserMedia({audio: true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eIkC1q8qO/model.json',modelready);
 }
 function modelready() {
     classifier.classify(gotResult);
 }
 var dog=0;
 var cat=0;
 var cow=0;
 var lion=0;

 function gotResults(error, results) {
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         var random_number_r = Math.floor(Math.random()*255) + 1;
         var random_number_g = Math.floor(Math.random()*255) + 1;
         var random_number_b = Math.floor(Math.random()*255) + 1;
         
         document.getElementById("result_label").innerHTML ="I can Hear - " + results[0].label;
         document.getElementById("result_count").innerHTML ='Decteced Dog - '+Dog+ 'Detected Cat - '+Cat+'Detected Cow - '+Cow+'Detected Lion - '+Lion;
         document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
         document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
         img = document.getElementById("animal_image");
     }
     if(results[0].label=="Barking")
     {
         img.src="dog.jpeg";
         dog=dog+1;
     }
     else if(results[0].label=="Meowing") {
        img.src="cat.jpg";
        cat = cat + 1;
     }
     else if(results[0].label=="Mooing") {
        img.src="cow.jpg";
        cow = Cow + 1;
     }
     else if(results[0].label=="Roaring") {
        img.src="lion.jpg";
        lion = lion + 1;
     }
     else {
         img.src="ear.jpg";
     }
 }
 