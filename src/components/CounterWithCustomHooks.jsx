import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHooks = () => {
   
    const { counter, increment, decrement, reset } = useCounter()

    return (
        <>
            <div className="container">
                <h1>Contador con Hook Personalizado</h1>
                <span>{counter}</span>
                <div className="buttons">
                    <button className="btn" onClick={() => increment(2)}>+ 1</button>
                    <button className="btn" onClick={reset}>Reset</button>
                    <button className="btn" onClick={decrement}>- 1</button>
                </div>
            </div>
        </>
  )
}


