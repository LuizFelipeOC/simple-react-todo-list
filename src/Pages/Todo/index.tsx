import { useState } from "react";
import { Card } from "../../Components/Card";
import { CardContent } from "../../Components/Card/CardContent";
import { TodoCreateTask } from "../../Components/Forms/TodoCreateTask";


export interface ITask {
  title: string,
  isCheck: boolean,
}

export function Todo() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [, setTask] = useState<ITask>({title: '', isCheck: false});


  const addTaskOnList = (task: ITask) => {    
    setTaskList(list => [...list, task]);
  }

  const removeTaskOnList = (task: ITask) => {

    setTaskList(taskList.filter((index) => index.title != task.title));
  }

  const checkTask = (task: ITask) => {
    task.isCheck = true;

    setTask(task);
  }

  return (
    <div className="flex bg-white h-screen justify-center items-center">
      <Card.Base className="sm:w-[30%]">
        <Card.Header title="Criar Tarefa" />

        <CardContent>
          <TodoCreateTask addItem={addTaskOnList} />
          {
          taskList.length == 0 ? 
          <div className="flex justify-center mt-4 font-mono font-medium">Nenhuma atividade criada</div> :

          <div> 
            { 
              taskList.map((e, i ) => { 
                return <Card.Base key={i} className="w-full my-4" >
                  <Card.Content>
                    <div className="w-full flex justify-between items-center gap-2">
                      <div className="flex gap-2 font-bold font-mono items-center" >
                      <input type="checkbox" className="" onChange={() => checkTask(e)}/>
                      <p className={e.isCheck ? 'line-through': ''}>{ e.title }</p>
                      </div>
                    <button onClick={() => removeTaskOnList(e)} className="p-2 bg-red-500 uppercase rounded-lg text-white font-mono font-medium">Remover</button>
                    </div>
                  </Card.Content>
               </Card.Base>
              })
            }
          </div>
          }
        </CardContent>
      </Card.Base>
    </div>
  );
}
