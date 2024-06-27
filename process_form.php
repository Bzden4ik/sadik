<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sadik";

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получаем данные из формы
$name = $_POST['name'];
$age = $_POST['age'];
$parent_name = $_POST['parent_name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Подготавливаем SQL-запрос для вставки данных
$sql = "INSERT INTO Обратная_Связь (Имя_ребенка, Возраст_ребенка, Имя_родителя, Телефон, Email, Сообщение)
VALUES ('$name', '$age', '$parent_name', '$phone', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Запись успешно добавлена";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

// Закрываем соединение
$conn->close();
?>
