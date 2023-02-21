function sayHello(...name) {
    if (name.length > 1) {
        alert(`Hello, guys, ${name.join(', ')}!`);
    } else {
        alert(`Hello, ${name[0]}!`);
    }
}
sayHello('Dan');
sayHello('Roman', 'Gregory', 'Kirill');