function parseJSON(text) {
	try {return JSON.parse(text);}
	catch (e) {return null;}
}


function request() {

  	let xhr = new XMLHttpRequest();
    xhr.onerror = function () { alert('Anwendungsfehler: Anfrage kann nicht gesendet werden'); }
    xhr.timeout = function () { alert('Anwendungsfehler: Zeitüberschreitung'); }
    xhr.onload = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                let response = parseJSON(xhr.responseText);
                if (response !== null) {
                    	let out = document.getElementById('outputResult');
    									out.innerText = response;
                } else {
                    alert('Anwendungsfehler: Backend-Antwort konnte nicht validiert werdenn');
                }
            } else {
                alert('Anwendungsfehler: Backend-Antwort fehlerhaft. Statuscode: ' + xhr.status);
            }
        }
    }

    // Request mit Daten aus form
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let desired_date = document.getElementById('desired_date').value;
    let total = document.getElementById('total').value;
    
    let request = { "firstname": firstname, "lastname": lastname, "email": email, "total": total, "desired_date": desired_date };
  
    // Senden Json an backend
    xhr.open('POST', 'backend.php', true);
    xhr.send(JSON.stringify(request)); 
     
}





// Fehleranzeige für validate
function errorString(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
    
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let total = document.getElementById('total').value;
    let desired_date = document.getElementById('desired_date').value;
  	
    
    
	// Definition von Fehlervariabeln mit Standardwert
    let firstnameErr = lastnameErr = emailErr = desired_dateErr = totalErr = true;
    
    
    if(firstname == "") {
        errorString("firstnameErr", "Bitte Vorname eingeben");
    } else {
        errorString("firstnameErr", "");
        firstnameErr = false;   
    }
    
    
    if(lastname == "") {
        errorString("lastnameErr", "Bitte Nachname eingeben");
    } else {
            errorString("lastnameErr", "");
            lastnameErr = false;
    }
    
    
    if(email == "") {
        errorString("emailErr", "Bitte Email eingeben");
    } else {
        let regex = /^[\w-\.\']{1,}\@([\da-zA-Z\-]{1,}\.){1,}[\da-zA-Z\-]{2,}$/;
        if(regex.test(email) === false) {
            errorString("emailErr", "Eingabe für Email ungültig");
        } else{
            errorString("emailErr", "");
            emailErr = false;
        }
    }
    

    if(!desired_date) {
        errorString("desired_dateErr", "Bitte Wünschtermin eingeben");
    } else {
            errorString("desired_dateErr", "");
            desired_dateErr = false;
    }
    
    
    if(total == "") {
        errorString("totalErr", "Bitte Sercivepacket auswählen");
    } else {
            errorString("totalErr", "");
            totalErr = false; 
    }
    

    // Verhindern Absenden des Formulars bei Fehler
    if((firstnameErr || lastnameErr || emailErr || desired_dateErr || totalErr) == true) {
        return false;
    }
    else {
        request();	
    }
   
    

}






