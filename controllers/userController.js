const Models = require("../models/index");

module.exports = {
  insert: async (req, res) => {
    try {
        console.log(req.body)
      let objToSave = {
        name: req.body.name,
      };
      let response = await Models.userModel.create(objToSave);
      return res.status(201).send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
 
  findRecord: async (req, res) => {
    try {
      let response = await Models.userModel.findOne({
        where: { id: req.body.id },
        raw: true,
      });
      return res.send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  insertComment: async (req, res) => {
    try {
        console.log(req.body)
      let objToSave = {
        comment: req.body.comment,
        userId:req.body.userId
      };
      let response = await Models.commentModel.create(objToSave);
      return res.status(201).send(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

}
