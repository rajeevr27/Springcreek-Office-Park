//Alert Message Box

function runFunction() {

      const today = new Date();
      let timeZone = today.getTimezoneOffset();
      const day = today.getDay();
      const  hour = today.getHours();

      if (day == 1 && hour >= 9 && hour < 15 && timeZone == 480) {
        document.querySelector(".alertbox").style.display="flex";
      } else if (day == 1 && hour >= 9 && hour < 15 && timeZone == 420){
        document.querySelector(".alertbox").style.display="flex";
      } else {
        document.querySelector(".alertbox").style.display="none";
      }

      const close = document.querySelector(".closebutton");

      close.addEventListener("click", function(){//Start of close addEventListener
      const content = this.parentElement;
      if (content.style.display = "flex"){
          content.style.display = "none";
      }

      });//End of close addEventListener

    }//End of runFunction

  if (document.readyState === "loading") {//Loading is pending
        document.addEventListener("DOMContentLoaded", runFunction);
        } else {//`DOMContentLoaded` is finished
        runFunction();
        }
