import { Activity } from "../types"

// Acciones
export type ActivityActions = 
    { type: 'save-activity',payload: { newActivity : Activity }} | 
    { type: 'set-activeId',payload: { id : Activity['id'] }} 


export type ActiviyState = {
    activities: Activity[],
    activeId: Activity['id']
}

export const initialSate : ActiviyState = {
    activities: [],
    activeId: ''
}

// State
export const activityReducer = (
    state: ActiviyState = initialSate, 
    action: ActivityActions
    ) =>{
        
        if(action.type === 'save-activity'){
            // Maneja la logica para actualizar el state

            let updatedActivities : Activity[] = []
            if(state.activeId){
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
        if(action.type === 'set-activeId'){
            // Maneja la logica para actualizar el state
            return {
                ...state,
                activeId: action.payload.id
            }
        }

    return state
}