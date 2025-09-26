import React, {useState} from "react";

interface Student {
    name: string;
    age: number;
    year: number;
}

const FilterList = () => {
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("name");

    const students: Student[] = [
        {name: "Jan", age: 20, year: 1},
        {name: "Jacob", age: 21, year: 2},
        {name: "Joris", age: 22, year: 3},
        {name: "Piet", age: 21, year: 2},
        {name: "Mathias", age: 22, year: 3},
        {name: "Muhammad", age: 20, year: 1},
        {name: "Perneel", age: 22, year: 3},
        {name: "Joris", age: 22, year: 3},
        {name: "Korneel", age: 23, year: 4},
    ];

    students.sort((a, b) => {
        if (sort === "name") {
            return a.name.localeCompare(b.name);
        } else if (sort === "age") {
            return a.age - b.age;
        } else if (sort === "year") {
            return a.year - b.year;
        }
        return 0;
    });

    return (
        <div>
            <div>
                Search: <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </div>
            <table style={{width: "100%"}}>
                <thead>
                    <tr>
                        <th style={{width: 200, fontWeight: sort == "name" ? "bold" : "normal"}} onClick={() => setSort("name")}>Name</th>
                        <th style={{width: 40, fontWeight: sort == "age" ? "bold" : "normal"}} onClick={() => setSort("age")}>Age</th>
                        <th style={{width: 40, fontWeight: sort == "year" ? "bold" : "normal"}} onClick={() => setSort("year")}>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {students.filter((student) => student.name.toLowerCase().includes(filter.toLowerCase())).map((student) => (
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )



}

const App = () => {
    return (
        <div>
            <FilterList />
        </div>
    )


}

export default App;