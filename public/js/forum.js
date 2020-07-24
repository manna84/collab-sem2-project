const petData = document.getElementById('petForm');

petData.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(petData.petDetail.value);
    // const petBox = document.getElementById('para');
    // petBox.innerHTML = petData.petDetail.value;

    const box = document.getElementById('para')
    const textBox = document.createElement('li');

    textBox.textContent = petData.petDetail.value;

    box.append(textBox);
});

// const petBox = document.getElementsByClassName("para");
// petBox.innerHTML = petData.petDetail.value;