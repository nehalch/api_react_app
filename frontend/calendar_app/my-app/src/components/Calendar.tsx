import React, { useState, MouseEvent } from "react";
import { Weekday, Date } from "../../types";
import { MonthDays } from "../configs/MonthDays";
import { Weekdays } from "../configs/Weekdays";
import { ChevronLeftIcon } from "../assets/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../assets/icons/ChevronRightIcon";

export const Calendar: React.FC<{}> = ({ }) => {

    const [selectedDate, setSelectedDate] = useState<string | null>();

    const handlChange = (e: MouseEvent<HTMLButtonElement>) => {
        setSelectedDate(e.currentTarget.getAttribute("value"));
    }

    const generateDays = (date: number) => {
        let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
        for (let i = 0; i < 7; i++) {
            return (
                <button
                    className={`date ${date === 18 ? "today" : ""} ${date === selectedDateNumber ? "selected" : ""}`}
                    onClick={handlChange}
                    value={date} > <p>{date}</p></button >
            )
        }
    }

    const generateWeeks = (dates: Array<Date>) => {
        let daysInWeek = 7;
        let tempArray = [];
        for (let i = 0; i < dates.length; i += daysInWeek) {
            tempArray.push(dates.slice(i, i + daysInWeek));
        }
        return tempArray;
    }

    return (
        <div className="calendar-conteiner">
            <div className="datepicker-conteiner">
                <ChevronLeftIcon />
                <span>March 2022</span>
                <ChevronRightIcon />
            </div>
            <div className="weekdays-conteiner">
                {
                    Weekdays.map(day => (
                        <div className="weekday">
                            {day}
                        </div>
                    ))
                }
            </div>

            <div className="calendar">
                {
                    generateWeeks(MonthDays).map(week => (
                        <div className="week">
                            {
                                week.map(day => (
                                    generateDays(day.day)
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}