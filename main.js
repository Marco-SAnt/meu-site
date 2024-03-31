/* Active Work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click',activeWork));

/*========== Contact Form ==========*/
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  Message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // verifique se o campo tem um valor
  if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
  // add e remove cor
   contactMessage.classList.remove('color-light');
   contactMessage.classList.add('color-dark');

   // mostra mensagem
   contactMessage.textContent = 'Write all the input fields';
  } else {
    // serviceID - templateid - #form - publickey
    emailjs.sendForm('service_ookjed2','template_dru5glj','#contact-form','H6hye7ur-TWXUqwVK')
    .then(() => {
      // mostra mensagem e add cor
      contactMessage.classList.add('color-light');
      contactMessage.textContent = 'Message sent ';

      // remove mensagem apos 5s
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);
    },
    (error) => {
      alert('OOPs! SOMETHING WENT WRONG...', error);
    }
    );

    // limpa os campos de entrada
    contactName.value = '';
    contactEmail.value = '';
    Message.value = '';
  }
};

contactForm.addEventListener('submit', sendEmail);