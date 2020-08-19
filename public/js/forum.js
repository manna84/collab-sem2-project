const clickPost = document.getElementById('btn-post');

clickPost.addEventListener('click', (event) => {
    event.preventDefault();

    const postBox = document.getElementById('post-box');

    postBox.innerHTML = `<section class="section-form">
    <div class="numberBox">
        <p>Total number of pets of adoption</p>
        <div id="totalAdopt"></div>
    </div>


    <h3>Please post all the information regarding your pet below</h3>

    <div class="post-form-box row">

        <form action="/" method="POST" id=petForm>
            <textarea type="text" id="petDetail" name="petDetail" placeholder="Please enter details here"
                rows="10"></textarea>
            <input type="submit" id="countSubmit">
        </form>

    </div>

    <ul id="forum-box" class="row"></ul>

    </section>`;

    //hide the button
    document.getElementById('forum-head').style.display = 'none';

    //JS for forum page
    const petData = document.getElementById('petForm');
    const countarr = [];

    petData.addEventListener('submit', (event) => {

        event.preventDefault();
        // console.log(petData.petDetail.value);

        if (document.getElementById('petDetail').value == "") {
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

            countarr.push(textBox);
            document.getElementById('totalAdopt').innerHTML = countarr.length;

        }

    });
})

