// Making Maggie using callback hell (short version)

function buymaggie(callback){
    setTimeout(() => {
        console.log("buy the maggie");
        console.log("Maggie got it");
        callback();
    }, 1000);
}

buymaggie(() => {
    setTimeout(() => {
        console.log("Start opening maggie");

        setTimeout(() => {
            console.log("Maggie is prepared");

            setTimeout(() => {
                console.log("Maggie eaten");

                setTimeout(() => {
                    console.log("Maggie Eating done");
                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);
});
