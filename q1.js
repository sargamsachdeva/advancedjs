function myFunction() {
    var message;
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var contact = document.getElementById("contact").value;
    var dob = document.getElementById("dob").value;
    message = document.getElementById("message");
    message.innerHTML = "";
    var letters = /^[a-zA-Z]+$/;

    try {
        if (!fname.match(letters))
            throw "Enter valid first name";

        if (!lname.match(letters))
            throw "Enter valid last name";

        //if(!contact.match(/^[0-9]+$/) && (contact.length != 10))
        if (!contact.match(/^\d{10}$/))
            throw "Enter valid contact number";

        var myDateStr = new Date(dob);

        if (!isNaN(myDateStr.getMonth())) {
            console.log("Valid date");
        } else {
            throw ("Invalid date");
        }

    } catch (err) {
        message.innerHTML = err;
    }

}
