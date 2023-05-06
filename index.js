fetch("https://api.adviceslip.com/advice").then(function (res) {
    return res.json();
}).then(function (res) {
    let p1 = document.querySelector(".nested_body_pt1 p:first-of-type");
    p1.innerHTML = `Advice : #${res.slip.id}`
    let p2 = document.querySelector(".nested_body_pt1 p:last-of-type");
    p2.innerHTML = `"${res.slip.advice}"`
})


let button = document.querySelector(".nested_body_pt2_sec2");
button.addEventListener('click', function () {
    location.reload();
})