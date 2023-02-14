let mainLogo = document.querySelector('.main-logo');
mainLogo.addEventListener('mouseover' , function(){
  document.querySelector('.aside2').style.display = 'block'

})

mainLogo.addEventListener('mouseout' , function(){
  document.querySelector('.aside2').style.display = 'none'

})
let aside2 = document.querySelector('.aside2')
aside2.addEventListener('mouseover' , function(){
  document.querySelector('.aside2').style.display = 'block'

})

let img = document.querySelector('.logo');
img.addEventListener('mouseover' , function(){
  document.querySelector('.aside').classList.add('active');
})

img.addEventListener('mouseout' , function(){
  document.querySelector('.aside').classList.remove('active');
})

let aside = document.querySelector('.aside');
aside.addEventListener('mouseover' , function(){
  document.querySelector('.aside').classList.add('active');
})

aside.addEventListener('mouseout' , function(){
  document.querySelector('.aside').classList.remove('active');
})


let right = document.querySelector('.main-right img');
right.addEventListener('click' , function(){
 document.querySelector('.main-right img').setAttribute('src' , './image/컴퓨터.webp')
})


right.addEventListener('mouseout' , function(){
 document.querySelector('.main-right img').setAttribute('src' , './image/윈도우.webp')
})

// setInterval(function(){
  
// let time = new Date();
// hr = time.getHours();
// min = time.getMinutes();
// sec = time.getSeconds();


// document.write('<h1>'+hr+':'+min+':'+sec+'</h1>');
// }
// )


