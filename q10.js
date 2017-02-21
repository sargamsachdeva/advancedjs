function myFunction() {
    var str = document.getElementById("str").value;


    var result = str.split('').filter(function(item, i, allItems) {
        return i == allItems.indexOf(item);
    }).join('');


    var message = document.getElementById("message");
    message.innerHTML = "Removing duplicates:" + result;


}
