import React, { Fragment } from "react";

type DayAvailable = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

interface Availability {
    day: DayAvailable;
    time: string;
}

interface User {
    name: string;
    age: number;
    hasSecurityBadge: boolean;
    availabilities: Availability[];
}

// include some overlaps
const users: User[] = [
    { name: "Andie", age: 41, hasSecurityBadge: true, availabilities: [{ day: "Monday", time: "9:00" }, { day: "Wednesday", time: "14:00" }] },
    { name: "Stephane", age: 30, hasSecurityBadge: true, availabilities: [{ day: "Tuesday", time: "10:00" }] },
    { name: "Jannes", age: 20, hasSecurityBadge: false, availabilities: [{ day: "Wednesday", time: "11:00" }] },
    { name: "Alice", age: 35, hasSecurityBadge  : false, availabilities: [{ day: "Thursday", time: "12:00"}, { day: "Monday", time: "9:00" }]},
    { name: "Bob", age: 50, hasSecurityBadge: true, availabilities: [{ day: "Friday", time: "13:00" }] },
    { name: "Charlie", age: 25, hasSecurityBadge: false, availabilities: [{ day: "Monday", time: "14:00" }] },
];

const DAYS: DayAvailable[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TIMES: string[] = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

const App = () => {
    return (
        <>
            <h1>Javascript functions</h1>

            <p>There are {users.length} users</p>

            <ul>
                {users.map(user => (
                    <li key={user.name}>
                        <b>{user.name}</b> is {user.age} years old and {user.hasSecurityBadge ? "has" : <b>does not have</b>} a security badge
                    </li>
                ))}
            </ul>

            <p>There are <b>{users.filter(user => user.hasSecurityBadge).length}</b> users with a security badge</p>

            <p>There are <b>{users.filter(user => user.age > 30).length}</b> users older than 30</p>
            
            {
                DAYS.map((d) => (
                    <Fragment key={d}>
                        <p>People who need to work on <b>{d}</b>:</p>
                        <ul>
                        {
                            users.filter((u) => u.availabilities.some((a) => a.day === d)).map(u => <li key={u.name}>{u.name}</li>)
                        }
                        </ul>
                    </Fragment>
                ))
            }

            <table>
                <thead>

                    <tr>
                        
                        <th>Time</th>
                        {
                            DAYS.map(day => (
                            <th key={day}>{day}</th>
                            ))
                        }
                    </tr>
                </thead>

                { TIMES.map(time => (
                    <tr key={time}>
                        <td>{time}</td>
                        {
                            DAYS.map(day => (
                                <td key={day}>
                                    { 
                                        users.filter(
                                            u => u.availabilities.some(a => a.day === day && a.time === time)
                                        ).map(u => <div>{u.name}</div>)
                                    }
                                </td>
                            ))
                        }
                    </tr>
                ))}


            </table>


        </>
    );
}

export default App;