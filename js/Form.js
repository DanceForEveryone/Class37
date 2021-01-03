class Form{
    constructor(){
    this.input=createInput("name")
    this.button=createButton("Play")
    this.greeting = createElement('h3')
    }
    hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    }
    display(){
    var title=createElement('h2')
    title.html("car racing game")
    title.position(600,100);

    
    this.input.position(600,180)

    
    this.button.position(600,280)
    this.button.mousePressed(
    ()=>{
    this.input.hide();
    this.button.hide();

    player.name= this.input.value()
    
    this.greeting.html("hello "+ player.name)
    this.greeting.position(600,160)

    playerCount+=1;
    player.index=playerCount;
    player.updateCount(playerCount);
    player.update();
    }
    );
    }
}
