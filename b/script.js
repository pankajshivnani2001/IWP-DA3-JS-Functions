function replaceSubstr() { 
    var text = document.getElementById("text").value;
    var textToReplace = document.getElementById("textToReplace").value;
    var replacementStr = document.getElementById("replacementStr").value;

    if(text.length == 0)
    {
        alert("Fill the Text Field!");
        return;
    }

    if(textToReplace.length == 0)
    {
        alert("Fill the Text To Replace Field!");
        return;
    }

    if(replacementStr.length == 0)
    {
        alert("Fill the Replacement String Field!");
        return;
    }

    var result;
    
    if(document.getElementById("first").checked)
        result = text.replace(textToReplace, replacementStr);
    else if(document.getElementById("all").checked)
        result = text.replaceAll(textToReplace, replacementStr);
    else {
        alert("Choose an Option from the radio buttons");
        return;
    }

    document.getElementById("result").innerHTML = result;
    
}