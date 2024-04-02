import { useMemo } from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"


type ActivityListProps = {
    activities: Activity[]
}

export const ActivityList = ({activities} : ActivityListProps) => {

    const categoryName = useMemo(() => 
        (category: Activity['category']) => categories.map( cat => cat.id === category ? cat.name : '' ),
        [activities]
    )


  return (
    <>
        <h2 className="text-4xl font-bold text-blue-600 text-center uppercase">Comida y Actividades</h2>

        {activities.map(activity => (
            <div 
                key={activity.id}
                className="px-5 py-5 bg-gradient-to-l from-gray-500 to-slate-800 rounded-lg shadow-xl mt-8 flex justify-between"
            >
                <div className="space-y-2 relative">
                    {/* Categoria */}
                    <p className={`absolute -top-8 -left-8 px-10 py-2 rounded-md text-white uppercase font-bold 
                        ${activity.category === 1 ? 'bg-emerald-500' : 'bg-orange-500'}`}
                    >{categoryName(activity.category)}</p>
                    {/* Actividad */}
                    <p className="text-2xl text-white font-bold pt-3">{activity.name}</p>
                    {/* Calorias */}
                    <p className="font-black text-4xl text-sky-500">
                        {activity.calories} {''}
                        <span>Calorías</span>
                    </p>
                </div>
                <div className="">

                </div>
            </div>
        ))}
    </>
  )
}