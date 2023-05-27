function writeCards() {
    const names = ["Guadalupe", "Ollie", "Aki"];
    const cards = [];

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        cards[i] = message;
    }

    return cards;
}

function countDown(num) {
    while(num >= 0) {
        console.log(num);
        num--;
    }
}
 