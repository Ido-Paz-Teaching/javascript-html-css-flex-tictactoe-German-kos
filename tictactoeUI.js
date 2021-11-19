/*
enter code to handle:
1. User cell selection click
2. game status update messages
3. Start button click
*/
window.onload = function(){
    const boardArray = new Array(9);
    const button0 = document.getElementById("b0");
    const button1 = document.getElementById("b1");
    const button2 = document.getElementById("b2");
    const button3 = document.getElementById("b3");
    const button4 = document.getElementById("b4");
    const button5 = document.getElementById("b5");
    const button6 = document.getElementById("b6");
    const button8 = document.getElementById("b7");
    const button7 = document.getElementById("b8");
    var alt;
    document.querySelector("header > button").onclick = function(){
        if(document.querySelector("header > button").innerHTML == "Reset"){
            resetFunction();
            alt = "x";
            document.getElementById("gameStatusTag").innerHTML = `${alt} 's turn.`;
        }
        if(alt == undefined){
            alt = "x";
            document.getElementById("gameStatusTag").innerHTML = `${alt} 's turn.`;
            document.querySelector("header button").innerHTML = "Reset";
        }
        
    }
    function resetFunction(){
        button0.innerHTML ="";
        button1.innerHTML ="";
        button2.innerHTML ="";
        button3.innerHTML ="";
        button4.innerHTML ="";
        button5.innerHTML ="";
        button6.innerHTML ="";
        button7.innerHTML ="";
        button8.innerHTML ="";
        disableButton(false);
        boardArray.splice(0,9," "," "," "," "," "," "," "," "," ");
        console.log(boardArray);
        alt = "x";
    }
    function clickingFunction(event){
        const eventID = event.target.id;
        if(alt !== undefined && document.getElementById(eventID).innerHTML === ""){
                switch(alt){
                    case "x": 
                        document.getElementById(eventID).innerHTML = alt;
                        boardArray[eventID[1]] = alt;
                        if (hasWon(boardArray)){
                            document.getElementById("gameStatusTag").innerHTML = `${alt} won.`;
                            console.log("x won");
                            disableButton(true);
                            break;
                        }else if(hasDraw(boardArray)){
                            document.getElementById("gameStatusTag").innerHTML = `It's a draw.`;
                            console.log("its a draw");
                            disableButton(true);
                            break;
                        }else
                        alt = "o";
                        document.getElementById("gameStatusTag").innerHTML = `${alt} 's turn.`;
                        break;
                    case "o":
                        document.getElementById(eventID).innerHTML = alt;
                        boardArray[eventID[1]] = alt;
                        if (hasWon(boardArray)){
                            document.getElementById("gameStatusTag").innerHTML = `${alt} won.`;
                            console.log("o won");
                            disableButton(true);
                            break;
                        }
                        else if(hasDraw(boardArray)){
                            document.getElementById("gameStatusTag").innerHTML = `It's a draw.`;
                            console.log("its a draw");
                            disableButton(true);
                            break;
                        }
                        else{
                            alt = "x";
                            document.getElementById("gameStatusTag").innerHTML = `${alt} 's turn.`; 
                            break;
                    }
                }
            }
        }
    function disableButton(value){
        button0.disabled=value;
        button1.disabled=value;
        button2.disabled=value;
        button3.disabled=value;
        button4.disabled=value;
        button5.disabled=value;
        button6.disabled=value;
        button7.disabled=value;
        button8.disabled=value;
    }
    button0.addEventListener ("click", clickingFunction);
    button1.addEventListener ("click", clickingFunction);
    button2.addEventListener ("click", clickingFunction);
    button3.addEventListener ("click", clickingFunction);
    button4.addEventListener ("click", clickingFunction);
    button5.addEventListener ("click", clickingFunction);
    button6.addEventListener ("click", clickingFunction);
    button7.addEventListener ("click", clickingFunction);
    button8.addEventListener ("click", clickingFunction);
}