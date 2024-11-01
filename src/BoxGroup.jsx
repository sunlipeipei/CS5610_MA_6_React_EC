import Box from './Box'
import './BoxGroup.css'
import { useContext } from 'react';
import { BoxGroupContext } from './BoxGroupContext';

export default function BoxGroup() {

    const {isSelectedState, count} = useContext(BoxGroupContext)

    return (
        <div className='container'>
            <h1>Counter: {count}</h1>
            <div className='boxGroup'>
                {isSelectedState.map((selectedBoxes, index)=> (
                    <Box 
                    key={index}
                    index={index}
                    />
                ))}
            </div>
        </div>
    )
}