export const dbInventory = {
    columns: [
        {
            title: "Название",
            colKey: "title",
            editType: "text"
        },
        {
            title: "Количевство",
            colKey: "count",
            editType: "number"
        },
        {
            title: "Состояние",
            colKey: "condition",
            editType: "select",
            selectVariants: [
                {
                    value: "new",
                    title: "Новое"
                },
                {
                    value: "acceptable",
                    title: "Приемлемое"
                },
                {
                    value: "cancellation",
                    title: "Списано"
                }
            ]
        },
        {
            title: "На складе",
            colKey: "warehouse",
            editType: "checkbox"
        }
    ],
    list: [
        {
            id: 1,
            title: "Стул",
            count: 72,
            condition: "Новое",
            warehouse: "Да",
        },
        {
            id: 1,
            title: "Стол",
            count: 56,
            condition: "Приемлемое",
            warehouse: "Нет",
        }
    ]
};
