import data from "../../data.json" assert {type:"json"};

let chartcontainer = document.querySelector(".chart");
let currentday = new Date();

for (let i = 0; i < data.length; i++) {
    let daycontainer = document.createElement("div");
    let amount = document.createElement("p");
    let daychart = document.createElement("div");
    let day = document.createElement("p");

    amount.innerText = "$" + data[i].amount;
    amount.classList.add("amounttext");

    daychart.style.height = (data[i].amount)*2.75 + "px";
    if (i === currentday.getUTCDay() - 1) {
        daychart.classList.add("currentday");
    }

    day.innerText = data[i].day;
    day.classList.add("daytext");

    daycontainer.appendChild(day);
    daycontainer.appendChild(daychart);
    daycontainer.appendChild(amount);
    chartcontainer.appendChild(daycontainer);
}