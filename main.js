var input = document.querySelector("h2");
var firstnum = "";
var secondnum;
var thirdnum = "";
var solve = 0;

function num(value) {
    if (secondnum === undefined) {
        firstnum += value;
        input.textContent = firstnum;
        console.log("f");
    } else {
        thirdnum += value;
        input.textContent = thirdnum;
        console.log("t");
    }
}

function operator(value) {
    if (thirdnum !== "") {
        equal();
        firstnum = input.textContent;
        console.log(input.textContent = firstnum);
        input.textContent = value;
        secondnum = value;
    } else if (firstnum === "") {
        firstnum = input.textContent;
        console.log(input.textContent = firstnum);
        input.textContent = value;
        secondnum = value;
        console.log("d", firstnum);
    } else {
        secondnum = value;
        input.textContent = secondnum;
    }

}

function clean() {
    firstnum = "";
    secondnum;
    thirdnum = "";
    solve = 0;
    input.textContent = "";
}

function equal() {
    switch (secondnum) {
        case "+":
            solve = Number(firstnum) + Number(thirdnum);
            input.textContent = solve;
            firstnum = "";
            secondnum = undefined;
            console.log(secondnum);
            thirdnum = "";
            solve = 0;
            break;

        case "-":
            solve = Number(firstnum) - Number(thirdnum);
            input.textContent = solve;
            firstnum = "";
            secondnum = undefined;
            thirdnum = "";
            solve = 0;
            break;

        case "*":
            solve = Number(firstnum) * Number(thirdnum);
            input.textContent = solve;
            firstnum = "";
            secondnum = undefined;
            thirdnum = "";
            solve = 0;
            break;

        case "/":
            solve = Number(firstnum) / Number(thirdnum);
            input.textContent = solve;
            firstnum = "";
            secondnum = undefined;
            thirdnum = "";
            solve = 0;
            break;

        case "%":
            solve = Number(firstnum) % Number(thirdnum);
            input.textContent = solve;
            firstnum = "";
            secondnum = undefined;
            thirdnum = "";
            solve = 0;
            break;
        default:
            break;
    }
}