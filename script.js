let values = ["😎", "😁", "😍", "😂", "😭", "❤️", "😰", "🤢"];
let refreshIntervalId_1, refreshIntervalId_2, refreshIntervalId_3;
var styleElementTrue = document.createElement("style");
var styleElementFalse = document.createElement("style");


function ranEmoji() {
    let randomEomji = values[Math.floor(Math.random() * 7)];
    return randomEomji;
}

styleElementTrue.textContent = `
    @keyframes moveEmoji {
        0% {
            transform: translateY(-200px);
        }
        100% {
            transform: translateY(200px);
        }
    }
`;
styleElementFalse.textContent = `
    @keyframes moveEmoji {
        0% {
            transform: translateY(-200px);
        }
        50%{
            transform: translateY(-100px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`;

function toRoll(value) {
    if (value === true) {
        let newCSS_1 = document.getElementById('value1');
        let newCSS_2 = document.getElementById('value2');
        let newCSS_3 = document.getElementById('value3');
        newCSS_1.setAttribute(
            "style",
            "animation: moveEmoji; animation-iteration-count: infinite; animation-duration: 1s"
        );
        newCSS_2.setAttribute(
            "style",
            "animation: moveEmoji; animation-iteration-count: infinite; animation-duration: 1s"
        );
        newCSS_3.setAttribute(
            "style",
            "animation: moveEmoji; animation-iteration-count: infinite; animation-duration: 1s"
        );
        refreshIntervalId_1 = setInterval(function getEmoji_1() {
            document.getElementById('value1').innerText = ranEmoji();
        }, 1000);
        refreshIntervalId_2 = setInterval(function getEmoji_2() {
            document.getElementById('value2').innerText = ranEmoji();
        }, 800);
        refreshIntervalId_3 = setInterval(function getEmoji_3() {
            document.getElementById('value3').innerText = ranEmoji();
        }, 1200);
    }
    if (value === false) {
        document.getElementById('value1').removeAttribute("style");
        document.getElementById('value2').removeAttribute("style");
        document.getElementById('value3').removeAttribute("style");
        clearInterval(refreshIntervalId_1);
        clearInterval(refreshIntervalId_2);
        clearInterval(refreshIntervalId_3);
        let newCSS_1 = document.getElementById('value1');
        let newCSS_2 = document.getElementById('value2');
        let newCSS_3 = document.getElementById('value3');
        newCSS_1.setAttribute(
            "style",
            "animation: moveEmoji; animation-iteration-count: 1; animation-duration: 5s"
        );
        newCSS_2.setAttribute(
            "style",
            "animation: moveEmoji; animation-iteration-count: 1; animation-duration: 5s"
        );
        newCSS_3.setAttribute(
            "style",
            "animation: moveEmoji; animation-iteration-count: 1; animation-duration: 5s"
        );
        if ((document.getElementById('value1').innerText === document.getElementById('value2').innerText) && (document.getElementById('value2').innerText === document.getElementById('value3').innerText)) {
            let winMessage = document.createElement('div');
            winMessage.innerText = 'You Win';
            winMessage.style.fontSize = '24pt';
            winMessage.style.color = 'green';
            winMessage.style.textAlign = 'center';
            winMessage.style.zIndex = '10';
            document.body.append(winMessage);
        }else
        {
            let loseMessage = document.createElement('div');
            loseMessage.innerText = 'You Lose';
            loseMessage.style.fontSize = '24pt';
            loseMessage.style.color = 'red';
            loseMessage.style.textAlign = 'center';
            loseMessage.style.zIndex = '10';
            document.body.append(loseMessage);
        }

    }
}

