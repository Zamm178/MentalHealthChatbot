const Reply = require("../models/reply-model");

//Create a resource for set of symptoms
createReply = async (req, res) => {
  try {
    const symptoms = req.body.symptoms;
    const disorder = req.body.disorder;
    const resource =
      req.body?.resource ||
      "https://www.google.com/search?q=" + disorder.replace(" ", "+");

    //create a new map instance, symptomArray -> resource
    const newReply = new Reply({
      symptoms: symptoms,
      resource: resource,
      mentalDisorder: disorder,
    });

    //save reply and respond
    const reply = await newReply.save();
    res.status(200).json(reply);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get a resource for set of symptoms
getReply = async (req, res) => {
  try {
    const symptoms = req.body.symptoms;

    const NO_OF_SYMPTOMS = symptoms.length;

    let result = [];

    for (let i = 0; i < NO_OF_SYMPTOMS; i++) {
      const regex = new RegExp(symptoms[i]);

      const reply = await Reply.find({ symptoms: { $in: [regex] } });
      if (!reply || !reply.length) continue;

      result.push(reply[0].resource);
    }

    const mode = (myArray) =>
      myArray.reduce(
        (a, b, i, arr) =>
          arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length
            ? a : b,
        null
      );

    const resource = await Promise.all([mode(result)]);

    res.status(200).json(resource);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  createReply,
  getReply,
};
