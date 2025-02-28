// models/rule.js
module.exports = (sequelize, DataTypes) => {
    const Rule = sequelize.define('Rule', {
      // Define attributes
      rule_set_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      match_condition: {
        type: DataTypes.JSON, // Assuming your database supports JSON type
        allowNull: false,
      },
      return: {
        type: DataTypes.JSON, // Assuming your database supports JSON type
        allowNull: false,
      },
      order_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
      // Add any other fields you need
    }, {
      // Model options
    });
  
    return Rule;
  };
  