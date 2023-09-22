import React, { useState } from 'react';

interface Student {
  id: number;
  naam: string;
  leeftijd: number;
}

const App = () => {
  let numbers: number[] = [1,2,3,4,5,4,3];
  
  // array of five students
  let fiveUniqueStudents: Student[] = [
    {
      id: 0,
      naam: 'Jef',
      leeftijd: 20,
    },
    {
      id: 1,
      naam: 'Jan',
      leeftijd: 21,
    },
    {
      id: 2,
      naam: 'Joris',
      leeftijd: 22,
    },
    {
      id: 3,
      naam: 'Andie',
      leeftijd: 23,
    },
    {
      id: 4,
      naam: 'Senne',
      leeftijd: 24,
    },
  ];
  return (
    <>
      <h1>Labo 1: Lijsten</h1>
      <h3>Getallenlijst</h3>
      <ul>
        {numbers.map((number, index) => <li key={index}>{number}</li>)}
      </ul>
      <h3>Studentenlijst</h3>
      <ol>
        {fiveUniqueStudents.map((student) => (
          <li key={student.id}>{student.naam}</li>
        ))}
      </ol>
      <h3>Studentenlijst met J</h3>
      <ol>
        {fiveUniqueStudents.filter(student => student.naam.startsWith("J")).map((student) => (
          <li key={student.id}>{student.naam}</li>
        ))}
      </ol>
      <h3>Select</h3>
      <select>
        {fiveUniqueStudents.map((student) => (
          <option key={student.id}>{student.naam}</option>
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
                <tr key={student.id}>
                    <td>{student.naam}</td>
                    <td>{student.leeftijd}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
