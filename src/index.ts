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
    hideButton();
    getWords(words);
    fillEmpty();
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
// function splitWord(value: string, index: number, array: string[]) {
//     const tableD = document.querySelectorAll("td")!;
//     console.log("value", value);
//     if (value.length <= block) {
//         let letters = value.split("");
//         console.log(letters)

//         // ["o","n","e"]
//         for (var i = 0; i < tableD.length; i++) {
//             console.log("for index", i)
//             // console.log("before innerif", tableD)
//             // 1table 
//             if (tableD[i].innerText === "") {

//                 for (var l = 0; l < letters.length; l++) {
//                     tableD[i].innerText = letters[l].toUpperCase();
//                     // console.log("before index", tableD)
//                     // console.log("after index", tableD)
//                     //if return index here it returns first of every letter
//                     console.log("l", l)
//                 };
//                 // if return index here last of every letter
//                 // return
//             }
//         }
//     }
//     // return index++;

//     // console.log("index", index);
//     // console.log("array", array);
// }


// What a mess :) Callback for getwords forEach
// If current word/value is less than block variable split into letters array
// For each letter of letters loop through table data and if empty input letter into table data
// Need to break after condition is met or it will just produce first letter of letters for all and no other conditions will be met
function splitWord(value: string, index: number, array: string[]) {
    const tableD = document.querySelectorAll("td")!;
    // console.log("value", value);
    if (value.length <= block) {
        let letters = value.split("");
        // console.log(letters)
        for (var l = 0; l < letters.length; l++) {
            console.log("letters length", letters.length)
            for (var i = 0; i < tableD.length; i++) {
                console.log("for index", i)
                console.log("innertext", tableD[i].innerText)
                if (tableD[i].innerText !== "") {
                } else {
                    console.log("l index", l)
                    tableD[i].innerText = letters[l].toUpperCase();
                    break
                };
            };
        };
    };
    // console.log("index", index);
    // console.log("array", array);
};
