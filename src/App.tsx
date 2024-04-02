import { useReducer } from "react"
import { Form } from "./components/Form"
import { activityReducer, initialSate } from "./reducers/activityReducer"
import { ActivityList } from "./components/ActivityList"


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialSate)

  return (
    <>
      <header className="bg-blue-600 py-3">
          <div className="max-w-4xl mx-auto flex justify-between">
            <h1 className="text-center text-lg font-bold text-white uppercase">
              Contador de Calorias
            </h1>

            <button>
              Reiniciar
            </button>
          </div>
      </header>

      <section className="bg-gray-700 py-20 px-5 ">
        <div className="max-w-4xl mx-auto">
          <Form 
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>

      {/* Ver Actividad */}
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList 
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App
