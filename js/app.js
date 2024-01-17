const FORM = document.querySelector("#myForm");
const LIST_INPUTS = document.querySelectorAll("input");
const COUNTRY = document.querySelector("select");
const ALL_TOOLTIP = document.querySelectorAll(".tooltip");

let check = {};

function getTooltip(elemHTML) {

    let next = elemHTML.nextElementSibling;

    while (next) {
        if (next.classList.contains('tooltip')) {
            return next;
        }

        next = next.nextElementSibling;
    }

}

check.sexe = function () {

    let check_gender = document.querySelector("input[name='sexe']:checked"),
    tooltip = check_gender != null ? getTooltip(check_gender.parentNode) : getTooltip(document.querySelectorAll("input[name='sexe']")[1].parentNode);

    if (check_gender != null) {
        tooltip.style.display = "none";
        return true;
    } else {
        tooltip.style.display = "inline";
        return false;

    }

    console.log("sexe");

}

check.lastName = function (id) {

    let elemHTML = document.getElementById(id),
        tooltip = getTooltip(elemHTML);

    if (elemHTML.value.length >= 2) {
        elemHTML.classList.add("correct");
        elemHTML.classList.remove("incorrect");
        tooltip.style.display = "none";
        return true;
    } else {
        elemHTML.classList.add("incorrect");
        elemHTML.classList.remove("correct");
        tooltip.style.display = "inline";
        return false;

    }

    console.log("lastName");

}

check.firstName = check.lastName;

check.login = function (id) {

    let elemHTML = document.getElementById(id),
        tooltip = getTooltip(elemHTML);

    if (elemHTML.value.length >= 4) {
        elemHTML.classList.add("correct");
        elemHTML.classList.remove("incorrect");
        tooltip.style.display = "none";
        return true;
    } else {
        elemHTML.classList.add("incorrect");
        elemHTML.classList.remove("correct");
        tooltip.style.display = "inline";
        return false;

    }

    console.log("login");

}

check.age = function (id) {

    let elemHTML = document.getElementById(id),
        tooltip = getTooltip(elemHTML);

    if (elemHTML.value >= 5 && elemHTML.value <= 140) {
        elemHTML.classList.add("correct");
        elemHTML.classList.remove("incorrect");
        tooltip.style.display = "none";
        return true;
    } else {
        elemHTML.classList.add("incorrect");
        elemHTML.classList.remove("correct");
        tooltip.style.display = "inline";
        return false;

    }

    console.log("age");

}

check.pwd1 = function (id) {

    let elemHTML = document.getElementById(id),
        tooltip = getTooltip(elemHTML);

    if (elemHTML.value.length >= 6) {
        elemHTML.classList.add("correct");
        elemHTML.classList.remove("incorrect");
        tooltip.style.display = "none";
        return true;
    } else {
        elemHTML.classList.add("incorrect");
        elemHTML.classList.remove("correct");
        tooltip.style.display = "inline";
        return false;

    }

    console.log("age");

}

check.pwd2 = function (id) {

    let elemHTML = document.getElementById(id),
        pwd1 = document.getElementById("pwd1"),
        tooltip = getTooltip(elemHTML);

    if (elemHTML.value.length > 0 && elemHTML.value === pwd1.value) {
        elemHTML.classList.add("correct");
        elemHTML.classList.remove("incorrect");
        tooltip.style.display = "none";
        return true;
    } else {
        elemHTML.classList.add("incorrect");
        elemHTML.classList.remove("correct");
        tooltip.style.display = "inline";
        return false;

    }

    console.log("pwd2");

}

check.country = function (id) {

    let elemHTML = document.getElementById(id),
        val = elemHTML.options[elemHTML.selectedIndex].value;
        tooltip = getTooltip(elemHTML);

    if (val != "none") {
        elemHTML.classList.add("correct");
        elemHTML.classList.remove("incorrect");
        tooltip.style.display = "none";
        return true;
    } else {
        elemHTML.classList.add("incorrect");
        elemHTML.classList.remove("correct");
        tooltip.style.display = "inline";
        return false;

    }


    console.log("country");

}

FORM.addEventListener("submit", function (event) {

    event.preventDefault();

    let control = true;

    for (let i in check) {
        // check.toto();
        check[i](i);
        control = control && check[i](i);
    }

    if(control) {
        alert("control ok !");
    }

});

for (let i = 0; i < LIST_INPUTS.length; i++) {
    LIST_INPUTS[i].addEventListener("keyup", function () {

        if (this.type == "text" || this.type == "password") {
            check[this.id](this.id);
            // check.lastName("lastName");
        }
    });
}

COUNTRY.addEventListener("change", function() {

    check["country"]("country");

});

for(let i = 0; i < ALL_TOOLTIP.length; i++) {
    ALL_TOOLTIP[i].style.display = "none";
}

document.querySelectorAll("input[name='sexe']").forEach((input) => {
    input.addEventListener('change', function() {
        check.sexe();
    });
});