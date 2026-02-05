
{
    function votingSystem() {
        let yes = 0;
        let no = 0;

        return {
            voteYes: () => yes++,
            voteNo: () => no++,
            result: () => ({ yes, no })
        };
    }

    const vote = votingSystem();
    vote.voteYes();
    console.log(vote.result());
}
