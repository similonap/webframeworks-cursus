import React, { useState } from 'react';

interface Student {
  naam: string;
  leeftijd: number;
}

const App = () => {
  const [refresh, setRefresh] = useState(0);

  // array of five students
  let fiveUniqueStudents: Student[] = [
    {
      naam: 'Jef',
      leeftijd: 20,
    },
    {
      naam: 'Jan',
      leeftijd: 21,
    },
    {
      naam: 'Joris',
      leeftijd: 22,
    },
    {
      naam: 'Andie',
      leeftijd: 23,
    },
    {
      naam: 'Senne',
      leeftijd: 24,
    },
  ];
  return (
    <>
      <h1>Labo 3</h1>
      <h3>Ordered List</h3>
      <ol>
        {fiveUniqueStudents.map((student) => (
          <li>{student.naam}</li>
        ))}
      </ol>
      <h3>Select</h3>
      <select>
        {fiveUniqueStudents.map((student) => (
          <option>{student.naam}</option>
        ))}
      </select>
      <h3>Table</h3>
      <table>
        <thead>
            <tr>
                <th>Naam</th>
                <th>Leeftijd</th>
            </tr>
        </thead>
        <tbody>
            {fiveUniqueStudents.map((student) => (
                <tr>
                    <td>{student.naam}</td>
                    <td>{student.leeftijd}</td>
                </tr>
            ))}
        </tbody>
      </table>
      <br/>
      <button onClick={() => { setRefresh(Math.random()) }}>Refresh</button>
    </>
  );
};

export default App;
