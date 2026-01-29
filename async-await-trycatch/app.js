const cookBeanSouffle = require('./library.js');
// WITH TRY CATCH:
async function hostDinnerParty() {
    try {
        let result = await cookBeanSouffle();
        console.log(result + ' is served!');
    } catch (error) {
        console.log(error);
        console.log('Ordering a pizza!');
    }
}
hostDinnerParty();

// WITH PROMISE.CATCH():
async function usingPromiseCatch() {
    let result = await cookBeanSouffle();
    console.log(result + ' is served!');
}

let soufflePromise = usingPromiseCatch();
soufflePromise.catch((rejectValue) => {
    console.log(rejectValue);
    console.log('Ordering a pizza!');
})
