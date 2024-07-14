import {  createContext, useState } from "react";

const ContextStore=createContext({
    cardId: null,
    setCardId: () => {},
})
export const Store=({children})=>{
    const [cardId,setCardId]=useState(null);

    const contextValue={
        cardId,
        setCardId,

    }
return <ContextStore.Provider value={contextValue} >
    {children}
</ContextStore.Provider>
}
export default ContextStore;