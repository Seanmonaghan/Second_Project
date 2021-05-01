const newFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const personality = document.querySelector('#personality').value.trim();
    const hairstyle = document.querySelector('#hairstyle').value.trim();
    const dressStyle = document.querySelector('#dress_style').value.trim();
    const age = document.querySelector('#age').value.trim();
    const game = document.querySelector('#game').value.trim();

    if (first_name && last_name && personality && hairstyle && dressStyle && age) {
      const response = await fetch(`/api/characters`, {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, personality, hairstyle, dressStyle, age, game }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create character');
      }
    }
  };
  
  const characterDelButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };


  const newGameFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const description = document.querySelector('#description').value;

    if (title, genre, description) {
      const response = await fetch(`/api/games`, {
        method: 'POST',
        body: JSON.stringify({ title, genre, description }),
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create game');
      }
    }
  };

  const GameDelButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/games/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete game');
      }
    }
  };
  
document
    .querySelector('.new-character-form')
    .addEventListener('submit', newFormHandler);
  
// document
//     .querySelector('.character-list')
//     .addEventListener('click', characterDelButtonHandler);

document
    .querySelector('.new-game-form')
    .addEventListener('submit', newGameFormHandler);

// document
//     .querySelector('.game-list')
//     .addEventListener('click', GameDelButtonHandler);
  