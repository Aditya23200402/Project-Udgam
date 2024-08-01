ScrollReveal({
    reset: true,
    // distance: '60px ',
    duration: 2500,
    delay:400
});

ScrollReveal().reveal('.description', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.login', {delay: 1000, origin: 'bottom'});

// hover effect for button
const butt1 = document.querySelector('.btn1')

butt1.addEventListener('mouseover',() =>{
    butt1.style.backgroundColor = 'white';
    butt1.style.border = '2px solid rgb(67, 131, 250)';
})

butt1.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    butt1.style.backgroundColor = '';
  });

const a1 = document.querySelector('.a1')
a1.addEventListener('mouseover', () =>{
    a1.style.color = 'rgb(67, 131, 250)'
});
a1.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    a1.style.color = '';
  });

  //hover on button 2
  const butt2 = document.querySelector('.btn2')

butt2.addEventListener('mouseover',() =>{
    butt2.style.backgroundColor = 'white';
    butt2.style.border = '2px solid rgb(67, 131, 250)';
})

butt2.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    butt2.style.backgroundColor = '';
  });

const a2 = document.querySelector('.a2')
a2.addEventListener('mouseover', () =>{
    a2.style.color = 'rgb(67, 131, 250)'
});
a2.addEventListener('mouseout', () => {
    // Change the button's background color back to its original color
    a2.style.color = '';
  });


  const butt3 = document.querySelector('.btn3')

  butt3.addEventListener('mouseover',() =>{
      butt3.style.backgroundColor = 'white';
      butt3.style.border = '2px solid rgb(67, 131, 250)';
  })
  
  butt3.addEventListener('mouseout', () => {
      // Change the button's background color back to its original color
      butt3.style.backgroundColor = '';
    });
  
  const a3 = document.querySelector('.a3')
  a3.addEventListener('mouseover', () =>{
      a3.style.color = 'rgb(67, 131, 250)'
  });
  a3.addEventListener('mouseout', () => {
      // Change the button's background color back to its original color
      a3.style.color = '';
    });
  
