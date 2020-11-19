
const moment = require('moment')
const UserView = require('../models/userView');
const User = require('../models/user');

// create product detail when user view 
exports.createUserView = async (req, res) => {
    try{
        const { body } = req;
        const userView = await UserView.create(body);
        return res.status(200).send({
            status: true,
            message: "User view record created successfully.",
            data: userView,
        })
    }catch(err){
        return res.status(200).send({
            status: true,
            message: err,
            data: []
        })
    }
}

// fetch fetch user view according to filter can be daily, weekly, monthly or custom
exports.getUserViewCount = async (req, res) => {
    try{
        let start = moment().startOf('day').toDate()
        let end = moment().endOf('day').toDate()
        switch (req.params.filter) {
        case 'daily':            
            break;
            case 'weekly':
            start = moment().subtract(7, 'days').startOf('day').toDate()
            end = moment().endOf('day').toDate()
            break;
            case 'monthly':
            start = moment().subtract(1, 'month').startOf('day').toDate()
            end = moment().endOf('day').toDate()
            break;
            case 'custom':
            start = moment(req.params.startDate).startOf('day').toDate()
            end = moment(req.params.endDate).endOf('day').toDate()
            break;
        }
        const UserViewCount = await UserView.distinct("userId", {
        viewDate: {
            $gt:  start,
            $lt: end,
        }
        });
        const userCount = await User.countDocuments ({});
        return res.status(200).send({
            status: true,
            UserViewCount: UserViewCount.length,
            userCount:userCount
        })
    }catch(err){
        return res.status(200).send({
            status: true,
            message: err,
            data: []
        })
    }
}