import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { categories } from "../data/categories"
import { Activity } from '../types/index';
import { ActivityActions } from "../reducers/activityReducer";


type FormProps = {
  dispatch: Dispatch<ActivityActions>
}


export const Form = ({dispatch} : FormProps) => {

  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: '',
    calories: 0,
  })
  HTMLInputElement
  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

    const isNumberField = ['category', 'calories'].includes(e.target.id)

    setActivity({
      ...activity, // Copia del state
      [e.target.id]: isNumberField ? +e.target.value : e.target.value  // +e.target.value convertir Number
    })
    
  }

  const isValidActivity = () =>{
    const { name, calories} = activity
    return name.trim() !== '' && calories > 0

  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    dispatch({ type: 'save-activity', payload: { newActivity: activity} })

  }


  return (
    <form
      className="space-y-6 bg-gray-100 shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        
        {/* Categoria */}
        <label htmlFor="category" className="text-blue-400 font-bold">Categoría:</label>
        <select
          className="border border-slate-300 p-2 rounded-lg bg-transparent"
          id="category"
          value={activity.category}
          onChange={ handleChange }
        >
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
        
        {/* Actividad */}
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="text-blue-400 font-bold">Actividad:</label>
          <input 
            id="name"
            type="text"
            className="border border-slate-300 p-2 rounded-lg bg-transparent"
            placeholder="Ej. Comida, Jugo de Naanja, Ensalada, Ejercicio,Pesas, Bicicleta etc..."
            value={activity.name}
            onChange={ handleChange }
          />
        </div>
        
        {/* Calorias */}
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="text-blue-400 font-bold">Calorias:</label>
          <input 
            id="calories"
            type="number"
            className="border border-slate-300 p-2 rounded-lg bg-transparent"
            placeholder="Calorias. 300 o 500"
            value={activity.calories}
            onChange={ handleChange }
          />
        </div>
        
        {/* Submit */}
        <input 
          type="submit"
          value='Guardar Comida'
          className="disabled:opacity-20 disabled:cursor-not-allowed bg-blue-500 rounded-md p-2 text-white uppercase font-bold cursor-pointer hover:bg-blue-600"
          disabled={!isValidActivity()}
        />



      </div>
    </form>
  )
}

