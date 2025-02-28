const { Rule } = require('../models'); // Assuming Rule is your Sequelize model for the rules table

async function evaluateRules(inputData) {
  if (!inputData.rule_set_name) {
    throw new Error('rule_set_name must be provided in inputData');
  }

  // Fetch rules from the database where rule_set_name matches inputData.rule_set_name
  const rules = await Rule.findAll({
    where: {
      rule_set_name: inputData.rule_set_name,
    },
    order: [['order_no', 'ASC']], // Order by order_no ascending
  });

  // If no rules are found, return the default object
  if (rules.length === 0) {
    return { return: "*" };
  }

  for (let rule of rules) {
    let isMatch = true; // Assume match until proven otherwise
    for (let [key, value] of Object.entries(rule.match_condition)) {
      // Adjust the logic here as per your match_condition's structure and comparison logic
      if (typeof value === "function") {
        if (!value(inputData[key])) {
          isMatch = false;
          break;
        }
      } else if (inputData[key] !== value) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      return rule.return; // Return the matched rule's return object
    }
  }

  return null; // Return null if no rules match
}