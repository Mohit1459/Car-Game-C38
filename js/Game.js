class Game{
    constructor(){}

    getState(){
        var gsref = database.ref('gameState');
        gsref.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();

        }
        car1 = createSprite(100,400)
        car2 = createSprite(200,400)
        car3 = createSprite(300,400)
        car4 = createSprite(400,400)
        cars = [car1,car2,car3,car4];
        console.log("car created")
    }
    play(){
        form.hide();
        textSize(30)
        text("gameStart",200,200)
        Player.getPlayerInfo();
       

        if (allPlayers !== undefined) {
           // var ypos = 120;
            //index of the array
        var index =0;

        //x and y position of the cars
        var x = 0;
        var y;
            for( var plr in allPlayers){

                index = index + 1;

                x = x + 200;
               // console.log("in for loop", y)
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if (index === player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
               // ypos = ypos + 20;
                //textSize(15);
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance,120,ypos);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 50;
            player.update();
        }
        drawSprites();
    }
    

}