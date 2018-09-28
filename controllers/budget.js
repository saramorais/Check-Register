const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Budget = require('../models').Budget;

module.exports = {
  list(req, res) {
    return Budget
      .findAll({
        order: [
          ['id', 'DESC']
        ]
      })
      .then((budgets) => res.status(200).send(budgets))
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res) {
    return Budget
      .findAll({
        attributes: ['amount']
      })
      .then((budget) => {
        let sum = 0;
        budget.forEach((bud) => {
          sum += parseFloat(bud.dataValues.amount);
        });
        const finalSum = sum + parseFloat(req.body.amount);
        return Budget
          .create({
            transactiondate: req.body.transactiondate,
            description: req.body.description,
            category: req.body.category,
            amount: req.body.amount,
            type: req.body.type,
            balance: finalSum
          })
          .then((budget) => res.status(200).send(budget))
          .catch((error) => { res.status(400).send(error); });
      })
      .catch((error) => res.status(400).send(error));
  },

  filter(req, res) {
    return Budget
      .findAll({
        where: { 
          [Op.or]: [{category: req.params.term}, {type: req.params.term}] 
        }
      })
      .then((budgets) => res.status(200).send(budgets))
      .catch((error) => { res.status(400).send(error); });    
  }

};