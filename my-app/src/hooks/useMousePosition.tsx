import React, {useState, useEffect} from 'react';

const useMousePosition = () => {// 自定义hooks必须以use开头
    const [position, setPosition] = useState({x:0,y:0})

    useEffect(()=>{
        const updateMouse = (e:MouseEvent) =>{
            setPosition({x:e.clientX,y:e.clientY})
        }
        document.addEventListener('click',updateMouse)
        return ()=> {
            document.removeEventListener('click',updateMouse)
        }
    },[])
    return position
}

export default useMousePosition