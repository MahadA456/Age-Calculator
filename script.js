function calculateAge() {
    var dob = document.getElementById('dob').value;
    var dobDate = new Date(dob);
    var now = new Date();
    var age = now.getFullYear() - dobDate.getFullYear();
    var m = now.getMonth() - dobDate.getMonth();

    if (m < 0 || (m === 0 && now.getDate() < dobDate.getDate())) {
        age--;
    }

    var result = document.getElementById('result');
    if (!dob) {
        result.textContent = 'Please enter your date of birth.';
    } else {
        result.textContent = 'You are ' + age + ' years old.';
    }
}
