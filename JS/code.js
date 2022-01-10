const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; //The '' stands for 'nothing' because we also have a color value in one of the inputs, and not just 'px'
    //console.log(this.dataset); The dataset will console.log an object with all the data that´s inside of the 'data-' that we had declared. In this case, will be the 'px' of 'data-sizing'
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(inputElement => inputElement.addEventListener('change', handleUpdate));
inputs.forEach(inputElement => inputElement.addEventListener('mousemove', handleUpdate));