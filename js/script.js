// GEUSSING GAME

const num = 20;

 guessNumber = parseInt(prompt( "input your geuss number" ))

//  function GEUSSING GAME

    if (guessNumber===num){
        alert("Congratulation, you just won 10 million");
        console.log("Congratulation, you just won 10 million");
        document.write("Congratulation, you just won 10 million");

    }

    // else if (guessNumber < num){
    //     alert("Try again: The number is greater than your guess number");
    //     console.log("Try again: The number is greater than your guess number");
    //     document.write("Try again: The number is greater than your guess number");
    // }

    // else if  (guessNumber > num){
    //     alert("Try again: The number is lesser than your guess number");
    //     console.log("Try again: The number is lesser than your guess number");
    //     document.write("Try again: The number is lesser than your guess number");

    // }

    else if (guessNumber >= 100){
        alert("Number is in tens")
        console.log(" Number is in tens")
        document.write(" Number is in tens")
    }

    else {
        alert("Your number is incorrect");
        console.log("Your number is incorrect");
        document.write("Your number is incorrect");
    }