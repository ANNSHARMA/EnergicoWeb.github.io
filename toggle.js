
let humburg = document.querySelector('.menu');
let show = document.querySelector('.side');
let Content =document.querySelector('.content');

humburg.addEventListener('click', function(){
  if(humburg.firstElementChild.classList.contains('fa-bars')){
    humburg.firstElementChild.classList.replace('fa-bars', 'fa-times')
  }else{
 humburg.firstElementChild.classList.replace('fa-times', 'fa-bars')
  }

  show.classList.toggle('hidden')

})

// humburg.addEventListener('click', function(){
//   show.style.display = 'flex'
// })
