// Custom function
function calculateTip() {
    
    // Store the data of the inputs
    const billAmount = document.getElementById("billAmount").value;
    const serviceQuality = document.getElementById("serviceQuality").value;
    const numPeople = document.getElementById("totalPeople").value;

    // Quick validation
    if(billAmount==="" || serviceQuality == 0){
    alert("Please enter some numbers to get the tip amount!");
    return; // this will prevent the function from continuing
}