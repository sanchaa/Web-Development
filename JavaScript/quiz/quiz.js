/////////////////// JAVASCRIPT 'Quick Quiz' BASED ON HBO'S EUPHORIA ///////////////////


/* The HTML elements to store references to them in variables */

const quizContainer = document.getElementById ('quiz');
const resultsContainer = document.getElementById ('results');
const submitButton = document.getElementById ('submit');
const revealButton = document.getElementById ('reveal');

//Building the quiz, to show results //

/* Layout of functions */

function buildQuiz () {

}

function showResults () {

}

//display quiz //
revealButton.addEventListener ('click', buildQuiz);

// buildQuiz ();

// upon submission of quiz, show the results //

submitButton.addEventListener ('click', showResults);


//Displaying the array of Quiz Questions
/* objects- have the key (name of thing your adding to object) and then value of the name
*/

const myQuestions = [
     {
          question: 'Q 1: part i) When was Rue born?',
          answers: {
               a: "14th September 2001",
               b: "11th September 2001",
               c: "12th September 2001"
          }, 
         correctAnswer: "b: 11th September 2001 "
     },

     { 
          question: 'Q 2: part ii) "Rue was born 3 days after...',
          answers: {
               a: "The 77 bombings",
               b: "9/11",
               c: "Donald Trump's birthday"
     },
          correctAnswer: "b: 9/11"

},

     {
          question: "Q 3: What is the name of Fezco's brother?",
          answers: {
               a: "Andy",
               b: "Ashley",
               c: "Ashtray"
          },
          correctAnswer: "c: Ashtray"

     },

        
         { 
            question:  'Q 4: What is the real-life name of the actress that plays Jules?',
          answers: {
               a: "Hunter Shafter",
               b: "Hunter Schafer",
               c: "Hunter Shelter"
          },
           correctAnswer: "b: Hunter Schafer"

     },



       {  
            question: 'Q 5: In the pilot, Rue spent a large portion of the summer where?',
          answers: {
               a: "In rehab",
               b: "In the hospital",
               c: "In the kitchen"
          },
           correctAnswer: "a: In rehab"
},

     { 
         question: 'Q 6: part i) Who does Maddie date in the show?',
          answers: {
               a: "Christopher Mackay",
               b: "Nate Jacobs",
               c: "Tyler Oakley"
          },
          correctAnswer:  "b: Nate Jacobs"
     },


     {
         question: 'Q 7: part ii) Where does Maddie break up with Nate, for real?',
          answers: {
               a: "At the Carnival",
               b: "In Nate's bedroom",
               c: "At Winter Formal"
          },
               correctAnswer:  "c: At Winter Formal"
          },

     {
          question: 'Q 8: What does Rue find Gia doing at the Carnival?',
          answers: {
               a: "Throwing up",
               b: "Smoking Weed",
               c: "Dancing with a stranger"
          },
               correctAnswer:  "b: Smoking Weed"

     }];
     

     function buildQuiz(){
          // variable to store the HTML output which is the array
          const output = [];

          // for each question...
  myQuestions.forEach(
     (currentQuestion, questionNumber) => {
const answers  = [];

          // and for each available answer...
      for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
             </input>
             </label>`
          );
      }
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
     }
  ) 
// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}


