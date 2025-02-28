// config/config.js
const environments = {
    dev: {
      component_name: "MyApplication",
      version: "1.0.0",
      debug_level: "verbose",
      event_server: "http://localhost:3000/events",
      data_connect: "sqlite::memory:", // For development; use PostgreSQL or similar in production
      log_server: "http://localhost:3000/logs",
    },
    // Add more environments as needed
  };
  
  const currentEnvironment = process.env.NODE_ENV || 'dev';
  module.exports = environments[currentEnvironment];
  