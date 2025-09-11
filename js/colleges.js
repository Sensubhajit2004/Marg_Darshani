// js/colleges.js
import { colleges } from './data.js';
import { showDetailModal } from './ui.js';
import { saveCollege } from './dashboard.js'; // Import the save function

const collegeList = document.getElementById('college-list');
const noCollegesFound = document.getElementById('no-colleges-found');

function displayColleges(collegesToDisplay) {
    collegeList.innerHTML = '';
    noCollegesFound.classList.toggle('hidden', collegesToDisplay.length > 0);
    collegeList.classList.toggle('hidden', collegesToDisplay.length === 0);

    collegesToDisplay.forEach(college => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer';
        card.innerHTML = `
            <img src="${college.image}" alt="${college.name}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-1">${college.name}</h3>
                <p class="text-slate-500 mb-4">${college.location}</p>
                <div class="flex flex-wrap gap-2">${college.streams.map(s => `<span class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-1 rounded-full">${s}</span>`).join('')}</div>
            </div>`;
        card.addEventListener('click', () => showCollegeDetails(college.id));
        collegeList.appendChild(card);
    });
}

// This function is attached to the window to be globally accessible from HTML
window.showCollegeDetails = function(id) {
    const college = colleges.find(c => c.id === id);
    if (!college) return;
    const content = `
        <img src="${college.image}" alt="${college.name}" class="w-full h-60 object-cover rounded-t-xl -mt-8 -mx-8 md:-mt-10 md:-mx-10">
        <div class="pt-6">
            <h2 class="text-3xl font-bold mb-2">${college.name}</h2><p class="text-lg text-slate-500 mb-6">${college.location}</p>
            <div class="space-y-4">
                <div><h4 class="font-semibold text-slate-800">Available Streams:</h4><div class="flex flex-wrap gap-2 mt-2">${college.streams.map(s => `<span class="bg-indigo-100 text-indigo-800 font-medium px-3 py-1 rounded-full">${s}</span>`).join('')}</div></div>
                <div><h4 class="font-semibold text-slate-800">Major Courses:</h4><p class="text-slate-600">${college.courses.join(', ')}</p></div>
                <div><h4 class="font-semibold text-slate-800">Cut-off (Approx):</h4><p class="text-slate-600">${college.cutoff}</p></div>
                <div><h4 class="font-semibold text-slate-800">Facilities:</h4><p class="text-slate-600">${college.facilities.join(', ')}</p></div>
            </div>
             <div class="mt-8 text-center"><button id="save-college-btn" class="primary-button">Save to My List</button></div>
        </div>`;
    
    showDetailModal(content);

    // --- FIX ---
    // After the modal content is created, find the button and add the click listener.
    document.getElementById('save-college-btn').addEventListener('click', () => saveCollege(id));
}

export function filterAndDisplayColleges() {
    const searchTerm = document.getElementById('college-search').value.toLowerCase();
    const location = document.getElementById('location-filter').value;
    const stream = document.getElementById('stream-filter').value;
    const filtered = colleges.filter(c =>
        c.name.toLowerCase().includes(searchTerm) &&
        (!location || c.location === location) &&
        (!stream || c.streams.includes(stream))
    );
    displayColleges(filtered);
}

function populateFilters() {
    const locationFilter = document.getElementById('location-filter');
    const locations = [...new Set(colleges.map(c => c.location))];
    locations.sort().forEach(loc => {
        const option = document.createElement('option');
        option.value = loc;
        option.textContent = loc;
        locationFilter.appendChild(option);
    });
}

export function initColleges() {
    displayColleges(colleges);
    populateFilters();
    document.getElementById('college-search').addEventListener('input', filterAndDisplayColleges);
    document.getElementById('location-filter').addEventListener('change', filterAndDisplayColleges);
    document.getElementById('stream-filter').addEventListener('change', filterAndDisplayColleges);
}
