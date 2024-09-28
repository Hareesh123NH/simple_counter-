let count = 0;
const countElement = document.getElementById("count");
const errorElement = document.getElementById("error");
const clearButton = document.getElementById("clear");

document.getElementById("increment").addEventListener("click", function() {
    count++;
    errorElement.style.display = "none"; 
    updateUI();
});

document.getElementById("decrement").addEventListener("click", function() { 
    if (count > 0) {
        count--;
        errorElement.style.display = "none";
    } else {
        errorElement.style.display = "block";
    }
    updateUI();
});

clearButton.addEventListener("click", function() {
    count = 0;
    updateUI();
});

function updateUI() {
    countElement.innerHTML = count;
    clearButton.style.display = count > 0 ? "block" : "none";
}

