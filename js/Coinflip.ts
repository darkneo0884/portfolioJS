let max:number;
let last:number;


let CoinFlip =() => {  //show/hide panels
      let divTimer = HTMLDivElement = document.getElementById('divTimer');
      divTimer.style.display= "none";

      let divCoin = HTMLDivElement = document.getElementById('divCoinFlip');
      divCoin.style.display= "table";
    }

let Flip=(n:number)=>{

  if(n > 0 && n <= 100000){
    SimpleRandom(n);
   let lblRandomLabel = HTMLLabelElement = document.getElementById('lblRandomResult');
    lblRandomLabel.innerHTML = "Random number is: " + nextInt().toString();

  }else{
    alert("Can't generate random number");
  }
}


let SimpleRandom=(x:number)=>{
  max = x;
   last = (Date.now() % max);
}

let nextInt=()=>{
  last = (last * 32719 + 3) % 32749;
     return last % max;
}
