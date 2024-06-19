const { db, perfis } = require("../../../db");

module.exports = {
  Query: {
    perfis() {
      return perfis;
    },
  },
};
