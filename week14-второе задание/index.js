// Создание пустого массива оценок
let grades = [];

// Заполнение массива случайными оценками
for (let i = 0; i < 12; i++) {
  let grade = Math.floor(Math.random() * 100) + 1;
  grades.push(grade);
}

// Расчет и вывод среднего балла студентов
let averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log('Средний балл студентов:', averageGrade);

// Поиск и вывод максимального балла
let maxGrade = Math.max(...grades);
console.log('Максимальный балл:', maxGrade);

// Поиск и вывод минимального балла
let minGrade = Math.min(...grades);
console.log('Минимальный балл:', minGrade);

// Подсчет и вывод количества студентов с положительной оценкой
let positiveGradesCount = grades.filter(grade => grade >= 60).length;
console.log('Количество студентов с положительной оценкой:', positiveGradesCount);

// Подсчет и вывод количества студентов с отрицательной оценкой
let negativeGradesCount = grades.filter(grade => grade < 60).length;
console.log('Количество студентов с отрицательной оценкой:', negativeGradesCount);

// Преобразование числовых оценок в буквенные оценки
let letterGrades = grades.map(grade => {
  if (grade >= 80 && grade <= 100) {
    return 'A';
  } else if (grade >= 60 && grade < 80) {
    return 'B';
  } else if (grade >= 40 && grade < 60) {
    return 'C';
  } else if (grade >= 20 && grade < 40) {
    return 'D';
  } else {
    return 'E';
  }
});

console.log('Буквенные оценки:', letterGrades);