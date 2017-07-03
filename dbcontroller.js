
module.exports = {

    getQuestionData: function (req, res) {
        req.app.get('db').join().then((response) => {
            res.send(response)
        }) 
    },

     postResults: (req, res) => {
         console.log(req.body.value)
        var params = [
            req.body.value
        ]
        console.log(params)
        req.app.get('db').postResults(params).then((response) => {
            res.send('Value Recorded')
        })
    }

}