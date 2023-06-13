import { useState, useEffect } from 'react'

interface IAttribute {
    trait_type: string,
    value: string
}

export const getImg = (img: string) => {
    if (img === undefined)
        return null;
    return require(`../assets/${img}`).default
}

export const useResize = () => {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
        isMobile: false,
        isResponsive: false
    })

    const updateSize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: window.innerWidth < 1240,
            isResponsive: window.innerWidth < 1920
        })
    }

    useEffect(() => {
        window.addEventListener("resize", updateSize)
        updateSize()

        return () => {
            window.removeEventListener("resize", updateSize)
        }
    }, [])

    return screenSize;
}

export const useDetectOutsideClick = (el: any, initialState: any) => {
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() => {
        const onClick = (e: any) => {
            if (el.current !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

        if (isActive) {
            window.addEventListener("click", onClick);
        }

        return () => {
            window.removeEventListener("click", onClick);
        };
    }, [isActive, el]);

    return [isActive, setIsActive];
};

