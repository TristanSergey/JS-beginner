'use strict';

const task = {
    title: 'Task1',
    dueTo: new Date('2023-01-01'),

    isOverdueOld() {
        return this.dueTo < new Date(); // реализация через метод
    },

    get isOverdue() {
        return this.dueTo < new Date(); // реализация через Getter
    },

    set isOverdue(isOverdueTask) {
        if (!isOverdueTask) {
            this.dueTo = new Date();
        }
    },
};

console.log(task.isOverdueOld()); // к методу  обращаемся как к функции
console.log(task.isOverdue); // к getter обращаемся как к свойству
task.isOverdue = false;
console.log(task.isOverdue); // к setter обращаемся как к свойству

class Task {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    get isOverdue() {
        return this.dueTo < new Date(); // реализация через Getter
    }
    set dueDate(date) {
        if (date < new Date()) {
            return;
        }
        //this.dueDate  = date;  // рекурсия!!!! работать не будет!!!!
        this._dueDate = date;
    }
}

const newTask = new Task('Task2', new Date('2023-01-01'));
console.log((newTask.dueDate = new Date('2025-01-01')));
console.log(newTask);
