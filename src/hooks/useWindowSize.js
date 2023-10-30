import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
        //objects
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        //on resize, handleResize is called

        return () => window.removeEventListener("resize", handleResize);
        //use cleanup to remove EventLIstener when application closes 
    }, [])

    return windowSize;
}

export default useWindowSize;