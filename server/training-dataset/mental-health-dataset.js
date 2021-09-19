const MENTAL_HEALTH = {
  resource: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders", // World Health Organization
  
  disorder: [
    "depression",
    "bipolar disorder", //"schizophrenia",
    "psychoses",
    "dementia",
    "developmental disorders", //"autism",
  ],

  symptom: {
    depression: [
      "sadness",
      "loss of interest or pleasure",
      "feelings of guilt or low self-worth",
      "disturbed sleep or appetite",
      "tiredness",
      "poor concentration",
    ],
    "bipolar disorder": [
      "manic and depressive episodes",
      "normal mood",
      "elevated or irritable mood",
      "over-activity",
      "rapid speech",
      "inflated self-esteem",
      "decreased need for sleep",
    ],
    psychoses: [
      "hallucinations (hearing, seeing or feeling things that are not there)",
      `delusions (fixed false beliefs or suspicions that are firmly held even 
				when there is evidence to the contrary)`,
    ],
    dementia: [
      "deterioration in cognitive function (the ability to process thought)",
      //affects-
      "memory",
      "thinking",
      "orientation",
      "comprehension",
      "calculation",
      "learning capacity",
      "language",
      "judgement",
    ],
    "developmental disorder": [
      `impairment of skills (across multiple developmental areas such as 
				cognitive functioning and adaptive behaviour)`,
      `narrow range of interests and activities (that are both unique to the 
				individual and are carried out repetitively)`,
        
      "lower intelligence",
      "impaired social behaviour",
      "communication and language",
      "some degree of intellectual disability",
    ],
  },
};

module.exports = MENTAL_HEALTH;
