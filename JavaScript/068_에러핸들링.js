try {
    // code
} catch(에러메시지) {
    // code
} finally {
    // code
}

//new Error(message);
//new SyntaxError(message);
//new ReferenceError(message);

try {
    let x = 10;
    let y = 20;
    console.log(x + y)
} catch(e) {
    console.log(e)
} finally {
    console.log('finally')
}