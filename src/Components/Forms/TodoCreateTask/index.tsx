import { useForm } from "react-hook-form";
import { ITask } from "../../../Pages/Todo";

type ICreateTask = {
  title: string,
}

export function TodoCreateTask({ addItem } : any ){
  const {register, handleSubmit, reset, formState: { errors } } = useForm<ICreateTask>();

  const submit = (data: ICreateTask) => {

    const task: ITask = {
      title: data.title,
      isCheck: false
    };
    
    task.title = data.title;

    addItem(task);
    
    reset();
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register('title', {required: true})} type="text" className={errors.title?.type ===  'required' ? "my-2 bg-gray-50 border-gray-300 text-gray-900 text-sm focus:border-red-500 rounded-lg block w-full p-2.5 h-10 outline-red-500 outline" : "my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-10"} placeholder="Titulo da atividade"/>
      {errors.title?.type === 'required' && <p className="text-red-500 text-sm my-2">Titulo da atividade é obrigatório.</p>}

      <div className="flex justify-end">
        <button type="submit" className="bg-zinc-900 p-2 rounded-lg uppercase font-medium font-mono text-white">Adicionar</button>
      </div>  
  </form>
  );
}