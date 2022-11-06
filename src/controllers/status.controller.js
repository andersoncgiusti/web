
module.exports = {
    status: (req , res) => {
        res.status(200).send({
            'author': 'Anderson Giusti'
        })
    },
    status_test: () => {
        const test = {
            "author": "Anderson Giusti"
        }
        return test;
    }
}

