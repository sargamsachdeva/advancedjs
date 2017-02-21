function publish(item, author, callback) {
    console.log(item);
    var date = new Date();

    callback(author, date);
}

function msg(author, time) { // Callback function
    var sendTime = time.toLocaleTimeString();
    console.log("Sent from " + author + " at " + sendTime);

}

function print(author, date) { // Callback function
    var pubDate = date.toDateString();
    console.log("Written by " + author);
    console.log("Published " + pubDate);
}

publish("Hello", "javascript", msg);

publish("JavaScript Developers", "ABC", print);
