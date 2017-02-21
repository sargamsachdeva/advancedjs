function myFunction() {
    var str = document.getElementById("str").value;
    var result = str.replace(/\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    var message = document.getElementById("message");
    message.innerHTML = "String after capitalise the first letter of each word:" + result;
}
