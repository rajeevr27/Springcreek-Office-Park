function runFunction() {

      const today = new Date();
      let timeZone = today.getTimezoneOffset();
      const springForward = new Date('March 10 2019 02:00:00');
      const fallBack = new Date('November 3 2019 02:00:00');
      const day = today.getDay();
      const  hour = today.getHours();

      if (day == 1 && hour >= 9 && hour < 15 && timeZone == 480 && today < springForward) {
        document.querySelector(".alertbox").style.display="flex";
      } else if (day == 1 && hour >= 9 && hour < 15 && timeZone == 420 && today >= springForward && today < fallBack){
        document.querySelector(".alertbox").style.display="flex";
      } else if (day == 1 && hour >= 9 && hour < 15 && timeZone == 480 && today >= fallBack){
        document.querySelector(".alertbox").style.display="flex";
      } else {
        document.querySelector(".alertbox").style.display="none";
      }

}

if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runFunction);
      } else {
        runFunction();
}
