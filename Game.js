const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    CONFESS:Symbol("confess"),
    BUTLER: Symbol("butler"),
    TOAST: Symbol("toast"),
    ONE:Symbol("one"),
    TWO:Symbol("two"),
    THREE:Symbol("three"),
    FOUR:Symbol("four"),
    FIVE:Symbol("five"),
    SIX:Symbol("six"),
    SEVEN:Symbol("seven"),
    EIGHT:Symbol("eight"),
    NINE:Symbol("nine"),
    TEN:Symbol("ten")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "hello";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "welcome to jesus game .. do you want to play?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply ="lets play.. first pay obeisence.";
                    this.stateCur = GameState.MANSION;
                }
                break;
            case GameState.MANSION:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit"
        
                }else{
                    sReply = "Do you want to confess your sins";
                    this.stateCur = GameState.CONFESS;

                }
                break;
            case GameState.CONFESS:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit the game?";

                }else{
                    sReply = " what are your sins?";
                    this.stateCur = GameState.TOAST;
                }
                break;

                case GameState.TOAST:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit ";
                }else{
                    sReply = "Jesus always takes care of their children";
                    this.stateCur = GameState.BUTLER;
                }
                break;
                case GameState.BUTLER:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply = "Here are some miracles of jesus.. do you want to listen them up?";
                    this.stateCur = GameState.ONE;
                }
                break;
                case GameState.ONE:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply = "fed thousands of people";
                    this.stateCur = GameState.TWO;
                }
                break;
                case GameState.TWO:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply = "cast out evil spirits.";
                    this.stateCur = GameState.THREE;
                }
                break;
                case GameState.THREE:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply = "healed the blind,deaf,sick,injured and infirmed.";
                    this.stateCur = GameState.FOUR;
                }
                break;
                case GameState.FOUR:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply = "turned water to wine.";
                    this.stateCur = GameState.FIVE;
                }
                break;
                case GameState.FIVE:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply = "controlled the water an other elements of nature.";
                    this.stateCur = GameState.SIX;
                }
                break;
                case GameState.SIX:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply = "caught a suprisingly large amount of fish.";
                    this.stateCur = GameState.SEVEN;
                }
                break;
                case GameState.SEVEN:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply = "raised people from the dead. including himself.";
                    this.stateCur = GameState.EIGHT;
                }
                break;
                case GameState.EIGHT:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply = "these will help you to be a great person in life..";
                    this.stateCur = GameState.NINE;
                }
                break;
                case GameState.NINE:
                if(sInput.toLowerCase().match("no")){
                    sReply = "quit";
                }else{
                    sReply = " Therefore i showed you the path to heaven";
                    this.stateCur = GameState.WELCOMING;
                }
                break;


        }
        return([sReply]);
    }
}