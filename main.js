const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);


// const content = (
//     <div>
//         <h1>Today: { (new Date()).toDateString() }</h1>
//     </div>
// );

function Counter(/*props*/) {
    const [countNum, setCountNum] = React.useState(0);

    // const incCount = () => {
    //     setCountNum(countNum + 1);
    // }

    // const decCount = () => {
    //     if(countNum <= 0){
    //         setCountNum(countNum - countNum);
    //     } else {
    //         setCountNum(countNum - 1);
    //     }
    // }

    // const clrCount = () => {
    //     setCountNum(countNum - countNum);
    // }

    const updateCounter = (n) => {
        if(countNum + n < 0) {
            return;
        }
        setCountNum( (prev) => {
            return prev + n;
        } );  
    }


    // const styles = {
    //     color : props.color,
    //     fontSize : props.size === 'big' ? '50px' : '40px'
    // }
    return (
        <div className="showSum">
            <h2 id="sum" style={{color: 'lightgreen'}}>Sum = 0</h2>
            <button type="button">Add Counter</button>
            <div className="counter">
                <button onClick = {()=>updateCounter(1)}>+</button>
                <h2>{countNum}</h2>
                <button onClick = {()=>updateCounter(-1)}>-</button>
                <button onClick = {()=>updateCounter(-countNum)}>C</button>
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
            <Counter /*color="red" size="small"*//>
        </div>
    );
}

