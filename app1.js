document.addEventListener('DOMContentLoaded', ()=> {

  const today = new Date();
  const day = today.getDay();
  const  hour = today.getHours();

  if (day == 1 && hour >= 9 && hour < 15) {

        document.querySelector(".alertbox").style.display="flex";

        } else {

        document.querySelector(".alertbox").style.display="none";
  }

        }

});
