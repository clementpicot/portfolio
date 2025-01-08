"use client";

import React, {useEffect, useState} from "react";

export default function useScreenWidth() {

    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 768);
}