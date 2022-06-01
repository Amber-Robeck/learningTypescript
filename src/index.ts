//When writing a specific outDir in tcconfig, can't run the file directly on terminal or it compiles file to same folder, use tsc--watch instead



//Start game button--check
//Create table dynamically--check
//Fill table with array of words
//Create list of words on page so user knows what to look for
//Connect them by similar letters if length left is long enough
//Fill in rest of empty blocks with random letter--check currently filling all blocks
//User strikethrough for words found
//Would like to strikethrough word on list when user finds word
//End game function
//Hints....
let words = ["one", "two", "three", "thirteen", "seventeen"];


window.onload = function () {
    createDiv();
    console.log('page is fully loaded');
};

const createDiv = function () {
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
};

const startGame = function () {
    console.log("started game");
    createTable();
    fillEmpty();
    hideButton();
};

const hideButton = function () {
    const startButton = document.querySelector(".start")!;
    startButton.setAttribute("style", "display: none;");
};


//variable for row/column in table
//had to move game variable to inside function after dynamically creating as querySelector was not able to find dynamically added.
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
const fillEmpty = function () {
    for (let td of document.querySelectorAll("td")) {
        if (td.textContent === "") {
            let char = Math.round(65 + Math.random() * 25)
            td.textContent = String.fromCharCode(char)
        }
    }
};

const getWords = function (arr: string[]) {
    console.log(arr);
    arr.forEach(splitWord);
};
function splitWord(value: string, index: number, array: string[]) {
    console.log("value", value);
    if (value.length <= block) {
        let letters = value.split("");
        console.log(letters)
    }
    console.log("index", index);
    // console.log("array", array);
}

// var string = "words";
// for (var i = 0; i < string.length; i++) {
//     console.log(string.charAt(i));
// }

getWords(words);