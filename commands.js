var x = prompt("what would you like to do")


function Score(amount){
    increaseScore(amount)    
}
function answer(){
    alert(correctAns)   
}
function restartGhost(){

	
}
function freeze(){
	window.moveGhost=0
	
}
function unfreeze(){
	window.moveGhost=1
	
}
function admin(){
	authorType="administrator"
	window.editAllowed()

}
 
if (x == "Points"){
	var y = prompt("How many points")
	var x = Number(y)
	console.log(x)
	Score(x)
}
if (x == "stop"){
	freeze()
	function moveGhost(){}

}








