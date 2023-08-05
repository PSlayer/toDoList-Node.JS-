class Status {
    constructor(id, name){
        this.name=name;
        this.id=id;
    }
}
exports.Status=Status;

class Task {
    constructor(id, title, status){

        this.title=title || '';
        this.status=status || null;
        this.id=id;
    }
}
exports.Task=Task;

exports.MainViewModel =class {
    constructor(title, tasks, statuses, editItem){
        this.title=title || '';
        this.tasks=tasks || '';
        this.statuses=statuses || [];
        this.editItem=editItem || null;
    }
}