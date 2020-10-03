const ADMIN_PASSWORD = "228";

password = prompt("password");

if (ADMIN_PASSWORD === password) {
    messeage = ('Ласкаво просимо!');
} else if (password === null) {
    messeage = ('Скасовано користувачем!');
} else {
    messeage = ('Доступ заборонений, невірний пароль!');
}

alert(messeage);