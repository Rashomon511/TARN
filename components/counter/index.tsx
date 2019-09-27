import {Button} from 'antd';
import Link from 'next/link';
function Counter(props: any) {
    const {counter: {count}, incrementCount, decrementCount, resetCount} = props;
    return (
        <div>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <Button type='primary' onClick={incrementCount}>+1</Button>
            <Button type='primary' onClick={decrementCount}>-1</Button>
            <Button type='primary' onClick={resetCount}>Reset</Button>
            <Button type='primary'><Link href="/list">GO List</Link></Button>
        </div>
    )
}

export default Counter