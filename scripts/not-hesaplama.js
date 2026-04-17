const gradeForm = document.getElementById("grade-form");
const gradeError = document.getElementById("grade-error");
const gradeResult = document.getElementById("grade-result");

const resultFields = {
    name: document.querySelector('[data-field="name"]'),
    average: document.querySelector('[data-field="average"]'),
    letter: document.querySelector('[data-field="letter"]'),
    status: document.querySelector('[data-field="status"]')
};

function parseScore(value) {
    return Number(String(value).replace(",", ".").trim());
}

function calculateLetterGrade(score) {
    if (score >= 90) return "AA";
    if (score >= 85) return "BA";
    if (score >= 80) return "BB";
    if (score >= 70) return "CB";
    if (score >= 60) return "CC";
    if (score >= 50) return "DC";
    if (score >= 40) return "DD";
    return "FF";
}

gradeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("student-name").value.trim();
    const midterm = parseScore(document.getElementById("midterm-score").value);
    const finalScore = parseScore(document.getElementById("final-score").value);

    if (!name) {
        gradeError.textContent = "Lutfen ogrenci adini girin.";
        gradeResult.hidden = true;
        return;
    }

    if (Number.isNaN(midterm) || Number.isNaN(finalScore)) {
        gradeError.textContent = "Vize ve final alanlarina gecerli sayisal deger girin.";
        gradeResult.hidden = true;
        return;
    }

    if (midterm < 0 || midterm > 100 || finalScore < 0 || finalScore > 100) {
        gradeError.textContent = "Notlar 0 ile 100 arasinda olmalidir.";
        gradeResult.hidden = true;
        return;
    }

    const average = midterm * 0.4 + finalScore * 0.6;
    const isPassed = average >= 50;

    gradeError.textContent = "";
    gradeResult.hidden = false;
    gradeResult.classList.remove("pass", "fail");
    gradeResult.classList.add(isPassed ? "pass" : "fail");

    resultFields.name.textContent = name;
    resultFields.average.textContent = average.toFixed(2);
    resultFields.letter.textContent = calculateLetterGrade(average);
    resultFields.status.textContent = isPassed ? "Gecti" : "Kaldi";
});
