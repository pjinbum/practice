let dark = document.querySelector('.dark');
dark.addEventListener('click' , function(){
  document.querySelector('.wrapper').classList.toggle('on');
})

dark.addEventListener('click' , function(){
  document.querySelector('.center>div:nth-child(1)').classList.toggle('on');
})

dark.addEventListener('click' , function(){
  document.querySelector(' .center>div:nth-child(2)').classList.toggle('on');
})



// dark.addEventListener('click' , function(){
//   document.querySelector('.logo img').classList.toggle('on');
// })

// if(this.active) {
//   dropdownMenu.classList.remove('active')    
// } else {
//   dropdownMenu.classList.add('active')   
// }




// dark.addEventListener('click' , function(){
//   document.querySelector('.logo img').setAttribute('src' , './image/logo-light.png');

// })



// 
 let intext = document.querySelector('.intext')
if(intext.minlength > 0){
  document.querySelector('.btn-log').style('background-color' , 'blue')
}

