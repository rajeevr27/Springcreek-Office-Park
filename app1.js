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

  close.onclick = function(){
      const div = this.parentElement;
      div.style.transform = "translateY(-70px)";
      div.style.zIndex = "-1";
      div.style.transition = "all 2s";
      div.style.opacity = "0";
      setTimeout(function(){ div.style.display = "none"; }, 1300);
    }
});
