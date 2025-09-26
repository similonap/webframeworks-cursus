import React, { useMemo, useState } from "react";

interface Student {
    name: string;
    age: number;
    year: number;
}

const STUDENTS: Student[] = [
    { name: "Jan", age: 20, year: 1 },
    { name: "Jacob", age: 21, year: 2 },
    { name: "Joris", age: 22, year: 3 },
    { name: "Piet", age: 21, year: 2 },
    { name: "Mathias", age: 22, year: 3 },
    { name: "Muhammad", age: 20, year: 1 },
    { name: "Perneel", age: 22, year: 3 },
    { name: "Joris", age: 22, year: 3 },
    { name: "Korneel", age: 23, year: 4 },
];

type SortField = keyof Student;

const FilterList: React.FC = () => {
    const [searchText, setSearchText] = useState("");
    const [sortField, setSortField] = useState<SortField>("name");

    const filteredStudents = useMemo(() => {
        const normalizedSearch = searchText.trim().toLowerCase();
        return STUDENTS.filter((student) =>
            student.name.toLowerCase().includes(normalizedSearch)
        ).sort((a, b) => {
            if (sortField === "name") {
                return a.name.localeCompare(b.name);
            }
            return a[sortField] - (b[sortField] as number);
        });
    }, [searchText, sortField]);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <label>
                Search:
                <input
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    style={{ marginLeft: 8 }}
                />
            </label>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th
                            style={{ width: 200, fontWeight: sortField === "name" ? "bold" : "normal" }}
                            onClick={() => setSortField("name")}
                        >
                            Name
                        </th>
                        <th
                            style={{ width: 60, fontWeight: sortField === "age" ? "bold" : "normal" }}
                            onClick={() => setSortField("age")}
                        >
                            Age
                        </th>
                        <th
                            style={{ width: 60, fontWeight: sortField === "year" ? "bold" : "normal" }}
                            onClick={() => setSortField("year")}
                        >
                            Year
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student, index) => (
                        <tr key={`${student.name}-${student.year}-${index}`}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const App: React.FC = () => {
    return <FilterList />;
};

export default App;
