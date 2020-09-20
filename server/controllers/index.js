const { todo } = require('../models');
const { completed } = require('../models');

module.exports = {
    create: async (req, res) => {
        let { text } = req.body;
        await todo.create({ text })
            .then(data => {
                res.status(201).json(data);
            })
        res.end();
    },

    list: async (req, res) => {
        await todo.findAll()
            .then(data => {
                res.status(201).json(data)
            })
        res.end();
    },

    remove: async (req, res) => {
        // let { id } = req.body;
        console.log("body :", req.body.text)
        await todo.destroy({
            where: {
                id: req.body.text
            }
        })
            .then(data => {
                res.status(201).end()
            })
    },

    completed: async (req, res) => {
        await todo.findOne({
            where: {
                id: req.body.text
            }
        })
            .then(data => {
                console.log("완료 테스트 데이터", data)
                completed.create({
                    text: data.text
                })
            })
            .then(data => {
                console.log("완료목록 추가: ", data)
                res.status(201).json(data)
            })
        res.end()
    },

    completedList: async (req, res) => {
        await completed.findAll()
            .then(data => {
                res.status(201).json(data)
            })
    }


}