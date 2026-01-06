const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});

function toggleChangelog() {
  const changelog = document.getElementById('changelog');
  changelog.classList.toggle('open');
}

function openSuggestModal() {
  document.getElementById('suggestModal').classList.add('open');
  document.getElementById('gameNameInput').focus();
}

function closeSuggestModal(event) {
  if (!event || event.target.id === 'suggestModal') {
    document.getElementById('suggestModal').classList.remove('open');
    document.getElementById('gameNameInput').value = '';
  }
}

function sendSuggestion() {
  const gameName = document.getElementById('gameNameInput').value.trim();
  if (gameName) {
    const email = 'YOUR_EMAIL@gmail.com';
    const subject = encodeURIComponent('Game Suggestion for Not Unblocked Games');
    const body = encodeURIComponent('Hi! I would like to suggest adding this game:\n\n' + gameName);
    window.open('mailto:' + email + '?subject=' + subject + '&body=' + body);
    closeSuggestModal();
  } else {
    alert('Please enter a game name');
  }
}
