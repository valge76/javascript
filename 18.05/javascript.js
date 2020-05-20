console.log("Töötab");

function validateForm(e) {
    e.preventDefault();
    var eesnimi = document.forms["vorm"]["eesnimi"].value;
    if (eesnimi == "") {
        document.getElementById("eesnimiViga").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("eesnimiViga").style.visibility = "hidden";
            localStorage.setItem('eesnimi', eesnimi);
       
    }
    var perekonnanimi = document.forms["vorm"]["perekonnanimi"].value;
    if (eesnimi == "") {
        document.getElementById("perekonnanimiViga").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("perekonnanimiViga").style.visibility = "hidden";
            localStorage.setItem('perekonnanimi', perekonnanimi);
       
    }

    
    var perekonnanimi = document.forms["vorm"]["perekonnanimi"].value;
    var email = document.forms["vorm"]["email"].value;
    if (email == "") {
        document.getElementById("emailViga").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("emailViga").style.visibility = "hidden";
            localStorage.setItem('email', email);
       
    }
    var telefoninumber = document.forms["vorm"]["telefoninumber"].value;
    if (telefoninumber == "") {
        document.getElementById("telefoninumberViga").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("telefoninumberViga").style.visibility = "hidden";
            localStorage.setItem('telefoninumber', telefoninumber);
    
    
    window.location.href = "ylevaatus.html";
}
    function saaAndmed() {
    eesnimi = localStorage.getItem('eesnimi')
    var ylevaatusEEsnimi = document.getElementById('ylevaatusEesnimi');
    ylevaatusEEsnimi.innerHTML = eesnimi;
    
    }
    

function saadaVorm() {
    window.location.href = "kodu.html";
}