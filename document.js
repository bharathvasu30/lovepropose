document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseMessage').textContent = 'Thank you:) Na I will make myself better. I love you so much';
    document.getElementById('responseMessage').style.color = '#4caf50';
  });
  
  document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('responseMessage').textContent = 'Please say yes. I Love you so much';
    document.getElementById('responseMessage').style.color = '#f44336';
  });
  