import { Injectable } from '@nestjs/common';
import { firstEntity, TaskStatus } from './task.entity';
//  v4 para crear id de tipo String 
import { v4 } from 'uuid';
import { updatedTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
    //   un tal para poder tenerlo como constante y no repetir el modelo
    private list: firstEntity[] = [{
        id: v4(),
        title: "La Grasa :v",
        description: "Solo SDLG papuuuu",
        status: TaskStatus.PENDING
    }]
    //metodo para obtener todas las tareas
    getAllTasks() {
        return this.list
    }
    //Metodo para crear una nueva tarea
    createTask(title: String, description: String) {
        //  constante para cuando se cree una tarea nueva
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.list.push(task)
        return task
    }
    //Metodo para eliminar una tarea por su id
    // ya que para eliminar algo se debe hacer por id, en este caso en string
    deleteTask(id: String) { 
        /*se pone this.list para actualizar el array y no retornarlo
        y l*/
        this.list = this.list.filter(item => item.id !== id);
    }
    // un tal para encontrar la tarea
    getTaskById(id: String) {
        return this.list.find((item) => item.id === id)
    }
    //Metodo para actualizar una tarea
    updateTask(id: String, updatedTask: updatedTaskDto)   { 
        //  busca el task
        const task = this.getTaskById(id)
        //  mete la nueva info al task 
        const newTask = Object.assign(task, updatedTask )
        //  se asegura de que exista el task y si existe lo cambia, si no pues lo deja igual
        this.list = this.list.map(task => task.id === id ? newTask : task )
        return newTask

    }
}
