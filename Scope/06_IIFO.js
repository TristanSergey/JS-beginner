const myModule = (function () {
    console.log('Start IIFO');
    const a = 6;
    return { a: a };
})();

console.log(myModule.a);
