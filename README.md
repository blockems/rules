# rules
# Project Configuration and Database Migrations Guide

This document provides an overview of configuring your Node.js project using a `config.js` file and managing your database schema with Sequelize migrations.

## Config.js Overview

The `config.js` file serves as a central place to manage your application's configuration settings across different environments (e.g., development, testing, production). This approach allows for easy adjustments and scalability of your application.

### Structure

The `config.js` file typically includes:

- Component name and version
- Environment-specific settings (e.g., database connection details, logging levels)

Example `config.js`:

```javascript
module.exports = {
  componentName: "YourProjectName",
  version: "1.0.0",
  environments: {
    dev: {
      debugLevel: 'debug',
      eventServer: 'http://localhost:3000',
      dataConnect: {
        username: 'root',
        password: 'password',
        database: 'your_database',
        host: 'localhost',
        dialect: 'sqlite' // Use 'postgres' for production
      },
      logServer: 'http://localhost:3001',
    },
    // Additional environments (test, prod) go here
  }
};
```

# Usage
To use the `config.js` in your application, require it and select the appropriate environment settings based on your current environment.

Example usage:

```javascript
const env = process.env.NODE_ENV || 'dev'; // Default to 'dev' if NODE_ENV is not set
const config = require('./config.js').environments[env];
```

# Sequelize Migrations
Sequelize migrations allow you to manage your database schema changes. Migrations enable you to version control your database schema and apply changes incrementally.

## Creating a Migration
To create a new migration, use the Sequelize CLI. If you're following a naming convention that includes a timestamp (e.g., yyyy-mm-dd-create-rules-table.js), you can manually create the file or use the CLI to generate it and then rename accordingly.

Example command to generate a migration file:

```javascript
npx sequelize-cli migration:generate --name create-rules-table
```
After running this command, rename the file if necessary to match your naming convention.

# Migration File Structure
A migration file defines the changes to apply to the database schema. It includes two main functions: up (for applying changes) and down (for reverting them).

Example migration to create a rules table:

```javascript

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('rules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ruleSetName: {
        type: Sequelize.STRING
      },
      matchCondition: {
        type: Sequelize.TEXT
      },
      returnAction: {
        type: Sequelize.TEXT
      },
      orderNo: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('rules');
  }
};
```
# Running Migrations
To apply your migrations and update the database schema, use the following command:

```javascript
npx sequelize-cli db:migrate
```
To revert the last migration, use:

```javascript
npx sequelize-cli db:migrate:undo
```
