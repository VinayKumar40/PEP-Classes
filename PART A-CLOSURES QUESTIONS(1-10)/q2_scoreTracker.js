function scoreTracker() {
    let score = 0;

    return {
        addScore: function (points) {
            score += points;
        },
        getScore: function () {
            return score;
        }
    };
}

const game = scoreTracker();
game.addScore(10);
console.log(game.getScore());
