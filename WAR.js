//assigning constants
const suits = ["Diamond", "Spade", "Heart", "Club"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//creating the card  class
class Card {
    constructor(suit, value, rank){
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
}

//creating the deck
class Deck{
    constructor(suit, value, rank){
        this.suit = suit;
        this.value = value;
        this.rank = rank;
        this.deck = [];
    }

    createDeck(){
        for (let i = 0; i < this.suit.length; i++) {
            for (let j = 0; j < this.value.length; j++) {
                let card = { suit: this.suit[i], value: this.value[j], rank: this.rank[j] };
                this.deck.push(card);
            }
        }
        return this.deck;
    }
//shuffling the cards so they are random
    shuffle(){ 
        for (let i = this.deck.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.deck[newIndex];
            this.deck[newIndex] = this.deck[i];
            this.deck[i] = oldValue;
        }
    }
//giving cards to each player
    deal(){  
        const halfDeck = (this.deck.length / 2);
        player1Hand = (this.deck.slice(0, halfDeck));
        player2Hand = (this.deck.slice(halfDeck, this.deck.length));
    }

    describe(){
        console.log("Number of cards in deck: " + this.deck.length);
    }
}

//creating the players
class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    newHand(cards){
        this.hand = cards;
    }

    describe(){
        console.log(this.name + " has " + this.hand.length + " cards.");
    }

}

//create a function to play the game when called.
function whoWins (player1, player2){
    for(let i = 0; i < player1Hand.length; i++){
        if(player1.hand[i].rank > player2.hand[i].rank){
            console.log(`Player1 gets a point!`);
            player1.score++;
        } else if(player1.hand[i].rank < player2.hand[i].rank){
            console.log(`Player2 gets a point!`);
            player2.score++;
        } else {
            console.log(`Tie, nobody gets a point`);
        }
    }
}
//created a function to show the end results with the scores.
function endResults(player1, player2){
    if(player1.score > player2.score){
        console.log(`${player1.name} Wins!;
        ${player1.name} wins with ${player1.score} points. 
        ${player2.name} loses with ${player2.score} points.`)
    } else if(player1.score < player2.score){
        console.log(`${player2.name} Wins!;
        ${player2.name} wins with ${player2.score} points!
        ${player1.name} loses with ${player1.score} points!`);
    } else {
        console.log(`${player1.name} and ${player2.name} tied!`);
    }
}


let player1Hand = [];
let player2Hand = [];

let freshDeck = new Deck(suits, values, rank);
freshDeck.createDeck();
freshDeck.shuffle();
freshDeck.deal();

let player1 = new Player("Ellie");
let player2 = new Player("Shelby");
player1.newHand(player1Hand);
player2.newHand(player2Hand);

//calling created functions
whoWins (player1, player2);
console.log("Ellie has " + player1.score);
console.log("Shelby has " + player2.score);
endResults(player1, player2);

