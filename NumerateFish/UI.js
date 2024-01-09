export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 24;
        this.fontFamily = 'Helvetica';
        this.infoIdx = 0;
        // document.getElementById('creditprev').addEventListener('click', evt => this.showCreditInfo(-1));
        // document.getElementById('creditnext').addEventListener('click', evt => this.showCreditInfo(1));
        // console.log('i am created now');
    }
    draw(context) {
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 1.5;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = 'black';
        //level
        context.fillText('Level: ' + (this.game.levelIndex + 1), this.game.canvas.width/3, 50);
        //score
        // context.drawImage(document.getElementById('star'), 200, 70, 30, 30);
        context.fillText('Score: ' + this.game.score, 10, 50);
        //game time
        // context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        // context.drawImage(document.getElementById('clock'), 20, 70, 30, 30);
        // context.fillText(': ' + (Math.floor((this.game.maxTime - this.game.time) / 1000) + 1), 70, 95);
        //player health
        // context.drawImage(document.getElementById('heart'), 20, 30, 30, 30);
        // context.fillText(': ' + this.game.player.health, 70, 50);
        //game start message
        // if (this.game.gameStart) {
            // document.getElementById('start').style.display = "block";
        // }
        //game over message
        // if (this.game.gameOver) {
            
        //     if (this.game.player.health > 1) {
            
        //         if (this.game.levelIndex + 1 < 2) document.getElementById('nxtLevel').style.display = "block";
        //         else if (this.game.levelIndex + 1 < 5) {
        //             document.getElementById('levelInfoContainers').style.display = "flex";
        //             var infoLevels = document.querySelectorAll('#levelInfoContainers .info');
        //             for (var i = 0; i < infoLevels.length; i++)
        //                 infoLevels[i].style.display = "none";
        //             infoLevels[this.game.levelIndex - 1].style.display = "table-cell";
        //         } else {
        //             this.showCreditInfo(0);
        //         }
        //     }
        //     else {
                
        //         document.getElementById('restart').style.display = "block";
        //     }

        // }
        context.restore();
    }
    showCreditInfo(idx) {
        var creditInfoContainer = document.getElementById('creditInfo');
        creditInfoContainer.style.display = "flex";
        this.infoIdx += idx;
        // var infos = document.getElementsByClassName('info');
        var creditTitle = document.getElementById('creditTitle');
        creditTitle.style.display = "none";
        var infos = document.querySelectorAll('#creditInfo .info');
        var dots = document.querySelectorAll('#creditInfo .dot');
        for (var i = 0; i < infos.length; i++)
            infos[i].style.display = "none";
        for (var i = 0; i < dots.length; i++)
            dots[i].className = dots[i].className.replace(" active", "");
        if (this.infoIdx > infos.length - 1) this.infoIdx = 0;
        if (this.infoIdx < 0) this.infoIdx = infos.length - 1;
        if (this.infoIdx != 0) creditTitle.style.display = "block";
        infos[this.infoIdx].style.display = "table";
        dots[this.infoIdx].className += " active";
    }

}