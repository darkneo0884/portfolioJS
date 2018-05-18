let days = 1;
let hours = 23;
let minutes = 27;
let seconds = 0;
let lblDays: HTMLLabelElement = document.getElementById('lblDays');
let lblHours: HTMLLabelElement = document.getElementById('lblHours');
let lblMinutes: HTMLLabelElement = document.getElementById('lblMinutes');
let lblSeconds: HTMLLabelElement = document.getElementById('lblSeconds');

lblDays.innerHTML ="1";
lblHours.innerHTML = "23";
lblMinutes.innerHTML = "27";
lblSeconds.innerHTML = "0";


let TimerCounter = ()=>{
  //show/hide panels
      let divTimer = HTMLDivElement = document.getElementById('divTimer');
      divTimer.style.display= "table";

      let divCoin = HTMLDivElement = document.getElementById('divCoinFlip');
      divCoin.style.display= "none";



  let timer = setInterval(()=> {
    if(seconds <= 59){
    //change seconds
    lblSeconds.innerHTML = seconds.toString();
    seconds++;
  }else{
  seconds = 0;
  lblSeconds.innerHTML = seconds.toString();

  //Change minutes
    if(minutes <= 59){
      minutes++;
      lblMinutes.innerHTML = minutes.toString();
    }else{
      minutes  =0;
        lblMinutes.innerHTML = minutes.toString();
  //change hours
        if(hours <= 24){
            hours++;
            lblHours.innerHTML = hours.toString();
        }else{
            hours = 0;
            lblHours.innerHTML = hours.toString();
            //change days
            days++;
            lblDays.innerHTML = days.toString();
        }
    }

  }},1000);


}
