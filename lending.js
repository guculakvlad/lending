function submitReview(){
var nameInput = document.getElementById("name").value.trim();
var cyrillicPattern = /^[А-Яа-яЁёІіЇїЄєҐґ' -]+$/;
var mobileInput = document.getElementById("mobil").value.trim();
var phonePattern = /^(380\d{9}|0\d{9})$/;

if (nameInput === "") {
    alert("Заповніть поле імені.");
} else if (!cyrillicPattern.test(nameInput)) {
    alert("Ім'я повинно містити тільки кирилицю.");
} else if (mobileInput === "") {
    alert("Заповніть поле номера телефону.");
} else if (!phonePattern.test(mobileInput)) {
    alert("Номер телефону повинен починатися з 380 або 0 і містити 10 або 12 цифр.");
}
}