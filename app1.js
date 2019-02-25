document.addEventListener('DOMContentLoaded', ()=> {

  const today = new Date();
  const day = today.getDay();
  const  hour = today.getHours();

  if (day == 1 && hour >= 9 && hour < 15) {
    document.querySelector(".alertbox").style.display="flex";
      } else {
    document.querySelector(".alertbox").style.display="none";
  }

  const close = document.querySelector(".closebutton");

  close.addEventListener("click", function(){
      const content = this.parentElement;
      if (content.style.display = "flex"){
          content.style.display = "none";
      } else {
          content.style.display = "flex"
      }
  });

});
