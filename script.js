function changeTitle() {
    let newName = document.getElementById("nameInput");

    document.getElementById("gameTitle").innerHTML = newName;
}

function openPopup() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closePopup() {
    document.getElementById("popupForm").style.display = "none";
  }