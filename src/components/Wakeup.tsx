import React, {useRef} from 'react'

const Wakeup = () => {  

    const ref = useRef<HTMLInputElement>(null!);

    return (
        <div>
            <input type="text" ref={ref} onBlur={() => {
                console.log(ref.current.value);
            }} />
        </div>
    )
}

export default Wakeup