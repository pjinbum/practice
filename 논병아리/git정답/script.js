let dropdownMenu = document.querySelector('.dropdown-menu');
let dropdownButton = document.querySelector('.dropdown-button');

dropdownButton.addEventListener('click' , function(){
  //1.toggle
    // dropdownMenu.classList.toggle('active');
  //2.조건문
  if(this.active) {
    dropdownMenu.classList.remove('active')    
  } else {
    dropdownMenu.classList.add('active')   
  }
   
  // this.active : 현재버튼의 활성 상태
  // !this.active : 현재버튼의 활성 상태의 반대값
  //버튼이 비활성 상태라면 활성상태로,
  //활성 상태라면 비활성 상태로 반전 시켜준다.
  this.active = !this.active

});