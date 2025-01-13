let round=document.querySelector("#round")
let box=document.querySelectorAll(".box")
let color=["green","red","yellow","blue"]
let click=[]
let user=[]

function resetGame() {
    click = [];
    user = [];
    round.innerText="0"
    random();
}

function random() {
    let any=color[Math.floor(Math.random()*color.length)]
    click.push(any)
    let x=document.querySelector(`#${any}`)
    x.classList.add("new")
    setTimeout(() => x.classList.remove("new"), 500)
}


function check() {
    for (let i = 0; i < user.length; i++) {
        if (user[i] !== click[i]) {
            alert("Wrong sequence! Game over.");
            resetGame();
            return;
        }
        if (user.length === click.length) {
            round.innerText++
            user = [];
            setTimeout(random, 1000); 
        }
    }}


box.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        let any=ele.getAttribute("id")
    user.push(any)
    check()


    })
})

random()
