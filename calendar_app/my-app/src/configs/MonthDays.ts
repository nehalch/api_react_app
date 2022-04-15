import { Date } from "../../types";

function generateDays(): Date[] {
    let dates: Date[] = [];
    for (let i = 1; i <= 31; i++) {
        dates.push({ day: i });
    }
    return dates;
}

export const MonthDays: Date[] = generateDays();