function submitQuiz() {
    // Get all form elements
    const quizForm = document.getElementById('quizForm');
    const answers = quizForm.elements;
    let score = 0;
    const totalQuestions = 10;  // Total number of questions

    // Store correct answers
    const correctAnswers = {
        q1: 'correct',
        q2: 'correct',
        q3: 'correct',
        q4: 'correct',
        q5: 'correct',
        q6: 'correct',
        q7: 'correct',
        q8: 'correct',
        q9: 'correct',
        q10: 'correct'
    };

    // Loop through each question and check answers
    for (let i = 1; i <= totalQuestions; i++) {
        const question = `q${i}`;
        const selectedOption = quizForm[question].value;

        const correctAnswer = correctAnswers[question];

        // Select all options for the question
        const options = document.querySelectorAll(`input[name="${question}"]`);
        options.forEach((option) => {
            const label = document.querySelector(`label[for="${option.id}"]`);
            if (option.value === correctAnswer) {
                label.style.color = 'green'; // Mark correct answers green
                if (option.checked) score++; // Increase score for correct answer
            } else {
                if (option.checked) {
                    label.style.color = 'red'; // Mark wrong answer red
                }
            }
        });
    }

    // Display the score
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your Score: ${score} out of ${totalQuestions}`;
}
