function myFunction() {
    var checkBox = document.getElementById("shipping-address");
    var text = document.getElementById("shipping-address");
    if (checkBox.checked == true){
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  }
