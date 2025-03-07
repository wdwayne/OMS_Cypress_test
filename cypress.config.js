const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.BASEURL = process.env.OMS_BASE_URL;
      config.env.USERNAME = process.env.OMS_USERNAME;
      config.env.PASSWORD = process.env.OMS_USERPASSWORD;
      config.env.CIF = process.env.OMS_CIF_NUMBER;
      config.env.JCSD = process.env.OMS_JCSD_NUMBER;
      config.env.ORDERID = process.env.OMS_ORDER_NUMBER;
      config.env.USER = process.env.OMS_USER
      return config;
    },
    viewportWidth: 1500,
    viewportHeight: 900,
  },
});
