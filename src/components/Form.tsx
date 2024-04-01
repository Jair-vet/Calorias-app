import { categories } from "../data/categories"

8
export const Form = () => {
  return (
    <form
      className="space-y-6 bg-gray-100 shadow p-10 rounded-lg"
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoría:</label>
        <select
          className="border border-slate-300 p-2 rounded-lg bg-transparent"
          id="category"
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
          <label htmlFor="activity" className="font-bold">Actividad:</label>
          <input 
            id="activity"
            type="text"
            className="border border-slate-300 p-2 rounded-lg bg-transparent"
            placeholder="Ej. Comida, Jugo de Naanja, Ensalada, Ejercicio,Pesas, Bicicleta etc..."
          />
        </div>
        
        {/* Caloriar */}
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="font-bold">Calorias:</label>
          <input 
            id="calories"
            type="number"
            className="border border-slate-300 p-2 rounded-lg bg-transparent"
            placeholder="Calorias. 300 o 500"
          />
        </div>
        
        {/* Submit */}
        <input 
          type="submit"
          value='Guardar Comida'
          className="bg-blue-500 rounded-md p-2 text-white uppercase font-bold cursor-pointer hover:bg-blue-600"
        />



      </div>
    </form>
  )
}
