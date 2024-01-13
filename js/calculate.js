
function calculate() {
    let total = 0;
    

    let buchung = document.getElementById("buchungszeit").value;
    let service = document.getElementById("service_package").value;

    if(buchung != "dreistunden" && buchung != "zweistunden" && buchung != "einestunde") {
        console.log("Ungültige buchungszeit");
        return; //beendet Funtkion
    }

    if(service != "silber" && service != "gold" && service != "diamant") {
        console.log("Ungültiges servicepaket");
        return; //beendet Funtkion
    }

    if(service == "diamant"){
        total = total + 250;
    } else if(service == "gold"){
        total = total + 160;
    } else if(service == "silber"){
        total = total + 80;
    }

    if(buchung == "einestunde"){
        total = total + 50;
    } else if(buchung == "zweistunden"){
        total = total + 100; 
    } else if(buchung == "dreistunden"){
        total = total + 200;
    }

    console.log(total);
    document.getElementById("total").textContent = "Gesamtbetrag: CHF" + total; 
    document.getElementById("total").value = total;
}

document.getElementById("service_package").addEventListener("change", calculate);
document.getElementById("buchungszeit").addEventListener("change", calculate);



