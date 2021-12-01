//Array of cats
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    let appendCat = [...cats, 'Broom'];
    return appendCat;
}

function prependCat(name) {
    let prependCat = ['Arnold', ...cats];
    return prependCat;
}

function removeLastCat() {
    let newCats = cats.slice(0, 2);
    return newCats;
}

function removeFirstCat() {
    let newCats = cats.slice(1, 3)
    return newCats;
}

console.log(removeFirstCat())