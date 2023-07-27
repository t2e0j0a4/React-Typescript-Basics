import React, { Dispatch, SetStateAction, useMemo, useState } from 'react'

interface SampleProps {
    name: string,
    setMyName: Dispatch<SetStateAction<string>>
    title: string,
}

const Sample:React.FC<SampleProps> = ({title, name, setMyName}) => {

    console.log('Sample');

    const [val, setVal] = useState<number>(10);

    useMemo(() => {
        console.log('Value changed : ' + val);
    }, [val]);

    return (
        <div>
            <h2>{title}</h2>
            <p>{name}</p>
            <button type='button' onClick={(): void => {setMyName(():string => name === 'Teja' ? 'Nagateja' : 'Teja')}} >On my mark</button>
            <button type='button' onClick={() => {
                setVal((prev) => prev + 10);
            }}>Change Value : {val}</button>
        </div>
    )
}

export default Sample