let x = "Shuo"
let y = 25
let z = "Accounting Department"
alert('hello')
document.addEventListener('DOMContentLoaded', () => {
console.log("my name is " + x + " I am " + y + "years old. I am from the " + z)
    console.log('plain JS!@!!'+document.getElementsByTagName('p'))
})

$(function () {
    console.log($('p'));
    console.log($('#example-id'));
    console.log($('.example-class'));
});

//document.addEventListener('DOMContentLoaded', () => {
//    $('#toggle-div').click(function () {
//        alert('test');
//    });
//});
document.addEventListener('DOMContentLoaded', () => {
    document.getElemendById('toggle-div').addEventListener('click', () => {
        let myDiv = document.getElementById('example-div');
    });
});

    $(function () {
        $('#toggle-div').click(function () {
            let myDiv = $('#example-div');
            myDiv.toggle();
        });
    });


let dom = document.getElementById("header_1");
console.log(dom.innerHTML);
dom.innerHTML = "world of hellos";

let change = false;
setInterval(() => {
    if (change == true) {
        dom.innerHTML = "Yes"
    }
    else { dom.innerHTML = "No" }
    change = !change;
}, 1000);
dom.style.color = "red";
dom.style.textAlign = "center";

let doms = document.getElementsByClassName("header");
doms[0].style.backgroundColor = "orange";
doms[2].style.backgroundColor = "blue";



//document.addEventListener('DOMContentLoaded', () => {
//    $('#toggle-div').on('click', () => {
//        alert('test');
//    });
//});