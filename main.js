// Selfwork funzioni 1
let shoot = Number(prompt("Quanti round desiderate fare?"));

function game(number) {
    let punteggioP1= 0; 
    let punteggioP2=0;
    for (let i = 1; i <= number; i++) {
       
        
        let tiro =  Math.floor(Math.random() * (6 - 1) + 1)
        // console.log(tiro);
        
        punteggioP1 += tiro;
      
        console.log(punteggioP1);
    };
    
    for (let i = 1; i <= number; i++) {
       
        
        let tiro =  Math.floor(Math.random() * (6 - 1) + 1)
        // console.log(tiro);
        
        punteggioP2 += tiro;
      
        console.log(punteggioP2);
    }
     if ((punteggioP1 - punteggioP2)>0) {
        return `Player 1 win score:${punteggioP1}`
    }else{
        return `Player 2 win score:${punteggioP2}`
    };
};

        
let winner = game(shoot);
console.log(winner);
