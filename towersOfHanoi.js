const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class TowersOfHanoi {
    run() {
      //while game !won, prompt move (need from tower and to_tower)
      //make move
      //render move
      const game = new Game();

      game.promptMove();

    }
  }

class Game {
  constructor() {
    this.stacks = [[3,2,1], [], []];
  }

  run(completetion){
    if(this.isWon) {

    }else {
      this.promptMove()
    }
  }



  promptMove(){
    console.log(JSON.stringify(this.stacks));
    reader.question("From where", function(answer1){
      reader.question("To where?", function(answer2){
        const fromStack = parseInt(answer1);
        const toStack = parseInt(answer2);
        if (this.isValidMove(fromStack, toStack)){
          this.move(fromStack, toStack);
        }
      });
    });
  }

  isValidMove(fromStack, toStack){
    if (fromStack.length === 0) return false;
    if (this.stacks[fromStack][length - 1] < this.stacks[toStack][length - 1]){
      return true;
    }else {
      return false;
    }
  }

  move(startTowerIdx, endTowerIdx){
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let move = this.stacks[startTowerIdx].pop();
      this.stacks[endTowerIdx].push(move);
      return true;
    }else {
      return false;
    }
  }

  isWon(){
    return ((this.stacks === [[], [3,2,1], []]) || (this.stacks === [[], [], [3,2,1]]));
  }

}

let t = new Game();
t.fun();
