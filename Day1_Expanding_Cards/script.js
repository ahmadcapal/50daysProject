const panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
panel.addEventListener('click',()=>{

  //call function first to remove active class
  removeActiveClasses()
  panel.classList.add('active')
  })
})

function removeActiveClasses(){
  panels.forEach(panel =>{
      panel.classList.remove('active')
  })
}

