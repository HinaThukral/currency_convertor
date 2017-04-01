function getConversionRate(){
var url='https://api.fixer.io/latest?base=';
var base=document.getElementById("currency1").value;
var currency2=document.getElementById("currency2").value;
 console.log(base +  currency2);


 fetch(`${url}${base}`)
    .then((res) => res.json())
    
    .then(function (data){
      var todayRate = data.rates[currency2];
      var a=document.getElementById("conversionRate").value;
      var final=console.log(todayRate * a);
      document.currentform.output.value = todayRate * a;
      })
      
     
    .catch((e) => console.log(`${e} something is donkin' up your wiz biz`))
}
    
    
    



