var list = document.getElementById("list");
var typing = document.getElementById("typing");
var inputField = document.getElementById("input");

function sendMessage() {
    if (event.keyCode === 13 || event.type === "click") {
        var value = inputField.value;
        list.innerHTML += "<li class='left-li'>" + value + "</li>"
        typing.style.display = "block"

        if (["hello", "hy", "hi", "salam", "assalamualaikum", "oye", "listen", "suno"].indexOf(value.toLowerCase()) !== -1) {
            setTimeout(function () {
                list.innerHTML += "<li class='right-li'>" + 'Hello, Welcome to SMIT Chatbot' + "</li>"
            }, 2000)
            setTimeout(function () {
                typing.style.display = "none"
                list.innerHTML += "<li class='right-li'>" + "kese ho?" + "</li>"
            }, 3000)
        }

        else if (["me thik", "thik", "alhamdulillah", "allah ka sukar", "fit", "me thik hoo", "theek"].indexOf(value.toLowerCase()) !== -1) {
            setTimeout(function () {
                typing.style.display = "none"
                list.innerHTML += "<li class='right-li'>" + "Me apki addmission k hawale se kya madad kr sakta ho?" + "</li>"
            }, 2000)
        }

        else if (["mujhe addmission krna h", "mujhe addmission lena h", "addmission lena h", "mujhe addmission chaiyen", "addmission chaiyen", "smit me addmission lena h", "smit me addmission chaiyen"].indexOf(value.toLowerCase()) !== -1) {
            setTimeout(function () {
                typing.style.display = "none"
                list.innerHTML += "<li class='right-li'>" + "Apko konse course me addmission lena h" + "</li>"
            }, 2000)
        }

        else if (["web development", "graphic designing", "web and mobile app application", "Artificial", "3d animation", "python", "gen ai chatbot"].indexOf(value.toLowerCase()) !== -1) {
            setTimeout(function () {
                typing.style.display = "none"
                list.innerHTML += "<li class='right-li'>" + "Apni education bataen" + "</li>"
            }, 2000)
        }

        else if (["matric", "enter", "inter", "graduate", "intermediate"].indexOf(value.toLowerCase()) !== -1) {
            setTimeout(function () {
                typing.style.display = "none"
                list.innerHTML += "<li class='right-li'>" + "Thik h. Apna phone number batayen!" + "</li>"
            }, 2000)
        }

        else if (!isNaN(value) && value.length === 11) {
            setTimeout(function () {
                typing.style.display = "none"
                list.innerHTML += "<li class='right-li'>" + "Thik h hum apse rabata krte h" + "</li>"
            }, 2000)
        }
        else {
            setTimeout(function () {
                typing.style.display = "none"
                list.innerHTML += "<li class='right-li'>" + "Sorry me apki baat samjh nh sakha?" + "</li>"
            }, 2000)
        }

        inputField.value = ""
    }
}