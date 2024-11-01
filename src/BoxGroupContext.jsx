import {createContext, useState} from "react";

export const BoxGroupContext = createContext();

export function BoxGroupProvider({children}){
    const initialSelectState = [false, false, false, false];
    const [isSelectedState, setIsSelectedState] = useState(initialSelectState);
    const [count, setCount] = useState(0);
    
    function setIsSelected(index) {
        setIsSelectedState((prevValue)=>{
            const updatedSelection = [...prevValue];
            updatedSelection[index] = !prevValue[index];
            const newCount = updatedSelection.filter(Boolean).length;
            setCount(newCount);
            return updatedSelection;
        });
    }

    return (
        <BoxGroupContext.Provider value={{isSelectedState, setIsSelected, count}}>
        {children}
        </BoxGroupContext.Provider>

    )
}