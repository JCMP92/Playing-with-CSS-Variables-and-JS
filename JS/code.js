const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    console.log(this.value);    
}

inputs.forEach(inputElement => inputElement.addEventListener('change', handleUpdate));