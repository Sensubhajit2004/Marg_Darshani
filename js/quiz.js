// js/quiz.js
import { quizQuestions, traitDescriptions, colleges, careerPaths } from './data.js';
import { showSection } from './ui.js';
import { filterAndDisplayColleges } from './colleges.js';

function displayResults(trait) {
    const resultData = traitDescriptions[trait];
    document.getElementById('results-content').innerHTML = `
        <div class="p-6 rounded-lg ${resultData.color}">
            <h3 class="text-2xl font-bold ${resultData.textColor}">Your primary trait is: ${resultData.name}</h3>
        </div>
        <p class="text-lg text-slate-700">${resultData.description}</p>
        <div>
            <h4 class="text-xl font-semibold mb-2">Recommended Stream:</h4>
            <span class="text-lg bg-indigo-100 text-indigo-800 font-bold py-2 px-4 rounded-full">${resultData.stream}</span>
        </div>
    `;
    document.getElementById('stream-filter').value = resultData.stream.split(' / ')[0];
    filterAndDisplayColleges();
    showRecommendations(trait);
}

function showRecommendations(trait) {
    const recSection = document.getElementById('recommendations-section');
    const resultData = traitDescriptions[trait];
    const recommendedColleges = colleges.filter(c => c.streams.includes(resultData.stream.split(' / ')[0])).slice(0, 2);
    const recommendedCareers = Object.keys(careerPaths).filter(path => {
        if (resultData.stream.includes('Science')) return path.includes('B.Sc.') || path.includes('B.Tech');
        if (resultData.stream.includes('Commerce')) return path.includes('B.Com') || path.includes('BBA');
        if (resultData.stream.includes('Arts')) return path.includes('B.A.');
        return false;
    }).slice(0, 2);

    document.getElementById('recommendations-content').innerHTML = `
        <div>
            <h3 class="text-xl font-semibold mb-3">Suggested Colleges</h3>
            <div class="space-y-3">${recommendedColleges.map(college => `
                <div class="bg-white p-5 rounded-lg shadow border cursor-pointer hover:shadow-lg" onclick="showCollegeDetails(${college.id})">
                    <h4 class="font-bold text-indigo-700">${college.name}</h4>
                    <p class="text-sm text-slate-500">${college.location}</p>
                </div>`).join('') || '<p class="text-slate-500">Explore all colleges!</p>'}
            </div>
        </div>
        <div>
            <h3 class="text-xl font-semibold mb-3">Potential Career Paths</h3>
            <div class="space-y-3">${recommendedCareers.map(career => `
                <div class="bg-white p-5 rounded-lg shadow border cursor-pointer hover:shadow-lg" onclick="showCareerDetails('${career}')">
                    <h4 class="font-bold text-green-700">${career}</h4>
                    <p class="text-sm text-slate-500">Explore career options...</p>
                </div>`).join('') || '<p class="text-slate-500">Explore all career paths!</p>'}
            </div>
        </div>`;
    recSection.classList.remove('hidden');
}

export function initQuiz() {
    const form = document.getElementById('quiz-form');
    if (!form) return;
    
    form.innerHTML = '';
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'mb-8 quiz-question-container';
        let optionsHtml = q.options.map(opt => `
            <label class="quiz-option">
                <input type="radio" name="question-${index}" value="${opt.trait}" class="mr-3" required>
                <span>${opt.text}</span>
            </label>
        `).join('');
        questionDiv.innerHTML = `<p class="text-lg font-semibold mb-3">${index + 1}. ${q.question}</p>${optionsHtml}`;
        form.appendChild(questionDiv);
    });

    document.getElementById('submit-quiz-btn').addEventListener('click', () => {
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        const formData = new FormData(form);
        const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
        for (let value of formData.values()) {
            scores[value]++;
        }
        const topTrait = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        displayResults(topTrait);
        showSection('results-section');
    });
}