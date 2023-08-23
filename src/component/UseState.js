import {useState} from 'react'

//useState : 상태(데이터)가 변경되면 자동으로 랜더링
const UseState = () => {

    const [count , setCount] = useState(0);

    const add1 = () => {
        setCount (count + 1);
    }

    const add10 = () => {
        setCount(count + 10);
    }

    const add100 = () => {
        setCount(count + 100);
    }

    const add1000 = () => {
        setCount(count + 1000);
    }


    return (
        <div>
             <div>{count}</div>
            <button onClick={add1}> + 1</button>
            <button onClick={add10}> + 10</button>
            <button onClick={add100}> + 100</button>
            <button onClick={add1000}> + 1000</button>
        </div>
    );
}

export default UseState;