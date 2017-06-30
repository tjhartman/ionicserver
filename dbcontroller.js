
module.exports = {

    getQuestionData: function (req, res) {
        req.app.get('db').join().then((response) => {
            res.send(response)
        }) 
    },

    //  getResults: (req, res) => {
    //     var params = [
    //         req.body.value,
    //         req.body.password
    //     ]
    //     console.log(params)
    //     req.app.get('db').getResults(params).then((response) => {
    //         res.send('Value Recorded')
    //     })
    // }

}