var obj = {
    getElectives: function () {
        var dep = document.getElementById("dept");

        if (dep.value == "") {
            alert("Please enter a department");
            return;
        } else {
            //Get the helper frame
            var helper = document.getElementById("ifr");

            //Force a GET request to the server
            helper.src = "http://localhost/getelectives.php?dept=" + dep.value;

        }
    },

    populateElectives: function (electives) {
        //The returned string is "," separated
        //0th element is the dept. The others
        // are the electives

        var retArr = electives.split(",");

        document.getElementById("dept").value = retArr[0];

        //Loop through the electives 
        var sel = document.getElementById("el");
        sel.innerHTML = "";

        for (var j = 1; j < retArr.length; j++) {
            var opt = document.createElement("option");
            opt.innerHTML = retArr[j];
            sel.appendChild(opt);
        }
    }
};