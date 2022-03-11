function findExistence() {
    var text = document.getElementById("text").value;
    var regexStr = document.getElementById("regex").value;

    if(text.length == 0)
    {
        alert("Fill the Text Field!");
        return;
    }

    if(regexStr.length == 0)
    {
        alert("Fill the Regular Expression Field!");
        return;
    }

    try {
        var regex = new RegExp(regexStr);
        var matchFound = regex.test(text);
        if(matchFound)
        {
            document.getElementById('result').innerHTML = "Match Found" + "<br>";
            document.getElementById('result').innerHTML += text.replace(regex, (match) => `<div id='mark'>${match}</div>`);
        }
        else
            document.getElementById('result').innerHTML = "Match Not Found";

    }
    catch{
        alert("Invalid Regex");
    }
}