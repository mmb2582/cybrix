function checkAnswer(){
    a = prompt('What do you say?')
    if(a == "please, I don't wanna go"){
        alert('Well Done. Correct answer')
	window.location.replace("http://cybrix.tech/final.html");
    }
    else{
        alert('Sorry, incorrect')
	window.location.replace("http://cybrix.tech/finalnorick.html");
    }

}
