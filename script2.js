document.getElementById('fileInput').addEventListener('change', function(event) {
  const files = event.target.files;
  const previewContainer = document.getElementById('previewContainer');
  previewContainer.innerHTML = 'style2.html';
  
  const formData = new FormData(); 
  
  Array.from(files).forEach(file => {
    if (file.type.startsWith('image/')) {
      formData.append('images[]', file);
      const reader = new FileReader();
      reader.onload = function(e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.className = 'preview';
        previewContainer.appendChild(imgElement);
      };
      reader.readAsDataURL(file);
    }
  });


  fetch('YOUR_SERVER_ENDPOINT', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

function closet(){
}

function greeting() {
  let first_name = document.getElementById("first").value;

  if (first_name.length === 0) {
    alert("You didn't enter names into the box");
  } else {
	  let x = first_name.value;

	  let message = "Welcome, " + first_name + "!";
    alert(message);
  }
}