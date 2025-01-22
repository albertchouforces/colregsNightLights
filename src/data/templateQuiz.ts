// =================================================================
// QUIZ TEMPLATE - HOW TO CREATE YOUR OWN QUIZ
// =================================================================
//
// This template allows you to create any image-based multiple choice quiz.
// Follow these steps to create your own quiz:
//
// 1. PREPARE YOUR IMAGES:
//    - Place all question images in the public/images folder
//    - Use consistent image dimensions (recommended: 400x400px)
//    - Supported formats: PNG, JPG, SVG
//    - Example path: public/images/question1.jpg will be referenced as "/images/question1.jpg"
//
// 2. CUSTOMIZE QUIZ APPEARANCE:
//    - Update QUIZ_CONFIG below with:
//      * title: Your quiz title
//      * description: Brief quiz description
//      * themeColor: Choose from: 'blue', 'green', 'sky', 'red'
//
// 3. ADD YOUR QUESTIONS:
//    - Follow the templateQuestions format below
//    - Each question requires:
//      * id: Unique number for each question
//      * question: The question text shown to users
//      * correctAnswer: The correct answer (exact match required)
//      * description: Brief context shown with the question
//      * fact: Interesting fact shown after answering (optional, can be empty string)
//      * imageUrl: Path to question image (relative to public folder)
//
// =================================================================

import type { QuestionData } from '../types';

// Quiz display configuration - Customize these values
export const QUIZ_CONFIG = {
  title: "COLREGs Night Lights Quiz",
  description: "Test your knowledge of navigation lights at night",
  themeColor: 'blue' as const,  // Options: 'blue' | 'green' | 'sky' | 'red'
  quiz_name: "colregs_night", // Unique identifier for the quiz, used in database
  startScreenImage: "/images/quiz-start.svg" // Optional: Image shown on start screen
};

// Example questions - Replace with your own
export const templateQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What does this signal mean?",
    correctAnswer: "Air cushion vessel in non-displacement mode port side",
    description: "",
    fact: "These vessels are power driven and so they display the same lights as power driven vessels. In addition however, so they can be distinguished, they also display and all round flashing yellow light. This is mounted where it can best be seen.",
    imageUrl: "/images/Air cushion vessel in non-displacement mode port side.png"  // Place image in public/images/
  },
  {
    id: 2,
    question: "What does this signal mean?",
    correctAnswer: "Mine sweeper from ahead",
    description: "",
    fact: "These vessels display the lights for a power driven vessel appropriate to their size plus three all round green lights arranged as shown.",
    imageUrl: "/images/Mine sweeper from ahead.png"  // Place image in public/images/
  },
  {
    id: 3,
    question: "What does this signal mean?",
    correctAnswer: "Pilot vessel on duty starboard side",
    description: "",
    fact: "A pilot vessel on duty will display an all round white light over an all round red light. This indicates to us that there is a large ship in the vicinity.",
    imageUrl: "/images/Pilot vessel on duty starboard side.png"  // Place image in public/images/
  },
  {
    id: 4,
    question: "What does this signal mean?",
    correctAnswer: "Power driven vessel from ahead less than 50 metres",
    description: "",
    fact: "A vessel with a single masthead light is under 50 metres in length.",
    imageUrl: "/images/Power driven vessel from ahead less than 50 metres.png"  // Place image in public/images/
  },
  {
    id: 5,
    question: "What does this signal mean?",
    correctAnswer: "Power driven vessel from ahead probably over 50 metres",
    description: "",
    fact: "The reason we state that two mast head lights ‘probably’ mean over 50 metres is because smaller vessels are also allowed two masthead lights. However, this is usually impractical because the rules state that the second masthead light must be 4.5 metres higher than the first. Most smaller vessels don’t have the structure to accommodate this.",
    imageUrl: "/images/Power driven vessel from ahead probably over 50 metres.png"  // Place image in public/images/
  },
  {
    id: 6,
    question: "What does this signal mean?",
    correctAnswer: "Sailing vessel less than 20 metres from ahead",
    description: "",
    fact: "Smaller sailing vessels, under 20 metres in length are allowed to combine the two lights at the top of the mast.",
    imageUrl: "/images/Sailing vessel less than 20 metres from ahead.png"  // Place image in public/images/
  },
  {
    id: 7,
    question: "What does this signal mean?",
    correctAnswer: "Sailing vessel over 20 metres from ahead",
    description: "",
    fact: "When sailing, the vessel has to display red and green side lights and a white stern light. It does not display a forward facing masthead light as that would mean it was being propelled by machinery.",
    imageUrl: "/images/Sailing vessel over 20 metres from ahead.png"  // Place image in public/images/
  },
  {
    id: 8,
    question: "What does this signal mean?",
    correctAnswer: "Vessel constrained by draft starboard side",
    description: "",
    fact: "A vessel constrained by it’s draft can only navigate within the confines of a narrow channel. The draft is the distance from the waterline to the bottom of the hull or keel.",
    imageUrl: "/images/Vessel constrained by draft starboard side.png"  // Place image in public/images/
  },
  {
    id: 9,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in fishing starboard side",
    description: "",
    fact: "Fishing vessels also turn off their side lights and stern light when they aren’t making way.",
    imageUrl: "/images/Vessel engaged in fishing starboard side.png"  // Place image in public/images/
  },
  {
    id: 10,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in pair trawling hauling nets",
    description: "",
    fact: "Both trawlers will display green lights over white lights.",
    imageUrl: "/images/Vessel engaged in pair trawling hauling nets.png"  // Place image in public/images/
  },
  {
    id: 11,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in pair trawling nets fast upon obstruction",
    description: "",
    fact: "There are a total of three different way to display lights for pair trawling.",
    imageUrl: "/images/Vessel engaged in pair trawling nets fast upon obstruction.png"  // Place image in public/images/
  },
  {
    id: 12,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in pair trawling shooting nets",
    description: "",
    fact: "Sometimes trawlers will work together which is referred to as pair trawling. ",
    imageUrl: "/images/Vessel engaged in pair trawling shooting nets.png"  // Place image in public/images/
  },
  {
    id: 13,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in purse seine fishing hampered by gear port side",
    description: "",
    fact: "In addition to the red over white lights, purse seiners will display to flashing yellow lights. These are installed vertically and flash alternately.",
    imageUrl: "/images/Vessel engaged in purse seine fishing hampered by gear port side.png"  // Place image in public/images/
  },
  {
    id: 14,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in towing - less than 200 metres - starboard side",
    description: "",
    fact: "Vessels engaged in towing and whose purpose is to be able to tow will display the lights for a power driven vessel.",
    imageUrl: "/images/Vessel engaged in towing - less than 200 metres - starboard side.png"  // Place image in public/images/
  },
  {
    id: 15,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in towing - over 200 metres - port side",
    description: "",
    fact: "The length of the tow is measured from the bow of the towing vessel to the stern of the tow. If this total length exceeds 200 metres then a third white, forward facing masthead light is displayed.",
    imageUrl: "/images/Vessel engaged in towing - over 200 metres - port side.png"  // Place image in public/images/
  },
  {
    id: 16,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in trawling port side",
    description: "",
    fact: "Vessels engaged in trawling instead of normal fishing will indicate the fact by displaying a green light over a white light. This lets us know that there fishing nets extending from the vessel which will present a hazard to other boats.",
    imageUrl: "/images/Vessel engaged in trawling port side.png"  // Place image in public/images/
  },
  {
    id: 17,
    question: "What does this signal mean?",
    correctAnswer: "Vessel not under command",
    description: "",
    fact: "They come at the top of the ‘Stand On’ list because they can’t effectively take action to avoid a collision.",
    imageUrl: "/images/Vessel not under command.png"  // Place image in public/images/
  },
  {
    id: 18,
    question: "What does this signal mean?",
    correctAnswer: "Vessel over 50 metres aground port side",
    description: "",
    fact: "If the exceptional circumstance is because the vessel is aground the anchor lights will be displayed as well.",
    imageUrl: "/images/Vessel over 50 metres aground port side.png"  // Place image in public/images/
  },
  {
    id: 19,
    question: "What does this signal mean?",
    correctAnswer: "Vessel pushing ahead another vessel - not rigidly connected",
    description: "",
    fact: "The vessel being pushed will also display its own side lights.",
    imageUrl: "/images/Vessel pushing ahead another vessel - not rigidly connected.png"  // Place image in public/images/
  },
  {
    id: 20,
    question: "What does this signal mean?",
    correctAnswer: "Vessel restricted in ability to manoeuvre",
    description: "",
    fact: "Unlike vessels that are not under command, these are not restricted due to an exceptional circumstance. Instead, these are restricted due to the nature of their work. They could be carrying out under water surveys, diving operations, laying pipes or cable or anything else that hampers them.",
    imageUrl: "/images/Vessel restricted in ability to manoeuvre.png"  // Place image in public/images/
  },
  {
    id: 21,
    question: "What does this signal mean?",
    correctAnswer: "Vessel towing partially submerged object - less than 100 metres",
    description: "",
    fact: "When towing partially submerged objects such as pontoons or salvaged vessels, the towing lights remain the same.",
    imageUrl: "/images/Vessel towing partially submerged object - less than 100 metres.png"  // Place image in public/images/
  },
  {
    id: 22,
    question: "What does this signal mean?",
    correctAnswer: "Vessel towing partially submerged object - over 100 metres",
    description: "",
    fact: "If the object is over 100 metres in length then additional all round white lights must be installed so that the space between them does not exceed 100 metres.",
    imageUrl: "/images/Vessel towing partially submerged object - over 100 metres.png"  // Place image in public/images/
  }
];

// =================================================================
// COMPLETE EXAMPLE - Geography Quiz
// =================================================================
/*
export const QUIZ_CONFIG = {
  title: "World Capitals Quiz",
  description: "Test your knowledge of famous capital cities",
  themeColor: 'green' as const,
  quiz_name: "world_capitals_quiz"
};

export const capitalQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What capital city is this?",
    correctAnswer: "Tokyo",
    description: "The most populous metropolitan area in the world",
    fact: "Tokyo was originally known as Edo until 1868",
    imageUrl: "/images/tokyo.jpg"
  },
  {
    id: 2,
    question: "Which European capital is shown here?",
    correctAnswer: "Paris",
    description: "The capital and largest city of France",
    fact: "Paris has 20 different administrative districts called arrondissements",
    imageUrl: "/images/paris.jpg"
  },
  {
    id: 3,
    question: "Name this South American capital",
    correctAnswer: "Buenos Aires",
    description: "The capital of Argentina",
    fact: "Buenos Aires means 'fair winds' in Spanish",
    imageUrl: "/images/buenos-aires.jpg"
  }
];
*/

// =================================================================
// TIPS FOR GOOD QUESTIONS
// =================================================================
// 1. Use clear, high-quality images
// 2. Keep question text concise and specific
// 3. Ensure correct answers are unambiguous
// 4. Add interesting facts to make the quiz educational
// 5. Use consistent formatting for similar questions
// 6. Test your image paths before deploying
// =================================================================
