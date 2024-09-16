var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    var profilePictureElement = document.getElementById('profilePicture');
    if (nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var skills_1 = skillsElement.value;
        var experience_1 = experienceElement.value;
        var profilePictureURL_1 = 'img.png';
        if (profilePictureElement && profilePictureElement.files && profilePictureElement.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                if (e.target && e.target.result) {
                    profilePictureURL_1 = e.target.result.toString();
                    updateResumeOutput(name_1, email_1, phone_1, education_1, skills_1, experience_1, profilePictureURL_1);
                }
            };
            reader.readAsDataURL(profilePictureElement.files[0]);
        }
        else {
            // If no profile picture is uploaded, update without image
            updateResumeOutput(name_1, email_1, phone_1, education_1, skills_1, experience_1, profilePictureURL_1);
        }
    }
    else {
        console.error('One or more form elements are missing!');
    }
});
function updateResumeOutput(name, email, phone, education, skills, experience, profilePictureURL) {
    // Creating resume output
    var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"output-img\">") : '', "\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error('The resume output element is missing!');
    }
}
