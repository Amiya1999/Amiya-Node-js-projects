document.addEventListener('DOMContentLoaded', () => {
    const smsForm = document.getElementById('smsForm');
    const callForm = document.getElementById('callForm');
    const whatsappForm = document.getElementById('whatsappForm');
    const messageDiv = document.getElementById('message');
  
    smsForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const to = document.getElementById('smsTo').value;
      const message = document.getElementById('smsMessage').value;
  
      try {
        const response = await fetch('/sms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ to, message }),
        });
        const data = await response.json();
        messageDiv.textContent = data.message;
      } catch (error) {
        console.error(error);
        messageDiv.textContent = 'Error occurred';
      }
    });
  
    callForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const to = document.getElementById('callTo').value;
      const callUrl = document.getElementById('callUrl').value;
  
      try {
        const response = await fetch('/call', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ to, callUrl }),
        });
        const data = await response.json();
        messageDiv.textContent = data.message;
      } catch (error) {
        console.error(error);
        messageDiv.textContent = 'Error occurred';
      }
    });
  
    whatsappForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const to = document.getElementById('whatsappTo').value;
      const message = document.getElementById('whatsappMessage').value;
  
      try {
        const response = await fetch('/whatsapp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ to, message }),
        });
        const data = await response.json();
        messageDiv.textContent = data.message;
      } catch (error) {
        console.error(error);
        messageDiv.textContent = 'Error occurred';
      }
    });
  });
  