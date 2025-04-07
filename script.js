const form=document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#results');
  if(height===''|| height<0 || isNaN(height)){
    result.innerHTML=`Please give a valid height${height}`;

  }
  else if(weight===''|| weight<0|| isNaN(weight)){
    result.innerHTML=`Please give a weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.5){
      result.innerHTML=`${bmi}<br>Oops! you are under weight`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
      result.innerHTML=`${bmi}<br> you are in the normal weight range`;
    }
    else{
      result.innerHTML=`${bmi}<br> Warning! you are in the obese range`;
    }
  }
})