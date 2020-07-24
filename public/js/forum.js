const petData = document.getElementById('petForm');

petData.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(petData.petDetail.value);
});