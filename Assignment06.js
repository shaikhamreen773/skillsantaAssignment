function greet() {
    return 'Hello';
}

// passing function greet() as a parameter
function name(user, func) {

    // accessing passed function
    const message = func();

    document.write(`${message} ${user}`);
    document.write("<br>");
}

name('John', greet);
name('Jack', greet);
name('Sara', greet);