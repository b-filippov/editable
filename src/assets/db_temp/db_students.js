export const dbStudents = {
    columns: [
        {
            title: "Имя",
            colKey: "name",
            editType: "input"
        },
        {
            title: "Фамилия",
            colKey: "surname",
            editType: "input"
        },
        {
            title: "Средний балл",
            colKey: "point",
            editType: "select"
        }
    ],
    list: [
        {
            id: 1,
            name: "Василий",
            surname: "Первый",
            point: 5,
            classroom: 1
        },
        {
            id: 2,
            name: "Константин",
            surname: "Второй",
            point: 3,
            classroom: 2
        },
        {
            id: 3,
            name: "Илья",
            surname: "Третий",
            point: 4,
            classroom: 2
        },
        {
            id: 4,
            name: "Сергей",
            surname: "Четвертый",
            point: 4,
            classroom: 2
        }
    ]
};
