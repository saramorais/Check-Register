'use strict';
module.exports = (sequelize, DataTypes) => {
  const Budget = sequelize.define('Budget', {
    transactiondate: DataTypes.DATE,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
    type: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    balance: DataTypes.DECIMAL
  }, {});
  Budget.associate = function(models) {
    // associations can be defined here
  };
  return Budget;
};