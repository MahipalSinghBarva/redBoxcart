import {createContext, useState} from 'react'

export const Context = createContext()

export const AppContext =({children})=>{

    const [categories, setCategories] = useState()
    const [product, setProduct] = useState()

    return (
        <Context.Provider value={{
                categories,
                setCategories,
                product,
                setProduct
            }}
        > 
            
            {children}
        </Context.Provider>
    )
}