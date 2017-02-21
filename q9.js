function myFunction() {
    var str = document.getElementById("str").value;
    var count = {};
    var max = '';
    for (var i = 0; i < str.length; i++) {
        var key = str[i];
        if (!count[key]) {
            count[key] = 0;
        }
        count[key]++;
        if (max == '' || count[key] > count[max]) {
            max = key;
        }
    }
    var message = document.getElementById("message");
    message.innerHTML = "Highest occured character is:" + max;
}
