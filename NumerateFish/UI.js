export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Arial Black';
        this.infoIdx = 0;
        this.game.questionNumber = 10;
        document.getElementById('creditprev').addEventListener('click', evt => this.showCreditInfo(-1));
        document.getElementById('creditnext').addEventListener('click', evt => this.showCreditInfo(1));
        this.mathsboximage = document.getElementById('mathsbox');
        this.coincollectionimage = document.getElementById('coinCollection');
        this.heartimage = document.getElementById('heart');
        this.nxtLevelDOM = document.getElementById('nxtLevel');
        this.levelInfoContainersDOM = document.getElementById('levelInfoContainers');
    }
    draw(context) {
        
        this.game.levels[this.game.currentLevel].questionBoxes.forEach(box => {
            box.draw(context);
        });
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 1.5;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = 'black';
        //level
        context.fillText('Level: ' + (this.game.currentLevel+1) + ' / ' + (this.game.levels.length), this.game.canvas.width/3, 50);
        //score
        context.fillText(' : '+this.game.coins, (this.game.width/3)-20+260/4, 100);
        context.fillText(': ' + this.game.score + ' / '+this.game.winningScore, 70, 50);
        // context.fillText('Health : ', 2, 100);
        
        this.game.levels[this.game.currentLevel].drawQuestion(context);
        context.restore();
        context.save();
        
        context.fillStyle = 'red';
        context.fillRect(35, 91, this.game.player.health*10, 10);
        context.fillStyle = 'black';
        context.lineWidth = 2;
        context.strokeRect(35, 90, 100, 13);
        context.drawImage(this.mathsboximage, 10, 10, 50, 50);
        context.drawImage(this.coincollectionimage,  (this.game.width/3)-20, 100-194/7, 260/4, 194/4);
        context.drawImage(this.heartimage, 10, 80, 50/1.3, 42/1.3);
        context.restore();
        
        //game over message
        if (this.game.gameOver) {
            if (this.game.player.health > 1) {
                if (this.game.currentLevel + 1 < this.game.levels.length) this.nxtLevelDOM.style.display = "block";
                else if (this.game.currentLevel + 1 < this.game.levels.length) {
                    this.levelInfoContainersDOM.style.display = "flex";
                    var infoLevels = document.querySelectorAll('#levelInfoContainers .info');
                    for (var i = 0; i < infoLevels.length; i++)
                        infoLevels[i].style.display = "none";
                    infoLevels[this.game.levelIndex - 1].style.display = "table-cell";
                } else {
                    this.showCreditInfo(0);
                }
            }
            else {
                document.getElementById('restart').style.display = "block";
            }

        }
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