function secretHolder(secret) {
    return function () {
        return secret;
    };
}

const getSecret = secretHolder("My Secret");
console.log(getSecret());
