export enum TaskStatus{
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    DONE =  "DONE"
}
//estos son entidades o tablas para la db
export class firstEntity{
    id: String
    title: String
    description: String
    status: TaskStatus
}
