import React from "react";

interface StarsProps {
    value: number;
}

export default function Rating({value}: StarsProps) {
    return (
        <div className="stars" style={{"--rating": value} as React.CSSProperties}></div>
    )
}