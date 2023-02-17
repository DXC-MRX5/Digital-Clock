function mainClock(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    if(hours>= 12){
        document.getElementById("ampm").innerText = "PM";
    }
    else{
        document.getElementById("ampm").innerText = "AM";
    }
    if(hours > 12){
        hours-= 12 ;
    }
    document.getElementById("hour").innerText = hours;
    document.getElementById("minute").innerText = minutes;
    document.getElementById("second").innerText = seconds;
};
setInterval(()=> {
    mainClock();
}, 1000);

function wishCmntChange(){
    let date = new Date()
    let hours = date.getHours()

    if(hours>= 6 && hours<=10){
        document.querySelector(".wish-cmnt p").innerText="GOOD MORNING !! WAKE UP !!";
    }
    else if(hours> 10 && hours<=15){
        document.querySelector(".wish-cmnt p").innerText="DO YOUR DAILY WORK !!";
    }
    else if(hours> 15 && hours<=17){
        document.querySelector(".wish-cmnt p").innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    else if(hours> 17 && hours<=20){
        document.querySelector(".wish-cmnt p").innerText="GOOD EVENING !!";
    }
    else if(hours> 20 && hours<=22){
        document.querySelector(".wish-cmnt p").innerText="GOOD NIGHT !!";
    }
    else{
        document.querySelector(".wish-cmnt p").innerText="SWEET DREAMS !!";
    }
}
wishCmntChange();

document.getElementById("alm-btn").addEventListener('mouseover', function(){
    this.innerText="Party Time!";
})
document.getElementById("alm-btn").addEventListener('mouseout', function(){
    this.innerText="Set Alarm";
})

document.getElementById("alm-btn").addEventListener('click', function() {
    let date = new Date();
    let hours = date.getHours();
    if(parseInt(document.getElementById("wakeup").value) === hours){
        document.querySelector("#cmnt p").innerText="GRAB SOME HEALTHY BREAKFAST!";
        document.querySelector(".img-cntnr").style.backgroundImage = "url('Component_1.svg')";
    }
    if(parseInt(document.getElementById("timeLunch").value) === hours){
        document.querySelector("#cmnt p").innerText="LET'S HAVE SOME LUNCH !!!";
        document.querySelector(".img-cntnr").style.backgroundImage = "url('Component 31.svg')";
    }
    if(parseInt(document.getElementById("timeNap").value) === hours){
        document.querySelector("#cmnt p").innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.querySelector(".img-cntnr").style.backgroundImage = "url('eveningCup.jpeg')";
    }
    if(parseInt(document.getElementById("timeNight").value) === hours){
        document.querySelector("#cmnt p").innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        document.querySelector(".img-cntnr").style.backgroundImage = "url('goodnight_image.svg')";
    }

let wkup = document.getElementById("wakeup");
let lnc = document.getElementById("timeLunch");
let nap = document.getElementById("timeNap");
let night = document.getElementById("timeNight");
let tmg = document.getElementsByClassName("timing");

tmg[0].innerText = wkup.options[wkup.selectedIndex].text;
tmg[1].innerText = lnc.options[lnc.selectedIndex].text;
tmg[2].innerText = nap.options[nap.selectedIndex].text;
tmg[3].innerText = night.options[night.selectedIndex].text;

});
