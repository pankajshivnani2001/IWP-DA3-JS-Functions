function extractSubstr() {
    var text = document.getElementById("text").value;
    var startIdx = document.getElementById("startIdx").value;
    var endIdx = document.getElementById("endIdx").value;

    if(text.length == 0)
    {
        alert("Enter Text!");
        return;
    }
        

    if(startIdx < 0 || startIdx >= text.length || startIdx.length == 0)
    {
        alert("Enter Correct Start Index. Start Index Out Of Bounds");
        return;
    }
        

    if(endIdx < 0 || endIdx >= text.length || endIdx < startIdx || endIdx.length == 0)
    {
        alert("Enter Correct End Index. End Index Out Of Bounds");
        return;
    }
        

    var substr = text.substring(startIdx, endIdx);

    document.getElementById("result").innerHTML = "The String Extracted From " + startIdx
                                                    + " and " + endIdx + " indices " + 
                                                    " of the string '" + text + "' is '" +
                                                    substr + "'"; 
}