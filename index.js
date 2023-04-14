let reply = document.querySelectorAll('#qnImg');
let i;

for(i = 0; i < reply.length; i++){
  reply[i].addEventListener('click', function(){
    this.classList.toggle('active');
    let body = this.nextElementSibling;
    if(body.style.display === 'block') {
      body.style.display = 'none'
    } else{
      body.style.display = 'block'
    }
  })
}