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
            console.log('desde el type de save-activity');
        }
        
    return state
}