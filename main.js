// Write your JavaScript here
function clickChaChing() {
    console.log('clicked');
    
    
    var due = document.getElementById('amount-due').value * 100;
    
    var received = document.getElementById('amount-received').value * 100;
    
    var total = (received) - (due); 
    
    console.log(due, received, total);
    
    var Ds = Math.floor((total)/100);
    document.getElementById('dollars-output').innerHTML = Ds;
    
    var Qa = Math.floor(((total)-(Ds*100))/25);
    document.getElementById('quarters-output').innerHTML = Qa;
    
    var Di = Math.floor(((total)-(Ds*100)-(Qa*25))/10);
    document.getElementById('dimes-output').innerHTML = Di;
    
    var Ni =  Math.floor(((total)-(Ds*100)-(Qa*25)-(Di*10))/5);
    document.getElementById('nickels-output').innerHTML = Ni;
    
    var Pe =  Math.ceil(((total)-(Ds*100)-(Qa*25)-(Di*10)-(Ni*5))/1);
    document.getElementById('pennies-output').innerHTML = Pe;
    
}