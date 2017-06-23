
module.exports = {

    getQuestionData: function (req, res) {
        req.app.get('db').join().then((response) => {
            res.send(response)
        }) 
    }

}