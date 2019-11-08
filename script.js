function func1() {
    
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var radio3 = document.getElementById("radio3");
    var radio4 = document.getElementById("radio4");
    var correct = false;

    if (radio1.checked) {
        correct = false;
        alert("");
    }
    else if (radio2.checked){
        correct = false;
        alert("radio2 is checked");
    }
    else if (radio3.checked){
        correct = true;
        alert("radio3 is checked");
    }
    else if (radio4.checked){
        correct = false;
        alert("radio4 is checked");
    }
    else{
        alert("please select answer");
    }
        
    
}
function func2() {
    var radio5 = document.getElementById("radio5");
    var radio6 = document.getElementById("radio6");
    var radio7 = document.getElementById("radio7");
    var radio8 = document.getElementById("radio8");
    var correct2 = false;

    if (radio5.checked) {
        correct = false;
        alert("");
        console.log("radio5 is checked")
    }
    else if (radio6.checked){
        correct2 = false;
        alert("radio6 is checked");
        console.log("radio6 is checked")
    }
    else if (radio7.checked){
        correct2 = true;
        alert("radio7 is checked");
        console.log("radio7 is checked")
    }
    else if (radio8.checked){
        correct2 = false;
        alert("radio8 is checked");
        console.log("radio8 is checked")
    }
    else{
        alert("please select answer");
    }
}