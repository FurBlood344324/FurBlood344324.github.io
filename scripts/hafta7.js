const html = document.documentElement;
const themeButton = document.querySelector('#hero button[type="button"]');

themeButton.addEventListener('click', function () {
    const isDark = html.getAttribute('data-bs-theme') === 'dark';

    if (isDark) {
        html.removeAttribute('data-bs-theme');
        themeButton.textContent = 'Koyu Temaya Geç';
    } else {
        html.setAttribute('data-bs-theme', 'dark');
        themeButton.textContent = 'Açık Temaya Geç';
    }

    themeButton.classList.toggle('btn-outline-secondary');
    themeButton.classList.toggle('btn-outline-light');
});

const form = document.querySelector('#application-form form');
const resultAlert = document.querySelector('#application-form .alert');

const fullNameInput = form.querySelectorAll('input[type="text"]')[0];
const departmentInput = form.querySelectorAll('input[type="text"]')[1];
const emailInput = form.querySelector('input[type="email"]');
const gradeSelect = form.querySelectorAll('select')[0];
const sessionSelect = form.querySelectorAll('select')[1];
const participationSelect = form.querySelectorAll('select')[2];
const messageInput = form.querySelector('textarea');
const consentCheckbox = form.querySelector('input[type="checkbox"]');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const department = departmentInput.value.trim();
    const grade = gradeSelect.value;
    const session = sessionSelect.value;
    const participationType = participationSelect.value;
    const message = messageInput.value.trim();
    const isConsentGiven = consentCheckbox.checked;

    if (!fullName || !email || !department || !isConsentGiven) {
        resultAlert.className = 'alert alert-danger mt-4 mb-0';
        resultAlert.innerHTML = '<strong>Hata!</strong> Lütfen zorunlu alanları doldurun ve onay kutusunu işaretleyin.';
        return;
    }

    resultAlert.className = 'alert alert-success mt-4 mb-0';
    resultAlert.innerHTML = `
        <h5 class="alert-heading">Başvuru Özeti</h5>
        <hr>
        <p><strong>Ad Soyad:</strong> ${fullName}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Bölüm:</strong> ${department}</p>
        <p><strong>Sınıf:</strong> ${grade}</p>
        <p><strong>Katılım Türü:</strong> ${participationType}</p>
        <p><strong>Seçilen Oturum:</strong> ${session}</p>
        ${message ? `<p><strong>Mesaj:</strong> ${message}</p>` : ''}
        <hr>
        <p class="mb-0">Başvurunuz başarıyla alındı!</p>
    `;
});