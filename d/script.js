function reverseArray() { 
    var arrLength = document.getElementById("length").value;
    var arrayInput = document.getElementById("array").value;

    if(arrLength.length == 0)
    {
        alert("Enter the Array Length!");
        return;
    }

    if(arrayInput.length == 0)
    {
        alert("Enter the Array!");
        return;
    }

    var array = arrayInput.split(",");
    
    if(array.length != arrLength)
    {
        alert("The Entered Array is not of correct length. Make sure the entered length and array length match!")
        return;
    }
    array.reverse();

    document.getElementById("result").innerHTML = "The Reversed Array is:";
    
    array.forEach(element => {
        document.getElementById("result").innerHTML += (" " + element + ",");
    });

    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(0,-1);
}