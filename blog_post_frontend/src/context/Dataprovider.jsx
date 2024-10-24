import { createContext } from 'react';

export const DataContext = createContext(null);

const dataProvider = () => {

    return(
        <DataContext>
            
        </DataContext>
    )
}