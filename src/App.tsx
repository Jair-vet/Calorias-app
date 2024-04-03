import { useReducer, useEffect, useMemo } from "react"
import { Form } from "./components/Form"
import { activityReducer, initialSate } from "./reducers/activityReducer"
import { ActivityList } from "./components/ActivityList"


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialSate)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () => useMemo(() =>  state.activities.length, [state.activities])

  return (
    <>
      <header className="bg-cyan-800 py-8">
          <div className="max-w-4xl mx-auto flex md:flex-row flex-col justify-between items-center">
            <h1 className="text-center text-4xl font-bold text-white uppercase">
              Contador de Calorias
            </h1>

            <button
              className="md:mt-0 mt-6 md:w-1/4 w-full disabled:cursor-not-allowed disabled:opacity-20 bg-yellow-600 hover:bg-yellow-700 p-2 text-white uppercase font-bold rounded-lg"
              onClick={() => dispatch({type: 'restart-app'})}
              disabled={!canRestartApp()}
            >
              Reiniciar App
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
