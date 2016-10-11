  var countdown = document.getElementById("countdown");
  var counter = 10;
  var id;
  id = setInterval(function() {
    counter--;
    if(counter < 1) {
        window.location.href = "http://kristopherrollert.com";
        clearInterval(id);
    } else {
        document.getElementById("countdown").innerHTML =counter.toString();
    }
}, 1000);
