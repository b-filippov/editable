#Editable table

#Спецификация
```
DESCRIPTION:
=============================================================================
1. Компонент отрисовывает таблицу по заданным параметрам(см. INNER PARAMS -> list).
2. Каждая ячейка редактируется и для каждой ячейки можно задать тип редактора (string|number|select|checkbox).
3. Количество колонок и их названия задаются вручную, согласно входным данным из list (см. INNER PARAMS)
4. При редактировании все данные находятся в локальном хранилище и их можно получить(сохранить) вызвав метод save(см. PUBLIC METHODS).
    Все остальные методы(PRIVATE METHODS) необходимы только для внутренних модификаций данных и за пределы компонента события не выходят.
5. На текущий момент не реализован вид редактора checkbox и возможность вставки своего редактора.

INNER PARAMS:
=============================================================================
{
    columns: [ //колонки, этот список строится разрабочиком в зависимости от колонок, которые должны прийти
        {
            title: string, //название колонки
            colKey: string, //ключ колонки для действий и отрисовки
            editType: string, //тип редактора колонки: string|number|select|checkbox
            selectVariants?: [ //варианты для типов select|checkbox
                {
                    value: any, //значение
                    title: string //заголовок для рендера
                },
                ...
            ]
        },
        ...
    ],
    list: [ //список строк таблицы
        {
            id: number, //идентификатор строки
            [colKey]: any //ключ строки(должен соответствовать ключу colKey в columns) и значение соответствующее editType колонки
            ...
        },
        ...
    ]
}

PRIVATE METHODS:
=============================================================================
addItem - добавляет новую строку с пустыми данными в начало списка
edit - принимает новое значение ячейки таблицв и сохраняет список
remove - принимает индекс строки и удаляет ее из списка
copyItem - копирует в буфер данные строки в формате "columnTitle:columnData; ..."
toUp - принимает индекс строки и меняет текущую строку с предыдущей местами(перемещает вверх)
toDown - принимает индекс строки и меняет текущую строку со следующей местами(перемещает вниз)

PUBLIC METHODS:
=============================================================================
save: () => list //возвращает измененный список переданных сущностей в том же формате, что принял компонент
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

