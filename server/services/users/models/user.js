const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongo-connection");

class User {
  static model() {
    const db = getDB();
    return db.collection("users");
  }

  static async findAll() {
    try {
      const user = this.model();
      const result = await user
        .find({}, { projection: { password: 0 } })
        .toArray();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async findById(id) {
    try {
      const user = this.model();
      const result = await user.findOne({
        _id: ObjectId(id),
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const user = this.model();
      const result = await user.insertOne(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async destroy(id) {
    try {
      const user = this.model();
      const result = await user.deleteOne({
        _id: ObjectId(id),
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
