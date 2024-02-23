document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const dataList = document.getElementById('dataList');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
  
      fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        form.reset();
        fetchData();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  
    function fetchData() {
      fetch('/data')
      .then(response => response.json())
      .then(data => {
        dataList.innerHTML = '';
        data.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `Nombre: ${item.name}, Email: ${item.email}`;
          dataList.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  
    fetchData();
  });
  