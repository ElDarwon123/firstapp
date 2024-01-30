import { TasksService } from './tasks.service';

//  el Controller se importa automaticamente (ver instructions.txt)
//  el decorador Get se importa para que llamen el metodo "lagraasa"
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

// se importa el createtaskDto para que el cliente meta datos like objects
import { createTaskDto, updatedTaskDto } from './dto/task.dto';

//debe ir a la ruta tal/tasks para que cargue este controller
@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {
        
    }
    @Get()
    getTask() {
        return this.taskService.getAllTasks()
    }
    @Post()     //  @body sirve para que el metodo reciba json o txt
    createtask(@Body() newTask: createTaskDto) {
        //  solamente se retornan esos 2 ya que son variables, no vas a pedir que ingrese un id a mano pues bo
        return this.taskService.createTask(newTask.title, newTask.description)
    }
    //  para hacer delete se le sumará a la ruta /task/id
    @Delete(':id') //   se llama el decorador @Param para que vea el id o el parametro de la ruta y entre parentesis se le da el nombre del parametro (como queremos que se llame)
    deleteTask(@Param('id') id: String) {
        this.taskService.deleteTask(id)
    }
    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updatedTask: updatedTaskDto) {
        return this.taskService.updateTask(id, updatedTask)
    }

} 