function Register(){
    document.querySelector("#Sloging").style.display = "none";
    document.querySelector("#SRegister").style.display = "block";
    document.querySelector("#Tloging").style.display = "none";
    document.querySelector("#TRegister").style.display = "block";
    regBtr.style.backgroundColor = "#0d6efd";
    regBtr.style.color ="#ffffff";
    logBtr.style.backgroundColor ="rgba(0,0,0,0)";
    logBtr.style.color ="#ffffff";
    
}
function loging(){
    document.querySelector("#Sloging").style.display = "block";
    document.querySelector("#SRegister").style.display = "none";
    document.querySelector("#Tloging").style.display = "block";
    document.querySelector("#TRegister").style.display = "none";
    logBtr.style.backgroundColor = "#0d6efd";
    logBtr.style.color ="#ffffff";
    regBtr.style.backgroundColor ="rgba(0,0,0,0)";
    regBtr.style.color ="#ffffff";
}
let logBtr = document.getElementById("logingBtr");
let regBtr = document.getElementById("RegisterBtr");
let logo = document.getElementById("logo");
logBtr.addEventListener('click',loging);
regBtr.addEventListener('click',Register);

document.querySelector(".category").addEventListener('change',()=>{
    if(logo.innerHTML=="Student Portal"){
        logo.innerHTML = "Teacher Portal";
        document.getElementById("Student").style.display ="none";
        document.getElementById("Teacher").style.display ="block";

    }
    else{
        logo.innerHTML = "Student Portal";
        document.getElementById("Student").style.display ="block";
        document.getElementById("Teacher").style.display ="none";
    }
});

function swapSection(){
    logo.innerHTML = "Teacher Portal";
}






