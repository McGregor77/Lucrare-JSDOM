let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let afis = document.getElementById("afis")

document.addEventListener('click', function (e) {
    if (e.target.classList.contains("adunare")) {
        ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("scadere")) {
        --e.target.parentElement.querySelector("input").value;
    }
    if (afis.value <= 0) {
        minus.setAttribute('disabled', true);
    } else {
        minus.removeAttribute('disabled');
    }
    if (afis.value >= 9 ) {
        plus.setAttribute('disabled', true);
    } else {
        plus.removeAttribute('disabled');
    }
})