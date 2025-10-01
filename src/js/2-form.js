const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email ?? '';
  formData.message = parsedData.message ?? '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  if (evt.target.name === 'email') {
    formData.email = evt.target.value.trim();
  } else if (evt.target.name === 'message') {
    formData.message = evt.target.value.trim();
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
}
