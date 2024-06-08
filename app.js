var feet=document.getElementById('feet');
var inch=document.getElementById('inch');

feet.addEventListener('input',function(){
  let f=feet.value;
  let i=12*f;
  inch.value=i;
})
inch.addEventListener('input',function(){
  let i=inch.value;
  let f=i/12;
  feet.value=f;
})

