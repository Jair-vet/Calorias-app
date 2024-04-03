import { Activity } from "../types"

// Acciones
export type ActivityActions = 
    { type: 'save-activity',payload: { newActivity : Activity }}    | 
    { type: 'set-activeId',payload: { id : Activity['id'] }}        |    
    { type: 'delete-activity',payload: { id : Activity['id'] }}            


export type ActiviyState = {
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialSate : ActiviyState = {
    activities: localStorageActivities(),
    activeId: ''
}

// State
export const activityReducer = (
    state: ActiviyState = initialSate, 
    action: ActivityActions
    ) =>{
        
        // Guardar actividad
        if(action.type === 'save-activity'){
            // Maneja la logica para actualizar el state

            let updatedActivities : Activity[] = []
            if(state.activeId){  // Editar
                updatedActivities = state.activities.map( activity => activity.id === state.activeId 
                    ? action.payload.newActivity 
                    : activity 
                )
            } else {
                updatedActivities = [...state.activities, action.payload.newActivity]
            }

            return {
                ...state,
                activities: updatedActivities,
                activeId: ''
            }
        }
        // Actualizar actividad
        if(action.type === 'set-activeId'){
            // Maneja la logica para actualizar el state
            return {
                ...state,
                activeId: action.payload.id
            }
        }

        // Eliminar actividad
        if(action.type === 'delete-activity'){
            return {
                ...state,
                activities: state.activities.filter( activity => activity.id !== action.payload.id)
            }
        }



    return state
}