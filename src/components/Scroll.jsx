import { useState, useEffect } from 'react';
//after  trying multiple time but didn't get the scroll event.
function Scroll(){
    const[scroll,setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () =>{
            console.log('handleScroll called')
            setScroll(window.pageYOffset)
        }

        window.addEventListener('scroll', handleScroll);

        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <h1>Scroll</h1>
            <p>scroll Position: {scroll}</p>
        </>
    )
}

export {Scroll};
