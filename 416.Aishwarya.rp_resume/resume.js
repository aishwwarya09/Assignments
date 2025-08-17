node -v
let resume = {
    name: "",
    email: "",
    phone: "",
    address: "",
    education: [],
    skills: [],
    experience: []
};

function getInput(question) {
    return prompt(question);
}

resume.name = getInput("Enter your full name:");
resume.email = getInput("Enter your email:");
resume.phone = getInput("Enter your phone number:");
resume.address = getInput("Enter your address:");


let eduCount = parseInt(getInput("How many education details do you want to add?"));
for (let i = 0; i < eduCount; i++) {
    resume.education.push(getInput(`Enter education detail ${i + 1}:`));
}

let skillCount = parseInt(getInput("How many skills do you want to add?"));
for (let i = 0; i < skillCount; i++) {
    resume.skills.push(getInput(`Enter skill ${i + 1}:`));
}


let expCount = parseInt(getInput("How many experiences do you want to add?"));
for (let i = 0; i < expCount; i++) {
    resume.experience.push(getInput(`Enter experience ${i + 1}:`));
}

console.log("===");
console.log(resume.name.toUpperCase());
console.log(`Email: ${resume.email} | Phone: ${resume.phone}`);
console.log(`Address: ${resume.address}`);
console.log("===");

console.log("\nEDUCATION:");
resume.education.forEach((edu) => console.log("- " + edu));

console.log("\nSKILLS:");
resume.skills.forEach((skill) => console.log("- " + skill));

console.log("\nEXPERIENCE:");
resume.experience.forEach((exp) => console.log("- " + exp));

console.log("===");
resumeGenerator.js