let button_1 = document.querySelector('.button_1');
let input_0 = document.querySelector('.input_0');
let input_1 = document.querySelector('.input_1');
const p = 3.14;


        button_1.onclick = function(){
  
    let b = +input_0.value;
    let a = +input_1.value;
    let c = (a+b)*p
  
    if( Number.isNaN(c)){
        document.querySelector('.tab_1').innerHTML = "Не число";
    }
    else{
        document.querySelector('.tab_1').innerHTML = c.toFixed(2);

    }
   
}
let silverButtonLig = document.querySelector('.silverButtonLig');

    silverButtonLig.onclick = function(){
        let silverInput = document.querySelector('.silverInput').value;
        let SilverOut = +(silverInput*7.5)/92.5
       
        console.log("lol");
        document.querySelector('.SilverOut').innerHTML = SilverOut.toFixed(2)
        

    }
    
