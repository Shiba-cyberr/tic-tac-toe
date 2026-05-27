let boxes = document.querySelectorAll(".cell");
let resetBtn = document.querySelector("#gameR");
let newBtn = document.querySelector("#gameN");
let msg = document.querySelector(".msg");
let winMsg = document.querySelector("#win");
let playerO = true;

let winConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    enableBoxes();
    playerO = true;
    msg.classList.add("hide");
}


boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (playerO) {
            box.innerText = "O";
            playerO = false;
        } else {
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;

        chakeWin();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwin = (winner) => {
    winMsg.innerText = `${winner} is winer!`;
    msg.classList.remove("hide");
    disableBoxes();
}

const chakeWin = () => {
    for(let condition of winConditions) {
        let pos1val = boxes[condition[0]].innerText;
        let pos2val = boxes[condition[1]].innerText;
        let pos3val = boxes[condition[2]].innerText;

        if(pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showwin(pos1val);
            }else{
                let draw = true;
                for(let box of boxes) {
                    if(box.innerText === "") {
                        draw = false;
                        break;
                    }
                }
                if(draw) {
                    winMsg.innerText = "It's a draw!";
                    msg.classList.remove("hide");
                    disableBoxes();
                }
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);