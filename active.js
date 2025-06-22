let cart=JSON.parse(localStorage.getItem('save')) || []

let accumulator=''
cart.forEach(search=>{
  accumulator +=`
  <div class="general">
  <p>${search.name}</p>
  <p>${search.description}</p>
  </div>`
})
document.querySelector('.display').innerHTML=accumulator