const Reply = require('../models/reply-model')

//Create a resource for set of symptoms
createReply = async (req, res) => {
  try {
    //create a new map instance, symptomArray -> resource
    const newReply = new Reply({
      symptoms: req.body.symptoms,
      resource: req.body.resource,
    });

    //save reply and respond
    const reply = await newReply.save();
    res.status(200).json(reply);
  } catch (err) {
    res.status(500).json(err)
  }
};

//Get a resource for set of symptoms
getReply = async (req, res) => {
    try {
      const reply = await Reply.findOne({ symptoms: req.body.symptoms });
      !reply && res.status(404).json("resource not found");
  
      res.status(200).json(reply)
    } catch (err) {
      res.status(500).json(err)
    }
};

module.exports = {
  createReply,
  getReply
}
