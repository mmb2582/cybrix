function checkAnswer(){
    a = prompt('What do you say?')
    if(a == "please, I don't wanna go"){
        alert('Well Done. Correct answer')
	window.location.replace("http://cybrix.tech/final.html");
    }
    else{
        alert('You are incorrect... Bricky starts to fade away')
	window.location.replace("http://cybrix.tech/finalnorick.html");
    }

}
