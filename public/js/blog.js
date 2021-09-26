//Update the blog

const updateFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blog-name').value.trim();
  const description = document.querySelector('#blog-content').value.trim();
  const id = document.querySelector('#dataid').value.trim();
  
 
  if (name && description) {
   
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update blog');
    }
  }
};


//Delete blog wiht given id

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};
document
  .querySelector('.update-form')
  .addEventListener('submit', updateFormHandler);

document
  .querySelector('#delete-blog')
  .addEventListener('click', delButtonHandler);