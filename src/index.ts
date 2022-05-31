//When writing a specific outDir in tcconfig, can't run the file directly on terminal or it compiles file to same folder, use tsc--watch instead



//Start game button
//Create table dynamically
//Fill table with array of words
//Create list of words on page so user knows what to look for
//Connect them by similar letters if length left is long enough
//Fill in rest of empty blocks with random letter
//User strikethrough for words found
//Would like to strikethrough word on list when user finds word
//End game function
//Hints....


window.onload = function () {
    let gameSpace = document.createElement("div");
    gameSpace.setAttribute("class", "game");
    let hello = document.createElement("p");
    hello.innerText = "Hello friends";
    let startB = document.createElement("button");
    startB.setAttribute("class", "start");
    startB.innerText = "Start";
    startB.onclick = startGame;
    gameSpace.appendChild(hello);
    gameSpace.appendChild(startB);
    document.body.appendChild(gameSpace);
    console.log('page is fully loaded');
};


let words = ["one", "two", "three"];
const startGame = function () {
    console.log("started game");
    createTable();
    displayWords();
    const startButton = document.querySelector(".start")!;
    startButton.setAttribute("style", "display: none;")
}


//variable for row/column in table
const block = 8;

const createTable = function () {
    const game = document.querySelector(".game")!;
    let table = document.createElement("table");
    let tableRow;
    let tableData;
    //loop through create block ammount tabledata for each tablerow and append
    for (let i = 0; i < block; i++) {
        tableRow = document.createElement("tr");
        for (let m = 0; m < block; m++) {
            tableData = document.createElement("td");
            tableRow.appendChild(tableData);
        }
        table.appendChild(tableRow);
    }
    game.appendChild(table);
};
//char code *26 returns [ assuming first number counts as one
const displayWords = function () {
    for (let td of document.querySelectorAll("td")) {
        if (td.textContent === "") {
            let char = Math.round(65 + Math.random() * 25)
            td.textContent = String.fromCharCode(char)
        }
    }
};

