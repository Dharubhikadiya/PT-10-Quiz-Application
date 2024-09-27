const quizzes = {
    1: {
      id: 1,
      title: "General Knowledge Quiz",
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["London", "Berlin", "Paris", "Madrid"],
          correctAnswer: "Paris"
        },
        {
          id: 2,
          question: "Which planet is known as the Red Planet?",
          options: ["Mars", "Jupiter", "Venus", "Saturn"],
          correctAnswer: "Mars"
        },
        {
          id: 3,
          question: "Who painted the Mona Lisa?",
          options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
          correctAnswer: "Leonardo da Vinci"
        },
        {
          id: 4,
          question: "What is the largest ocean on Earth?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          correctAnswer: "Pacific Ocean"
        },
        {
          id: 5,
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "South Korea", "Japan", "Thailand"],
          correctAnswer: "Japan"
        }
      ]
    },
    2: {
      id: 2,
      title: "Science Quiz",
      questions: [
        {
          id: 1,
          question: "What is the chemical symbol for water?",
          options: ["Wa", "H2O", "O2H", "H2O2"],
          correctAnswer: "H2O"
        },
        {
          id: 2,
          question: "Which of these is not a state of matter?",
          options: ["Solid", "Liquid", "Gas", "Energy"],
          correctAnswer: "Energy"
        },
        {
          id: 3,
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Jupiter"
        },
        {
          id: 4,
          question: "What is the smallest unit of matter?",
          options: ["Atom", "Molecule", "Cell", "Electron"],
          correctAnswer: "Atom"
        },
        {
          id: 5,
          question: "What is the speed of light?",
          options: ["299,792 km/s", "300,000 km/s", "199,792 km/s", "250,000 km/s"],
          correctAnswer: "299,792 km/s"
        }
      ]
    },
    3: {
      id: 3,
      title: "History Trivia",
      questions: [
        {
          id: 1,
          question: "In which year did World War II end?",
          options: ["1943", "1945", "1947", "1950"],
          correctAnswer: "1945"
        },
        {
          id: 2,
          question: "Who was the first President of the United States?",
          options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
          correctAnswer: "George Washington"
        },
        {
          id: 3,
          question: "Which ancient wonder was located in Alexandria, Egypt?",
          options: ["The Hanging Gardens", "The Lighthouse", "The Colossus", "The Great Pyramid"],
          correctAnswer: "The Lighthouse"
        },
        {
          id: 4,
          question: "In which year did Christopher Columbus first reach the Americas?",
          options: ["1492", "1500", "1510", "1520"],
          correctAnswer: "1492"
        },
        {
          id: 5,
          question: "Who was the first woman to win a Nobel Prize?",
          options: ["Marie Curie", "Mother Teresa", "Rosa Parks", "Florence Nightingale"],
          correctAnswer: "Marie Curie"
        }
      ]
    }
  };
  
  export const fetchQuizById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const quiz = quizzes[id];
        if (quiz) {
          resolve(quiz);
        } else {
          reject(new Error('Quiz not found'));
        }
      }, 500); 
    });
  };