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
            editType: "checkbox",
            selectVariants: [
                {
                    value: "",
                    title: ""
                }
            ]
        }
    ],
    list: [
        {
            id: 1,
            title: "Стул",
            count: 72,
            condition: "new",
            warehouse: ""
        },
        {
            id: 2,
            title: "Стол",
            count: 56,
            condition: "cancellation",
            warehouse: ""
        }
    ]
};
