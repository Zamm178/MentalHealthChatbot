const Reply = require("../models/reply-model");

const MENTAL_HEALTH = require("./mental-health-dataset");

const importDataset = async () => {
  const symptom = MENTAL_HEALTH.symptom;

  const mentalHealthDisorder = MENTAL_HEALTH.disorder;

  const symptoms = Object.values(symptom);

  const NO_OF_MENTAL_HEALTH_DISORDER = symptoms.length;

  for (let i = 0; i < NO_OF_MENTAL_HEALTH_DISORDER; i++) {
    try {
      const currDisorder = mentalHealthDisorder[i];

      const reply = await Reply.findOne({ mentalDisorder: currDisorder });

      if (reply) continue;

      const resource =
        "https://www.google.com/search?q=" + currDisorder.replace(" ", "+");

      const newReply = new Reply({
        mentalDisorder: currDisorder,
        symptoms: symptoms[i],
        resource: resource,
      });

      const data = await newReply.save();
      console.log(`inserted ${i+1}.`, data.mentalDisorder)
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = importDataset;