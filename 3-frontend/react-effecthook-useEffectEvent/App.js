import { useState, useEffect, useEffectEvent } from "react";

export default function Counter() {
    const [clickCount, setClickCount] = useState(0);
    const [latestCount, setLatestCount] = useState(0);

    const increment = () => setClickCount((prev) => prev + 1);

    const updateLatest = useEffectEvent(() => {
        setLatestCount(clickCount);
    })

    useEffect(() => {
        function handleClick() {
            increment();
            updateLatest();
        }

        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <>
            <h1>Document Clicks: {clickCount}</h1>
            <h2>Latest Count (from effect event): {latestCount}</h2>
        </>
    );
}
