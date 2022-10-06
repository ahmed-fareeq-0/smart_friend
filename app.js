// import btn record
const Record = document.getElementById('record');

const Words = ['هلا اخي', 'شلونك', 'وين تعيش'];
const Replies = ['hello my friend', 'i am fine', 'iraq     and you'];

// setup speak and record
const myVoice = new p5.SpeechRec('ar');
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

}



