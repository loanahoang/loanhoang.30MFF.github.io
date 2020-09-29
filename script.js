let vid = document.getElementById("myVid")
let watch = document.getElementById("watch")

function switchText(name){
    if(name == "loan"){
        document.getElementById("loan").style.display = "none";
        document.getElementById("loantext").style.display = "block"
    }
    if(name == "ayesha"){
        document.getElementById("ayesha").style.display = "none";
        document.getElementById("ayeshatext").style.display = "block"
    }
    if(name == "fatima"){
        document.getElementById("fatima").style.display = "none";
        document.getElementById("fatimatext").style.display = "block"
    }
    if(name == "alpha"){
        document.getElementById("alpha").style.display = "none";
        document.getElementById("alphatext").style.display = "block"
    }
}

function switchVideo(name){
    if(name == "loan"){
        document.getElementById("loan").style.display = "block";
        document.getElementById("loantext").style.display = "none"
    }
    if(name == "ayesha"){
        document.getElementById("ayesha").style.display = "block";
        document.getElementById("ayeshatext").style.display = "none"
    }
    if(name == "fatima"){
        document.getElementById("fatima").style.display = "block";
        document.getElementById("fatimatext").style.display = "none"
    }
    if(name == "alpha"){
        document.getElementById("alpha").style.display = "block";
        document.getElementById("alphatext").style.display = "none"
    }
}
function playVideo(imageName){
    console.log("clicked with "+imageName)

    if(imageName == "xpoon"){
        vid.currentTime = 0;
        vid.play();
        watch.scrollIntoView();
    }
    if(imageName == "teepag"){
        vid.currentTime = 36; 
        vid.play();
        watch.scrollIntoView();
    }

    if(imageName == "abble"){
        vid.currentTime = 54;
        vid.play();
        watch.scrollIntoView();
    }

    if(imageName == "panana"){
        vid.currentTime = 70;
        vid.play();
        watch.scrollIntoView();
    }
}
