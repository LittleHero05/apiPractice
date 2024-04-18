const main = document.querySelector('main');
const text = document.createElement('p');
const picture = document.createElement('img');


async function fetchCatFact() {
    const response = await fetch('https://cat-fact.herokuapp.com/facts');
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const randomFact = data[Math.floor(Math.random() * data.length)];
    const fact = randomFact.text;
    text.textContent = fact;
}

async function fetchFoxImg() {
    const response = await fetch('https://randomfox.ca/floof/');
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    picture.src = data.image;
}

async function fetchFoodImg() {
    const response = await fetch('https://foodish-api.com/api');
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    picture.src = data.image;
}

main.appendChild(text);
main.appendChild(picture);
