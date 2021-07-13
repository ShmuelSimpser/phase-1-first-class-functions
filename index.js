function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const namedFn = () => console.log("A named function-");
    return namedFn; 
}

function returnsAnAnonymousFunction() {
    return () => console.log("An anonymous Function");
}
