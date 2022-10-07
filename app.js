// import btn record
const Record = document.getElementById('record');

const Words = ['هلا اخي', 'شلونك', 'وين تعيش'];
const Replies = ['hello my friend', 'i am fine', 'iraq     and you'];

// setup speak and record
const myVoice = new p5.SpeechRec('en');
const say = new p5.Speech(); 


Record.addEventListener('click', () => {
	myVoice.onResult = showResult;
	myVoice.start()
});

// start the record 
function starting(){
	setTimeout(() => {
		myVoice.start()
		}, 1000)
}



function showResult(){
  console.log(myVoice.resultString);

  for(let i in Words){
	if(Words[i] === myVoice.resultString){
		for(let j in Replies){
			if(i == j){
				say.speak(Replies[j])
				starting()
			}
		}
	}
  }

  showResult2()

}

function showResult2() {
	switch (myVoice.resultString) {
		case 'open Facebook':
		 window.open('http://www.facebook.com/')
		 say.speak('Ok Sir')
		 starting()
		   break;
		case 'open Instagram':
		 window.open('http://www.instagram.com/');
		 say.speak('Ok Sir')
		 starting()
		   break;
		case 'open Twitter':
		window.open('http://www.twitter.com/');
		say.speak('Ok Sir')
		 starting()
			break;
		case 'open YouTube':
		window.open('https://www.youtube.com/');
		say.speak('Ok Sir')
		 starting()
			break;
		case 'goodbye':
		window.close()
		say.speak('The universe is miserable, bye bye bye')
		
		break;
	  }
}



