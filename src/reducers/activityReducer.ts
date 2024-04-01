import { Activity } from "../types"

// Acciones
export type ActivityActions = { 
    type: 'save-activity',
    payload: { newActivity : Activity }
}

type ActiviyState = {
    activities: Activity[]
}

export const initialSate : ActiviyState = {
    activities: []
}

// State
export const activityReducer = (
    state: ActiviyState = initialSate, 
    action: ActivityActions
    ) =>{
        
        if(action.type === 'save-activity'){
            // Maneja la logica para actualizar el state
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity],
            }
        }

    return state
}