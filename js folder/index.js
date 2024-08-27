const form = document.getElementById('cm-form');

async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(data)
    });

    const result = await response.json();
    alert(result.message); // Display a success message

  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting the form');
  }

  form.reset();

}

form.addEventListener('submit', e => {
  handleSubmit(e)
}, false);