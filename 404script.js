  var countdown = document.getElementById("countdown");
  var counter = 10;
  var id;
  id = setInterval(function() {
    counter--;
    if(counter < 1) {
        window.location.href = "index.html";
        clearInterval(id);
    } else {
        document.getElementById("countdown").innerHTML =counter.toString();
        //alert(counter.toString());
        //console.log("hey");
    }
}, 1000);
