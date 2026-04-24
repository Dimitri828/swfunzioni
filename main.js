// Selfwork funzioni 1
// let shoot = Number(prompt("Quanti round desiderate fare?"));

// function game(number) {
//     let punteggioP1= 0; 
//     let punteggioP2=0;
//     for (let i = 1; i <= number; i++) {
       
        
//         let tiro =  Math.floor(Math.random() * (6 - 1) + 1)
//         // console.log(tiro);
        
//         punteggioP1 += tiro;
      
//         console.log(punteggioP1);
//     };
    
//     for (let i = 1; i <= number; i++) {
       
        
//         let tiro =  Math.floor(Math.random() * (6 - 1) + 1)
//         // console.log(tiro);
        
//         punteggioP2 += tiro;
      
//         console.log(punteggioP2);
//     }
//      if ((punteggioP1 - punteggioP2)>0) {
//         return `Player 1 win score:${punteggioP1}`
//     }else{
//         return `Player 2 win score:${punteggioP2}`
//     };
// };

        
// let winner = game(shoot);
// console.log(winner);



// SW FUNZIONI 2

// function conta(n) {
//     // let count=1
//     for (let i = 1; i <= n; i++) {
        
//         let count=i
//         if (count % 15 ==0) {
//             count="fizzbuzz"
//         }else if (count % 5 ==0) {
//             count="buzz"
//         }else if (count % 3 ==0) {
//             count="fizz"
//         }
//         console.log(count);
        
//     }

    
// }
// conta(15)
// conta(30)


// SELFWORK funzioni 3


function cifre(number) {
    if (number<100) {
        console.log(`Il ${number} ha 1 cifra`);
        
    }else if(number<1000){
        console.log(`Il ${number} ha 2 cifre`);
        
    }else if(number<10000){
        console.log(`Il ${number} ha 3 cifre`);
        
    }else{
        console.log(`Il ${number} ha troppe cifre`);
        
    }

}

let cifra =cifre(10750);
console.log(cifra);

