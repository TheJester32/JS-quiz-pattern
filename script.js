<script>
    const controlQuiz = function(){
    const answers = document.querySelectorAll('.quiz__question-answer');
    const answersContent = document.querySelectorAll('.quiz__answer-content');
    const answersButtons = document.querySelectorAll('.quiz__answer-button');
    const nextQuestionBtns = document.querySelectorAll('.nextBtn')
    const questions = document.querySelectorAll('.quiz__question-wrapper');

    answersContent.forEach(el => el.classList.add('hidden'));
    questions.forEach((el, i) => {
        if(i !== 0){
            el.classList.add('hidden');
        }
    })

        function showAnswersContent(index) {
            answersContent.forEach((el, i) => {
                if (i === index) {
                    el.classList.toggle('hidden');
                    if (!el.classList.contains('hidden')) {
                        el.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    el.classList.add('hidden');
                }
            });
        }

        answers.forEach((answer, index) => {
            const input = answer.querySelector('input[type="radio"]');
            const label = answer.querySelector('label');

            if (input || label) {
                input.addEventListener('click', () => {
                    showAnswersContent(index);
                    answers.forEach(ans => ans.style['pointer-events'] = 'none');
                });
            }
        });

        answersButtons.forEach((el, index) => {
            el.addEventListener('click', () => {
                showAnswersContent(index);
                answers.forEach(ans => ans.style['pointer-events'] = 'auto');
            });
        });

        nextQuestionBtns.forEach(btn => btn.addEventListener('click', () => {
            const currentQuestion = document.querySelector('.quiz__question-wrapper:not(.hidden)');
            if (currentQuestion) {
                const currentIndex = Array.from(questions).indexOf(currentQuestion);
                currentQuestion.classList.add('hidden');
                if (currentIndex + 1 < questions.length) {
                    questions[currentIndex + 1].classList.remove('hidden');
                }
            }
        }));

    }
    controlQuiz();
</script>
