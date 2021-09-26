//Delete blog wiht given id
const id = document.querySelector('#dataid').value.trim();

const delButtonHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  
};

document
  .querySelector('.delete-form')
  .addEventListener('submit', delButtonHandler);
