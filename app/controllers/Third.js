var BaseController = require("./Base");
var View = require("../views/Base");

module.exports = BaseController.extend({ 
	name: "Third",
	content: null,
	run: function(req, res) {
        var self = this;

        var template = 'third';
        var values = self.getThird(req);
        
        var v = new View(res, template);
        v.render(values);
    },
    getThird: function(req) {
        return {
            fname: req.body.fname,
            lname: req.body.lname,
            date: req.body.todaydate,
            offensedate: req.body.offensedate,
            homicide: req.body.homicide,
            firstDegreeAssult: req.body.first_degree_assult,
            dfname: req.body.dfname,
            dlname: req.body.dlname,
            substances: [
                req.body.alcohol,
                req.body.drugs
            ]
        };
    }
});