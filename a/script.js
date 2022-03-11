function extractSubstr() {
    var text = document.getElementById("text").value;
    var startIdx = parseInt(document.getElementById("startIdx").value);
    var endIdx = parseInt(document.getElementById("endIdx").value);
    console.log(text);

    if(text.length == 0)
    {
        alert("Enter Text!");
        return;
    }
        

    if(startIdx < 0 || startIdx >= text.length)
    {
        alert("Enter Correct Start Index. Start Index Out Of Bounds");
        return;
    }
        

    if(endIdx < 0 || endIdx > text.length || endIdx < startIdx)
    {
        alert("Enter Correct End Index. End Index Out Of Bounds");
        console.log(endIdx);
        return;
    }
        

    var substr = text.substring(startIdx, endIdx);
    document.getElementById("result").innerHTML = "The String Extracted From " + startIdx
                                                    + " and " + endIdx + " indices " + 
                                                    " of the string '" + text + "' is '" +
                                                    substr + "'"; 
}