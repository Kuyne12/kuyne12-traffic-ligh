import React, { useState } from "react"

//include images into your bundle
import rigoImage from "../..img/rigo-baby.jpg";

//create your first component
export function Home() {
    const [selectedColor, setSelectedColor] =useState("yellow");
    // let selectedColor = "yellow";

    return (
        
        <div className="traffic-Light">
            <div
                onClick={()} => setSelectedColor("red")}
                className={
                    "Light red" + (selectedColor === "red" ? " glow" : "") 
                )></div>
                <div className="traffic-Light">
                <div
                    onClick={()} => setSelectedColor("yellow")}
                    className={
                        "Light yellow" + (selectedColor === "yellow" ? " glow" : "") 
                    )></div>
                    <div className="traffic-Light">
                    <div
                        onClick={()} => setSelectedColor("green")}
                        className={
                            "Light green" + (selectedColor === "green" ? " glow" : "") 
                        )></div>
            </div>
    );
)