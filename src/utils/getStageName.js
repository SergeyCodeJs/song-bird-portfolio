export default function getStageName(index = []) {
    const data = [
        'Разные',
        'Воробьи',
        'Лесные',
        'Певчие',
        'Хищные',
        'Морские'
    ];

    return typeof index === "object"
        ? data
        : data[index];
}