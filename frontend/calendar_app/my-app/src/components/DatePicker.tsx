import React from "react";
import { Calendar } from "./Calendar";

export const DatePicker: React.FC<{}> = ({ }) => {
    return (
        <div className="date-picker-conteiner">
            <div className="background-conteiner"></div>
            <Calendar />
        </div>
    )
}