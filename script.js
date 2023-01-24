window.onload = function() {

  if (getCookie("bakery") == "") {
    setCookie("bakery", "Bakery");
  }

    document.getElementById("gameTitle").innerHTML = getCookie("bakery");

    if (getCookie("cookieCount") == "") {
      setCookie("cookieCount", 0);
    }

    document.getElementById("cookieCount").innerHTML = getCookie("cookieCount");

    cookies = parseInt(getCookie("cookieCount"));
}

//Change Bakery Name
function changeTitle() {
    let newName = document.getElementById("nameInput").value;
    document.getElementById("gameTitle").innerHTML = newName;
    closePopup();
  
    setCookie("bakery", document.getElementById("nameInput").value);
}

function openPopup() {
    document.getElementById("popupForm").style.display = "block";
  }
function closePopup() {
    document.getElementById("popupForm").style.display = "none";
  }


//Cookie Game stuff
var cookies = 0;
var cps = 0;
var grandmas = 0;

function cookieClicked() {
  document.getElementById("cookie").classList.add("cookieBounceClick");
  
  addCookies(1);
}

function grandmaUpgrade() {
  if (cookies >= 10) {
    cps++;
    grandmas++;
   
    document.getElementById("cpsCount").innerHTML = cps;
    document.getElementById("grandmaCount").innerHTML = grandmas;

    addCookies(-10);
  }  
}



//Cookies functions
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function addCookies(amount) {
  cookies += amount;

  setCookie("cookieCount", cookies);

  document.getElementById("cookieCount").innerHTML = cookies;

  if (cookies == 1) {
    document.getElementById("cookieLabel").innerHTML = "cookie";
  } else document.getElementById("cookieLabel").innerHTML = "cookies";
}