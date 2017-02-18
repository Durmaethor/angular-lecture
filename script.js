function thisTakesTimes(){
    return new Promise((success, failure) => {
        var num = math.floor(math.random() * 10);
        if(num % 2 === 0) {
            success(num);
        }
        else {
            failure(num);
        }
    })
}

function success(data) {
    console.log('yeah! even!', data)
}

function failure(data) {
    console.log('booo! odd!', data)
}

thisTakesTime()
    .then(success, failure)

console.log('foobar')
console.log('banana')