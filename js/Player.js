class Player{
    constructor(){
        this.distance = 0;
        this.name = null;
        this.index = null;
    }
    getCount(){
        var pcref = database.ref('playerCount');
        pcref.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    update(){
        var playerIndex = "players/player"  + this.index; // this.index = 1 .....players/player1
        database.ref(playerIndex).set({
            name : this.name,
            distance: this.distance
        })
    }
    static getPlayerInfo(){
        var pinfo = database.ref('players');
        pinfo.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}