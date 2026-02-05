document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name||!email||!message){
      status.textContent = 'Please complete the required fields.';return;
    }
    // For demo: we'll simulate send and clear form
    status.textContent = 'Sending…';
    await new Promise(r=>setTimeout(r,900));
    status.textContent = 'Thanks — I will reply within 48 hours.';
    form.reset();
  });
});
