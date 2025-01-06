"use client";

import { useEffect } from 'react';

function useTitle(title) {
    useEffect(() => {
        document.title = `Raka | ${title}`;
    }, []);
}

export default useTitle