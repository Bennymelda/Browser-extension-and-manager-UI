

let array = [
  { id:1,
    name:'Dev lens', description:'quickly inspect page layout and visualize element boundaries' },
  { id:2,
    name:'JSONWizard', description:'format validate and prettifies Json response in browser' },
  { id:3,
    name:'Markup Note', description:'Enables annotation and note directly onto webpage for collabrative debugging.' },
  { id:4,
    name:'Linkchecker', description:'Scans and highlight broken links on page' },
  { id:5,
    name:'StyleSpy', description:'instantly analyze and copy css from any webpage element' },
  { id:6,
    name:'TabMaster pro', description:'Organize browser tabs into group and session.' },
  {id:7,
    name:'GridGuides', description:'overlay customizable grid and alignment guides on any webpage' },
  { id:8,
    name:'DOM Snapchat', description:'Capture and export dom structure quicky' },
  { id:9,
    name:'SpeedBoast', description:'Optimizes browers resources usage to accelerate page loading' },
  { id:10,
    name:'ViewPortBuddy', description:'Stimulate various screen resolutions directly within the browser' },
  { id:11,
    name:'Palette Picker', description:'Instantly extracts color palette from any web page' },
  {id:12,
    name:'ConsolePlus', description:'Enhance developer console with advanced filtering and logging.' }
];
       
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000); // Hide after 3 seconds
}

function render(){
  let result = '';
  array.forEach((item, index)=>{
    result += `
      <div class="general">
        <div>
          <p><strong>${item.name}</strong></p>
          <p>${item.description}</p>
        </div>
        <div class="flex">
          <button data-index="${index}">Remove</button>
          <input type="checkbox" data-name="${item.name}" data-description="${item.description}"
          data-id =${item.id}
          >
        </div>
      </div>
    `;
  });

  document.querySelector('.display').innerHTML = result;
  

let cart=JSON.parse(localStorage.getItem('save')) || []

  // Add toggle logic
  document.querySelectorAll('input[type="checkbox"]').forEach(items => {
    items.addEventListener('change', () => {
      let object = {
        name: items.dataset.name,
        description: items.dataset.description,
        id: items.dataset.id
      };

      if (items.checked ) {
        let existing =cart.find(item => item.id === object.id)
        showToast('Extension activated');
        if(!existing){
          cart.push(object);
        }
       localStorage.setItem('save', JSON.stringify(cart));
      } else {
        
        cart= cart.filter(item=> item.name !== object.name)
        localStorage.setItem('save', JSON.stringify(cart));
        
        
      }
      
    });
  });
  
  // Remove button logic
  document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      let index = Number(button.dataset.index);
      array.splice(index, 1);
      render()
    });
  });
}
render()
