function sounds()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/nPIuB-8xW/model.json", modalReady)
}
function modalReady()
{
    classifier.classify(gotResult);
}
function gotResult(error, results)
{
    if(error){
        console.error(error);
    }
    else{
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;

        document.getElementById("sound").innerHTML = "I can hear - "+results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuarcy - "+(results[0].confidence*100).toFixed(3)+"%";
        document.getElementById("sound").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("Hear");


        if(results[0].label == "Koala"){
            img.src = "Koala.jfif";
        }
        else if(results[0].label =="Bat"){
            img.src = "Bat.jpg";
        }
        else if(results[0].label =="Your Bad"){
            img.src = "The_wild_human_gamer.jfif";
        }
        else{
            img.src = "whale.jpg";
        }

    }
}