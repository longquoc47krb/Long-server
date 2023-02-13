const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://shopcoinusa:WenLy1tSusFHPaa7@cluster0.zkystxe.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client
  .connect()
  .then((client) => client.db("feedback"))
  .catch((error) => console.error(error));
