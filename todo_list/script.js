document.getElementById("addFormBtn").addEventListener("click", showForm);
document.getElementById("clsBtn").addEventListener("click", hideForm);
document.getElementById("addBtn").addEventListener("click", createCard);
document.getElementById("itemClsBtn").addEventListener("click", hideItemForm);

let cards=[];

function showForm(){
    document.querySelector(".addListForm").style.visibility="visible";
    document.querySelector(".master").style.filter = "blur(20px)";
}

function hideForm(){
    document.querySelector(".addListForm").style.visibility="hidden";
    document.querySelector(".master").style.filter = "unset";
}

function createCard(){
    document.querySelector(".addListForm").style.visibility="hidden";
    document.querySelector(".master").style.filter = "unset";
    let newList = document.querySelector("#newList").value;
    let cardTitle = document.createElement("h3");
    cardTitle.innerText = newList;
    cardTitle.addEventListener("click",singleCardShown);
    let listCntnr = document.createElement("ul");
    listCntnr.className="listCntnr";
    let addIcon = document.createElement("span");
    addIcon.className = "material-symbols-outlined";
    addIcon.innerText = "add";
    addIcon.id = "addIcon";
    let delIcon = document.createElement("span");
    delIcon.className = "material-symbols-outlined";
    delIcon.innerText = "delete";
    delIcon.id = "delIcon";
    let cardDiv = document.createElement("div");
    cardDiv.className = "cardDiv";
    cardDiv.id=newList;
    let cardBtnDiv = document.createElement("div");
    cardBtnDiv.className = "cardBtnDiv";
    let line=document.createElement("hr");
    cardBtnDiv.append(addIcon, delIcon);
    addIcon.addEventListener("click", ()=>{
        showItemFrom(listCntnr);
    });
    cardDiv.append(cardTitle, line, listCntnr, cardBtnDiv);
    delIcon.addEventListener("click", function removeCard(){
        let finalCards = [];
        for(let i=0;i<cards.length;i++){
            if(cards[i] !== cardDiv){
                finalCards.push(cards[i]);
            }
        }
        cards=finalCards;
        display(cards);
    })
    cards.push(cardDiv);
    display(cards);
}
function display(cards){
    document.querySelector("#cardCntnr").innerHTML="";
    if(cards.length==0){
        let emptyMsg=document.createElement("h1");
        emptyMsg.innerText="No items in the todo list."
        document.getElementById("cardCntnr").appendChild(emptyMsg);
    }
    else{
        for(let i=0;i<cards.length;i++){
            document.querySelector("#cardCntnr").append(cards[i]);
            // cards.forEach((obj,index)=>{
            //     obj.id=index;
            // })
        }
    }
}

function showItemFrom(tag){
    document.querySelector(".addItemForm").style.visibility="visible";
    document.querySelector(".master").style.filter = "blur(20px)";
    document.getElementById("itemAddBtn").addEventListener("click", createList);
    function createList(){
        document.querySelector(".addItemForm").style.visibility="hidden";
        document.querySelector(".master").style.filter = "unset";
        let listdata=document.createElement("li");
        listdata.innerText=document.querySelector("#newItem").value;
        let markBtn=document.createElement("button");
        markBtn.className="markBtn";
        markBtn.innerText="Mark Done";
        markBtn.addEventListener("click",marked);
        function marked(){
            listdata.style.textDecoration="line-through";
            listdata.style.color="red";
            markBtn.style.display="none";
        }
        listdata.appendChild(markBtn);
        tag.append(listdata);
        document.getElementById("itemAddBtn").removeEventListener("click", createList);
    }
}

function hideItemForm(){
    document.querySelector(".addItemForm").style.visibility="hidden";
    document.querySelector(".master").style.filter = "unset";
}
function singleCardShown(event){
    let backBtn=document.createElement("span");
    backBtn.className= "material-symbols-outlined";
    backBtn.innerText= "arrow_circle_left";
    backBtn.id="back";
    document.querySelector(".heading").append(backBtn);
    document.querySelector(".heading").style.flexDirection="row-reverse";
    document.querySelector(".heading h1").style.display="none";
    let x=event.target.innerText;
    for (let i=0;i<cards.length;i++){
        if(x !== cards[i].id){
            cards[i].style.display="none";
        }
    }
    backBtn.addEventListener("click",normal);
    function normal(){
        backBtn.style.display="none";
        document.querySelector(".heading h1").style.display="block";
        document.querySelector(".heading").style.flexDirection="row";
        for (let i=0;i<cards.length;i++){
            cards[i].style.display="block";
        }
    }
    document.getElementById("addBtn").addEventListener("click", sameBack);
    function sameBack(){
        backBtn.style.display="none";
        document.querySelector(".heading h1").style.display="block";
        document.querySelector(".heading").style.flexDirection="row";
        for (let i=0;i<cards.length;i++){
            cards[i].style.display="block";
        }
    }
}
