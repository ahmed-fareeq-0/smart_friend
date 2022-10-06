// import btn record
const Record = document.getElementById('record');

// setup speak and record
const myVoice = new p5.SpeechRec('ar');
const say = new p5.Speech(); 


Record.addEventListener('click', () => {
	myVoice.onResult = showResult;
	myVoice.start()
});

function showResult(){
  console.log(myVoice.resultString);

  if(myVoice.resultString === 'مرحبا'){
	say.speak('hello my friend');
	
	setTimeout(() => {
	myVoice.start()
	}, 1000)

  }else if (myVoice.resultString === 'شلونك'){
	say.speak('i am fine')
  }
}



