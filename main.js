const root = ReactDOM.createRoot(document.querySelector('#root'));

// const content = (
//     <div>
//         <h1>Today: { (new Date()).toDateString() }</h1>
//     </div>
// );

function Counter() {
    return (
        <div className="showSum">
            <h2 id="sum">Sum = 0</h2>
            <button type="button">Add Counter</button>
            <div className="counter">
                <button>+</button>
                <h2>0</h2>
                <button>-</button>
                <button>C</button>
                <button>X</button>
            </div>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>Hola!</h1>
            <h2>Today : { (new Date()).toDateString() }</h2>
            <br />
            <hr />
            <Counter />
        </div>
    );
}

root.render(<App />);
