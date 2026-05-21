import React, { useEffect } from "react";

const usePageTitle = (title) => {
    useEffect(() => {
        document.title = `GameHub | ${title}`;
    }, [title]);
}

export default usePageTitle;