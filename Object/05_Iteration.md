Итерация по объектам в JavaScript может быть выполнена несколькими способами, в зависимости от того, что именно вам нужно. Вот несколько основных методов:

**`for...in`**:

Используется для итерации по перечисляемым свойствам объекта. Этот метод проходит по всем собственным и унаследованным перечисляемым свойствам.

    ```js
    const obj = { a: 1, b: 2, c: 3 };

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
    ```

**`Object.keys`**:

Возвращает массив из собственных перечисляемых свойств объекта, которые можно затем перебирать с помощью `forEach`, `for...of` или других методов.

    ```js
    const obj = { a: 1, b: 2, c: 3 };
    const keys = Object.keys(obj);

    keys.forEach(key => {
        console.log(`${key}: ${obj[key]}`);
    });
    ```

**`Object.values`**:

Возвращает массив значений собственных перечисляемых свойств объекта.

    ```js
    const obj = { a: 1, b: 2, c: 3 };
    const values = Object.values(obj);

    values.forEach(value => {
        console.log(value);
    });
    ```

**`Object.entries`**:

Возвращает массив пар [ключ, значение], который можно перебирать с помощью `for...of` или других методов.

    ```js
    const obj = { a: 1, b: 2, c: 3 };
    const entries = Object.entries(obj);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
    ```

**`for...of` с `Object.keys`, `Object.values` или `Object.entries`**:

    Пример использования `for...of` с `Object.entries`:

    ```js
    const obj = { a: 1, b: 2, c: 3 };

    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }
    ```

Выберите метод, который наилучшим образом подходит для вашей задачи. Например, если вам нужно только значения, используйте `Object.values`, если только ключи — `Object.keys`, а если пары ключ-значение — `Object.entries`.
