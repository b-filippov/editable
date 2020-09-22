#editable table


#Входные данные
```
все виды данных в файле db_inventory, и еще вариант в db_students
любая на вход подключается в App.vue, для примера
=======================================
на вход дается объект с двумя массивами, первый:
columns - колонки, которые будут рендериться, где
title - название колонки, editType - тип редактора, colKey - ключ, по которому берутся данные,
selectVariants - варианты для селекта и чекбокса, если тип редактора один из них;

list - массив объектов с основными данными
где ключ это колонка, и значение соответсвенно
этот ключ должен быть указан в columns, чтобы колонка нарисовалась
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

