jsonarr = {};
n = 2;

var obj = {
    xhr: new XMLHttpRequest(),

    // Send request to get JSON from index.php
    getJSON : function() {
        this.xhr.onreadystatechange = this.updateMatrix;
        this.xhr.timeout = 5000;
        this.xhr.ontimeout = this.backoff;
        this.xhr.open("GET", "index.php?jsonarr="+JSON.stringify(jsonarr), true);
        this.xhr.send();
    },

    // Update matrix upon successful JSON retrieval
    updateMatrix: function() {
        if(this.readyState == 4 && this.status == 200) {
            response = this.responseText;
            parsedJSON = JSON.parse(response);
            cse = document.getElementById("cse-count");
            ece = document.getElementById("ece-count");
            me = document.getElementById("me-count");
            bt = document.getElementById("bt-count");
            cse.innerHTML = parsedJSON.CSE;
            ece.innerHTML = parsedJSON.ECE;
            me.innerHTML = parsedJSON.ME;
            bt.innerHTML = parsedJSON.BT;
            setTimeout(this.getJSON, 5000);
        }
    },

    // Decrement department seat count triggered upon 'submit' click
    decrementSeatCount: function() {
        var dropdownSelection = document.getElementById("dropdown");
        if (dropdownSelection.value == 'CSE') {
            cse.innerHTML--;
        }
        else if(dropdownSelection.value == 'ECE') {
            ece.innerHTML--;
        }
        else if(dropdownSelection.value == 'ME') {
            me.innerHTML--;
        }
        else if(dropdownSelection.value == 'BT') {
            bt.innerHTML--;
        }
        jsonarr = {'CSE': cse.innerHTML, 'ECE': ece.innerHTML, 'ME': me.innerHTML, 'BT': bt.innerHTML};
        this.getJSON();
    },

    // Throttle request timeout
    backoff: function() {
        console.log("Looks like we have failed!!!");
        setTimeout(this.getJSON, 2*n*1000);
        n=n*2;
        console.log("The value of n is"+ n);
    }
}