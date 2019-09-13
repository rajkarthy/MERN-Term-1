let PLAY_MODE = 0;
let player_keymap =[];
class Game{
    constructor(canvas,width,height,numPlayers){
        canvas.width = width;
        canvas.height = height;
        this.width =  width;
        this.height = height;
        this.ctx = canvas.getContext("2d");
        this.players = this.createPlayers(numPlayers);
        this.currentPlayerIndex = 0;
        document.addEventListener('keydown', this.keyDown.bind(this));
    }

    createPlayers(numPlayers){
        const players = [];
        for(let i=0;i<numPlayers;i++)
        {
            let type = i<numPlayers/2?"Thief":"Police";
            let name = type +" "+ (i%(numPlayers/2)+1);
            let speed = i < numPlayers / 2 ? 50:30;
            players.push(new Player(name,type,speed));
        }
        document.getElementById("game_info").innerText = "Enter keys for Thief 1";
        return players;
    }
    keyDown(e) {
        if(PLAY_MODE ==0){ 
            let currentPlayer = this.players[this.currentPlayerIndex];            
            currentPlayer.arrows.push(e.keyCode);
            player_keymap[e.keyCode] = this.currentPlayerIndex;
            let info = currentPlayer.name + ":"+currentPlayer.arrows.toString();
            if(currentPlayer.arrows.length==4)
            {   
                let heightOffset = currentPlayer.type == "Thief"? 0:this.height*2/3;
                console.log(heightOffset);
                currentPlayer.x = Math.floor(Math.random() * (this.width - currentPlayer.size)) + currentPlayer.size;
                currentPlayer.y = Math.floor(Math.random() * (this.height / 3 - currentPlayer.size)) + currentPlayer.size + heightOffset;
                if(this.currentPlayerIndex == this.players.length-1){
                    PLAY_MODE = 1;
                    info = " Starting the game ";
                }
                else{
                    this.currentPlayerIndex++;
                    info = " Keys for "+this.players[this.currentPlayerIndex].name;
                }
            }
            document.getElementById("game_info").innerText = info;
            console.log(this.players);  
       }
       else{
            console.log(e.keyCode);
            this.players[player_keymap[e.keyCode]].move(e.keyCode);
            this.draw();
       }
    }

    draw(){
        //clear area
        this.ctx.clearRect(0, 0, this.width, this.height); // just clear the whole game area
        this.checkCaught();
        // Draw players
        this.players.forEach(player=>{
            player.draw(this.ctx);
        });
        requestAnimationFrame(this.play.bind(this));
        
    }

    checkCaught(){        
        for (let p = this.players.length / 2; p < this.players.length; p++)
        {
            let rsquared = Math.pow(this.players[p].size,2);
            for (let t = 0; t < this.players.length / 2; t++)
            {
                let dsquared = Math.pow(this.players[p].x-this.players[t].x,2)+
                                Math.pow(this.players[p].y - this.players[t].y, 2);
                // console.log(rsquared,dsquared);                                
                if (dsquared <= rsquared)
                    this.players[t].catch();
            }
        }
    }

}

class Player{
    constructor(name,type,speed=50,size=50){
        this.name = name;
        this.type = type;
        this.size = size;
        this.arrows =[];
        this.color = type =="Police"?"red":"black";
        this.x = 0;
        this.y = 0;
        this.speed =speed;
        this.caught = false;
    }

    move(keyCode){
        if(this.caught == true)
            return false;
        let keyIndex = this.arrows.findIndex(x=>x==keyCode);
        let moveValue = keyIndex%2==0?-1:1;
        if(keyIndex<2)
            this.x = this.x + moveValue * this.speed;
        else this.y = this.y + moveValue * this.speed;
    }
    draw(ctx){
        // console.log("drawing player.."+String(this.color));
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size,0, Math.PI*2);
        ctx.fill();
    }
    caught(){
        this.caught = true;        
        console.log("Caught .."+this.name);
    }
}

function initGame(){
    // let numPlayers = window.prompt("How many players ?");
    // numPlayers = numPlayers ? numPlayers:2;
    numPlayers = 2;
    const canvas = document.getElementById('playground');
    const game = new Game(canvas, 600, 600,numPlayers); // create an instance of the game
}
initGame();