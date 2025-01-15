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
  title: "ColRegs Night Lights Quiz",
  description: "Test your knowledge on navigation night lights",
  themeColor: 'blue' as const,  // Options: 'blue' | 'green' | 'sky' | 'red'
  quiz_name: "colregs_night" // Unique identifier for the quiz, used in database
};

// Example questions - Replace with your own
export const templateQuestions: QuestionData[] = [
  {
    id: 1,
    question: "What does this signal mean?",
    correctAnswer: "Air cushioned vehicle non displacement mode from port side",
    description: "",
    fact: "",
    imageUrl: "/images/Air cushioned vehicle_non displacement mode_from port side.png"  // Place image in public/images/
  },
  {
    id: 2,
    question: "What does this signal mean?",
    correctAnswer: "Mine Sweeper from ahead",
    description: "",
    fact: "",
    imageUrl: "/images/Mine Sweeper_from ahead.png"  // Place image in public/images/
  },
  {
    id: 3,
    question: "What does this signal mean?",
    correctAnswer: "Pilot Vessel on duty starboard side",
    description: "",
    fact: "",
    imageUrl: "/images/Pilot Vessel_on duty_Starboard side.png"  // Place image in public/images/
  },
  {
    id: 4,
    question: "What does this signal mean?",
    correctAnswer: "Powered vessel less than 50 m from ahead",
    description: "",
    fact: "",
    imageUrl: "/images/Powered vessel less than 50 m_from ahead.png"  // Place image in public/images/
  },
  {
    id: 5,
    question: "What does this signal mean?",
    correctAnswer: "Powered vessel more than 50 m from ahead ",
    description: "",
    fact: "",
    imageUrl: "/images/Powered vessel more than 50 m from ahead.png"  // Place image in public/images/
  },
  {
    id: 6,
    question: "What does this signal mean?",
    correctAnswer: "Sailing vessel less than 20 m from ahead",
    description: "",
    fact: "",
    imageUrl: "/images/Sailing vessel_less than 20m_from ahead.png"  // Place image in public/images/
  },
  {
    id: 7,
    question: "What does this signal mean?",
    correctAnswer: "Sailing vessel over 20 m from ahead",
    description: "",
    fact: "",
    imageUrl: "/images/Sailing vessel_over 20m_from ahead.png"  // Place image in public/images/
  },
  {
    id: 8,
    question: "What does this signal mean?",
    correctAnswer: "Vessel constrained by draught from starboard",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_constrained by draught_from starboard.png"  // Place image in public/images/
  },
  {
    id: 9,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in fishing starboard side",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_engaged in fishing_Starboard side.png"  // Place image in public/images/
  },
  {
    id: 10,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in pair trawling hauling nets",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_engaged in pair trawling_hauling nets.png"  // Place image in public/images/
  },
  {
    id: 11,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in pair trawling nets held fast by obstruction",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_engaged in pair trawling_nets held fast by obstruction.png"  // Place image in public/images/
  },
  {
    id: 12,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in pair trawling shooting nets",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_engaged in pair trawling_shooting nets.png"  // Place image in public/images/
  },
  {
    id: 13,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in purse seine fishing hampered by gear portside",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_engaged in purse seine fishing_hampered by gear_portside.png"  // Place image in public/images/
  },
  {
    id: 14,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in towing less than 200 m starboard side",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_engaged in towing_less than 200m_Starboard side.png"  // Place image in public/images/
  },
  {
    id: 15,
    question: "What does this signal mean?",
    correctAnswer: "Vessel engaged in towing more than 200 m portside",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_engaged in towing_more than 200 m_portside.png"  // Place image in public/images/
  },
  {
    id: 16,
    question: "What does this signal mean?",
    correctAnswer: "Vessel_engaged in trawling_Portside",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_engaged in trawling_Portside.png"  // Place image in public/images/
  },
  {
    id: 17,
    question: "What does this signal mean?",
    correctAnswer: "Vessel not under command",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_not under command.png"  // Place image in public/images/
  },
  {
    id: 18,
    question: "What does this signal mean?",
    correctAnswer: "Vessel_over 50 m aground from port side",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_over 50 m_aground_from port side.png"  // Place image in public/images/
  },
  {
    id: 19,
    question: "What does this signal mean?",
    correctAnswer: "Vessel pushing ahead another vessel not rigidly connected",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_pushing ahead another vessel_not rigidly connected.png"  // Place image in public/images/
  },
  {
    id: 20,
    question: "What does this signal mean?",
    correctAnswer: "Vessel restricted in ability to maneuver",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_restricted in ability to maneuver.png"  // Place image in public/images/
  },
  {
    id: 21,
    question: "What does this signal mean?",
    correctAnswer: "Vessel towing partially submerged object less than 100m",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_towing partially submerged object_less than 100m.png"  // Place image in public/images/
  },
  {
    id: 22,
    question: "What does this signal mean?",
    correctAnswer: "Vessel towing partially submerged object more than 100m",
    description: "",
    fact: "",
    imageUrl: "/images/Vessel_towing partially submerged object_more than 100m.png"  // Place image in public/images/
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
