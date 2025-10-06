/** @type {import('tailwindcss').Config} */
module.exports = {
    // ... другие настройки
    theme: {
        extend: {
            colors: {
                'tolkien-bg': '#f3f2e1', // Светло-кремовый фон
                'tolkien-primary': '#4a4944', // Темно-серый/коричневый для текста
                'tolkien-accent': '#a1885f', // Приглушенный золотисто-коричневый для акцентов/ссылок
            },
            fontFamily: {
                serif: ['"PT Serif"', 'serif'], // или любой другой классический шрифт
                sans: ['"Garamond Premier Pro"', 'serif'], // если использовать оригинальные шрифты
            },
        },
    },
    // ...
}