import {useReducer} from 'react';

// UseReducer에서 사용할 함수 선언
// count , action
const reducer = (count , action) => {

    switch (action.type) {
        case 1:
            return count + 1;

        case 10:
            return count + 10;

        case 100:
            return count + 100;
        
        case 1000:
            return count + 1000;
        
        default :
            return count ;

    }



}

// useReducer 사용
// dispatch : count값을 수정할때 사용 (=setCount) -> dispatch 호출시 reducer 함수가 호출
// reducer : 컴포넌트 외부에서 선언 해여한다. -> 컴포넌트의 코드를 간략하게 한다.
// dispatch 호출 -> reducer 함수 호출 -> 컴포넌트 외부에 선언 -> 외부에서 선언된 함수 호출 -> action
// -> 외부 count 함수 작동 -> 내부 count 값이 수정되어 랜더링 
const UseReducer = () => {
    const [count , dispatch] = useReducer(reducer,0);   // 0: 초기값 -> count (랜더링 할 값)


    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch({type:1})}> + 1</button>
            <button onClick={() => dispatch({type:10})}> + 10</button>
            <button onClick={() => dispatch({type:100})}> + 100</button>
            <button onClick={() => dispatch({type:1000})}> + 1000</button>
        </div>

    ); 
    
}

export default UseReducer;