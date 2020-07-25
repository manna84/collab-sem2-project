const petData = document.getElementById('petForm');
    let count = 0;
petData.addEventListener('submit', (event) => {

    
    event.preventDefault();
    // console.log(petData.petDetail.value);

    if(document.getElementById('petDetail').value == "") {
        alert("Please enter details")
    }

    else {
        const box = document.getElementById('forum-box')
        const textBox = document.createElement('li');
        const adoptButton = document.createElement('button')
        textBox.textContent = petData.petDetail.value;
        adoptButton.textContent = 'Adopt';

        box.append(textBox);
        box.append(adoptButton);
        petData.reset();

        const countSubmit = document.getElementById("countSubmit");
        const totalAdopt = document.getElementById("totalAdopt");
        
        countSubmit.onclick = () => {
            count++;
            totalAdopt.innerHTML = count;
        }
    }

});

