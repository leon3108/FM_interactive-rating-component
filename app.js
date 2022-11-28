let value = null;

function handleClick() {
    const rating = document.querySelector("#rating");
    const thank = document.querySelector("#thank");
    rating.style.display = "none";
    thank.style.display = "flex";

    const text = document.getElementById("text");
    text.innerHTML = "You selected " + value + " out of 5";
}

document.getElementById("button_submit").addEventListener("click", function(event){
    event.preventDefault()
  });


function changeValue(id) {
    value = id;
}