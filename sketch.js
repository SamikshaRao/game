var words=["Never", "Look", "Back"];
var input,button,element;
var i=0;
var ival;
var value;
var gameState=0;

function setup(){
    createCanvas(800,600);

    element=createElement('h2');
    element.position(200,290);
    
    input=createInput("",'text').attribute("placeholder","Write the above text");
    input.position(300,390);

    button=createButton("SUBMIT");
    button.position(400,490);
}

function draw(){
    background(255)
element.html(words[i])
ival=input.value()

button.mousePressed(()=>{
    gameState=1
    if(ival===words[i]){
        value=1
    }
    else{value=2}
    if(value===1){
        text("Correct",100,100)
    }
    if(value===2){
        text("wrong",100,100)
    }
    
})
text("Press N for next sentence.",500,500)
if(keyWentDown('N') && gameState==1 && i<words.length){
    gameState=0 
    i++
}

}
