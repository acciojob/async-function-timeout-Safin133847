//your JS code here. If required.
// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function () {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const submitButton = document.getElementById('btn');
  const outputDiv = document.getElementById('output');

  submitButton.addEventListener('click', async function () {
    const text = textInput.value;
    const delay = parseInt(delayInput.value, 10);

    if (isNaN(delay) || delay < 0 || text.trim() === '') {
      outputDiv.textContent = 'Please enter valid text and delay values.';
      return;
    }

    await showTextAfterDelay(text, delay);
  });

  async function showTextAfterDelay(text, delay) {
    try {
      await new Promise(resolve => setTimeout(resolve, delay));

      outputDiv.textContent = text;
    } catch (error) {
      outputDiv.textContent = 'An error occurred.';
    }
  }
});
