function registerPatient() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password || !contact) {
        alert("⚠️ Please fill all fields!");
        return;
    }

    alert(`✅ Registration Successful!\n\nPatient Details:\nName: ${name}\nEmail: ${email}\nContact: ${contact}`);
}
