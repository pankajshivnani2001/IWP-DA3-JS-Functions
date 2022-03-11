function findDateDifference() {
    var firstDateStr = document.getElementById("firstDate").value;
    var secondDateStr = document.getElementById("secondDate").value;

    if(firstDateStr.length == 0)
    {
        alert("Enter the First Date!");
        return;
    }
        
    if(secondDateStr.length == 0)
    {
        alert("Enter the Second Date");
        return;
    }

    var firstDate = new Date(firstDateStr);
    var secondDate = new Date(secondDateStr);

    var diff = Math.abs(firstDate - secondDate);
    
    var numDays = Math.ceil(diff / (24 * 60 * 60 * 1000));

    document.getElementById("result").innerHTML = "Difference Between the Two Dates is:\n"
                                                    + numDays + " Days";
}