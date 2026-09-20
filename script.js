let b = document.querySelectorAll(".box");
let r = document.querySelector("#R");
let newGameBtn= document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container ");
let msg = document.querySelector("#msg");

let turnO = true; 
const winP = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

b.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});
 
const disableBoxes = () =>{
    for(let box of b){
        box.disabled = true;

    }
};


const enableBoxes = () =>{
    for(let box of b){
        box.disabled = false;
        box.innerText = "";

    }
};

const showwinner = (winner) => {

    msg.innerText = `🎉 Congratulations! Winner is ${winner} 🎉`;

    msgcontainer.classList.remove("hide");

    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });


    createBalloons();
};
const checkwinner = () =>{
    for( let pattern of winP){
       let postval1 = b[pattern[0]].innerText;
       let postval2 = b[pattern[1]].innerText;
       let postval3 = b[pattern[2]].innerText;

       if(postval1 != ""&& postval2!= ""&& postval3!= ""){
        if(postval1 == postval2 && postval2 == postval3){
            console.log("winner",postval1);
            showwinner(postval1);
        }
       }
    }
};

const resetgame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetgame);
r.addEventListener("click",resetgame);

const createBalloons = () => {

    const container = document.querySelector("#balloons");

    for (let i = 0; i < 20; i++) {

        const balloon = document.createElement("div");

        balloon.classList.add("balloon");

        balloon.style.left = Math.random() * 100 + "%";

        balloon.style.backgroundColor =
            `hsl(${Math.random() * 360}, 80%, 60%)`;

        balloon.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 6000);
    }
};
