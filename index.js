const chatArea = document.querySelector('#chat-area');
const hash = window.location.hash.replace('#','');
const message = hash ? atob(hash) : '';

/* Show message from URL as received */
if (message) {
  const bubble = document.createElement('div');
  bubble.className = 'message received';
  bubble.textContent = message;
  chatArea.appendChild(bubble);
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const input = document.querySelector('#message-input');
  if(!input.value.trim()) return;

  const encrypted = btoa(input.value);

  // Show message in conversation as sent
  const bubble = document.createElement('div');
  bubble.className = 'message sent';
  bubble.textContent = input.value;
  chatArea.appendChild(bubble);

  // Generate link for sharing
  const linkInput = document.querySelector('#link-input');
  document.querySelector('#link-form').classList.remove('hide');
  linkInput.value = `${window.location.origin}${window.location.pathname}#${encrypted}`;
  linkInput.select();

  input.value = '';
});