const mongoose = require("mongoose");
const CreateWorkerAccountSchema = new mongoose.Schema({});

const CreateWorkerAccount = mongoose.model(
  "CreateWorkerAccount",
  CreateWorkerAccountSchema
);

module.exports = CreateWorkerAccount;
