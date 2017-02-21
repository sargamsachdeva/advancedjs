function startTime() {
    var myVar = setInterval(myTimer, 1000);
    var count = 0;

    function myTimer() {
        count++;
        if (count < 7200) //7200 for two hours
        {
            var d = new Date();
            document.getElementById("message").innerHTML = d.toLocaleTimeString();
        } else {
            clearTimeout(myVar);
            alert("Your service has completed");
        }

    }
}
