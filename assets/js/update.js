
let runScripts = () => {
    let chart_bars = document.getElementById("chart_bars");
    console.log(chart_bars);
    let icons = document.getElementsByTagName("i");
    console.log(icons);
    let cards = document.getElementsByClassName("card");
    console.log(cards);
};

let modifyText = () => {
    let listOfp = document.getElementsByTagName("p");
    let elementP = listOfp[3];
    elementP.innerHTML = "Dinero Actual";
    elementP = listOfp[5];
    elementP.innerHTML = "Usuarios de Hoy";
    elementP = listOfp[7];
    elementP.innerHTML = "Nuevos Clientes";
    elementP = listOfp[9];
    elementP.innerHTML = "Ventas";

    let listOfH4 = document.getElementsByTagName("h4");
    let elementH4 = listOfH4[0];
    elementH4.innerHTML = "$301K";
};

runScripts();
modifyText();
