function chkUser() {
    //Get the username field. If its empty, nothing to do
    usr = document.getElementById("usr");

    if (usr.value == "") {
        alert("Nothing to check");
        return;
    }

    helper = document.getElementById("helper");
    helper.src = "http://localhost/test.php?uid=" + usr.value;

    // To do a POST request VIA the iframe, set a "name" attribute on the iframe.
    // Then in the main window, have a <form> element and set the "target" attribute
    // to the name of the iframe. The markup below DOES NOT have a <form> since 
    // we are doing a GET.
}

function setStat(status) {
    sp = document.getElementById("pwd");
    sp.value = status.split(";")[1];
    sp.style.fontStyle = "italic";
    sp.style.color = "red";

    usr.value = status.split(";")[0];
}