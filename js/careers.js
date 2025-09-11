// js/careers.js
import { careerPaths } from './data.js';
import { showDetailModal } from './ui.js';

window.showCareerDetails = function(path) {
    const data = careerPaths[path];
    if (!data) return;
    const content = `
        <h2 class="text-3xl font-bold text-indigo-700 mb-4">${path}</h2>
        <p class="text-slate-600 mb-6">${data.description}</p>
        <div class="space-y-6">
            <div><h4 class="text-lg font-semibold text-green-700 mb-2">Government Job Opportunities</h4><ul class="list-disc list-inside text-slate-600 space-y-1">${data.govJobs.map(j => `<li>${j}</li>`).join('')}</ul></div>
            <div><h4 class="text-lg font-semibold text-sky-700 mb-2">Private Sector Roles</h4><ul class="list-disc list-inside text-slate-600 space-y-1">${data.privateJobs.map(j => `<li>${j}</li>`).join('')}</ul></div>
            <div><h4 class="text-lg font-semibold text-purple-700 mb-2">Higher Education Paths</h4><ul class="list-disc list-inside text-slate-600 space-y-1">${data.higherStudies.map(j => `<li>${j}</li>`).join('')}</ul></div>
        </div>`;
    showDetailModal(content);
}

export function initCareers() {
    const list = document.getElementById('career-path-list');
    list.innerHTML = Object.keys(careerPaths).map(path => `
        <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200 cursor-pointer hover:border-indigo-400 hover:shadow-indigo-100 transition-all" onclick="showCareerDetails('${path}')">
            <h3 class="text-xl font-bold text-slate-800">${path}</h3>
        </div>`).join('');
}