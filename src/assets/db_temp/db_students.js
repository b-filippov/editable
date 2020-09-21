export const dbStudents = {
    columns: [
        {
            title: "Имя",
            colKey: "name",
            editType: "text"
        },
        {
            title: "Фамилия",
            colKey: "surname",
            editType: "text"
        },
        {
            title: "Средний балл",
            colKey: "point",
            editType: "number"
        }
    ],
    list: [
        {
            id: 1,
            name: "Василий",
            surname: "Первый",
            point: 5
        },
        {
            id: 2,
            name: "Константин",
            surname: "Второй",
            point: 3
        },
        {
            id: 3,
            name: "Илья",
            surname: "Третий",
            point: 4
        },
        {
            id: 4,
            name: "Сергей",
            surname: "Четвертый",
            point: 4
        }
    ]
};
