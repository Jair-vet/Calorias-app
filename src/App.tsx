import { useReducer } from "react"
import { Form } from "./components/Form"
import { activityReducer, initialSate } from "./reducers/activityReducer"


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

      <section className="bg-blue-200 py-20 px-5 ">
        <div className="max-w-4xl mx-auto">
          <Form 
            dispatch={dispatch}
          />
        </div>
      </section>
    </>
  )
}

export default App
