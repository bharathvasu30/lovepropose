document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseMessage').textContent = 'She said Yes! Congratulations!';
    document.getElementById('responseMessage').style.color = '#4caf50';
  });
  
  document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('responseMessage').textContent = 'She said No. Don\'t give up!';
    document.getElementById('responseMessage').style.color = '#f44336';
  });
  