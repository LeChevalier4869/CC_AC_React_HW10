const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);


// const content = (
//     <div>
//         <h1>Today: { (new Date()).toDateString() }</h1>
//     </div>
// );

function Suminfo({counters}) {
    const total = counters.reduce( (accumulator, currentValue) => 
    accumulator + currentValue.number, 0);

    return (
        <div className="showSum">
            <h2 id="sum" style={{color: 'lightgreen'}}>Sum = {total}</h2>
        </div>
    )
}

function Counter(props) {
    //const [countNum, setCountNum] = React.useState(0);

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

    //const updateCounter = (n) => {
        // if(countNum + n < 0) {
        //     return;
        // }
        // setCountNum( (prev) => {
        //     return prev + n;
        // } );  
    //}


    // const styles = {
    //     color : props.color,
    //     fontSize : props.size === 'big' ? '50px' : '40px'
    // }

    const {item: {id, number}, hdUpdate, hdRemCounter} = props;

    return (
        <div className="counter">
                <button onClick = {()=>hdUpdate(id, 1)}>+</button>
                <h2>{number}</h2>
                <button onClick = {()=>hdUpdate(id, -1)}>-</button>
                <button onClick = {()=>hdUpdate(id, -number)}>C</button>
                <button onClick = {()=>hdRemCounter(id)}>X</button>
        </div>
            // <div className="counter">
            //     <button onClick = {()=>props.hdUpdate(props.item.id, 1)}>+</button>
            //     <h2>{props.item.number}</h2>
            //     <button onClick = {()=>props.hdUpdate(props.item.id, -1)}>-</button>
            //     <button onClick = {()=>props.hdUpdate(props.item.id, -props.item.number)}>C</button>
            //     <button>X</button>
            // </div>
    )
}

function App() {
    const [counters, setCounter] = React.useState([{id: 1, number: 0}])
    // let allCounter = Array(counters).fill(<Counter key={Math.random()}/>);
    // console.log(counters[idx].number);

    const hdUpdate = (id, num) => {
        const cloneCounters = [...counters];
        let idx = cloneCounters.findIndex(el => el.id === id);
        // let total = 0;
        console.log(idx, num)
        if(cloneCounters[idx].number + num < 0) {
            return;
        }
        cloneCounters[idx].number += num;
        // total = cloneCounters[idx].number + num;
        // console.log(total);
        setCounter(cloneCounters);
    }

    const hdAddCounter = () => {
        let newId = counters.length===0 ? 1 : counters.at(-1).id + 1;
        // let newId = counters.length===0 ? 1 : counters.slice(-1)[0].id + 1
        // setCounter([...counters, {id: newId, number: 0}]);
        const cloneCounters = [...counters];
        cloneCounters.push( {id: newId, number: 0} );
        setCounter(cloneCounters);
    }

    const hdRemCounter = (id) => {
        const updateCounter = counters.filter(el => el.id !== id);
        setCounter(updateCounter);

        // setCounter(prevCounters => prevCounters.filter(el => el.id !== id));
    }



    return (
        <div id="app"> 
            <h1>Hola!</h1>
            <h2>Today : { (new Date()).toDateString() }</h2>
            <br /><hr />
            <Suminfo counters={counters}/> 
            <button onClick={ hdAddCounter }>Add Counter</button>
            {counters.map(el => {
                return <Counter key={el.id} item={el} hdUpdate={hdUpdate} hdRemCounter={hdRemCounter}/>
            })}
        </div>
    );
}

// In Suminfo attribute === {attribute} such as counters = {counters}

