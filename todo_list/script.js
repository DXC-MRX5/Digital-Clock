document.getElementById("addFormBtn").addEventListener("click", showForm);
document.getElementById("clsBtn").addEventListener("click", hideForm);
document.getElementById("addBtn").addEventListener("click", createCard);

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
    let cardBtnDiv = document.createElement("div");
    cardBtnDiv.className = "cardBtnDiv";
    let line=document.createElement("hr");
    cardBtnDiv.append(addIcon, delIcon);
    addIcon.addEventListener("click", function xyz(){
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
    for (let i=0;i<cards.length;i++){
        let title=cards[i].querySelector("h3");
        title.id=i;
    }
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
        }
    }
}

function showItemFrom(tag){
    document.querySelector(".addItemForm").style.visibility="visible";
    document.querySelector(".master").style.filter = "blur(20px)";
    document.getElementById("itemClsBtn").addEventListener("click", hideItemForm);
    function hideItemForm(){
        document.querySelector(".addItemForm").style.visibility="hidden";
        document.querySelector(".master").style.filter = "unset";
        document.getElementById("itemAddBtn").removeEventListener("click", createList);
    }
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

function singleCardShown(event){
    let y1=document.querySelectorAll(".cardDiv");
    for(let i=0;i<y1.length;i++){
        y1[i].style.marginLeft="40%";
    }
    let singleHeading=document.createElement("h2");
    singleHeading.innerText = document.querySelector("#newList").value;
    let back=document.createElement("div");
    back.id="backDiv";
    let backText=document.createElement("p");
    backText.innerText="Back";
    backText.id="backText";
    let backBtn=document.createElement("span");
    backBtn.className= "material-symbols-outlined";
    backBtn.innerText= "arrow_circle_left";
    backBtn.id="backBtn";
    back.append(backBtn,backText);
    document.querySelector(".heading").append(singleHeading,back);
    document.querySelector(".heading").style.flexDirection="row-reverse";
    document.querySelector(".heading h1").style.display="none";
    document.querySelector("#addFormBtn").innerHTML='<button id="addFormBtn"><span id="plusIcon" class="material-symbols-outlined">add_Circle</span></button>';
    let x=event.target.id;
    console.log(x);
    for (let i=0;i<cards.length;i++){
        if(x !== cards[i].querySelector("h3").id){
            cards[i].style.display="none";
        }
    }
    back.addEventListener("click",normal);
    function normal(){
        for(let i=0;i<y1.length;i++){
            y1[i].style.marginLeft="";
        }
        back.style.display="none";
        singleHeading.style.display="none";
        document.querySelector(".heading h1").style.display="block";
        document.querySelector(".heading").style.flexDirection="row";
        document.querySelector("#addFormBtn").innerHTML='<button id="addFormBtn"><span id="plusIcon" class="material-symbols-outlined">add_Circle</span>   Add Item</button>';
        for (let i=0;i<cards.length;i++){
            cards[i].style.display="block";
        }
    }
    document.getElementById("addBtn").addEventListener("click", sameBack);
    function sameBack(){
        for(let i=0;i<y1.length;i++){
            y1[i].style.marginLeft="";
        }
        back.style.display="none";
        singleHeading.style.display="none";
        document.querySelector(".heading h1").style.display="block";
        document.querySelector(".heading").style.flexDirection="row";
        document.querySelector("#addFormBtn").innerHTML='<button id="addFormBtn"><span id="plusIcon" class="material-symbols-outlined">add_Circle</span>   Add Item</button>';
        for (let i=0;i<cards.length;i++){
            cards[i].style.display="block";
        }
    }
    document.removeEventListener("click",singleCardShown);
}
