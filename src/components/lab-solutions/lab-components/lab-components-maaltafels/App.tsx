import React from 'react';
import styles from './styles.module.css';

const range = (max: number) => Array.from({ length: max }, (_, index) => index + 1);

const MultiplicationRow = ({ factor, max }: { factor: number; max: number }) => (
  <tr>
    <td>{factor}</td>
    {range(max).map((number) => (
      <td key={`${factor}-${number}`}>{number * factor}</td>
    ))}
  </tr>
);

const Header = ({ max }: { max: number }) => (
  <tr>
    <td></td>
    {range(max).map((number) => (
      <td key={`header-${number}`}>{number}</td>
    ))}
  </tr>
);

const MultiplicationTable = ({ max }: { max: number }) => (
  <table className={styles.multiplicationTable}>
    <tbody>
      <Header max={max} />
      {range(max).map((number) => (
        <MultiplicationRow factor={number} max={max} key={`row-${number}`} />
      ))}
    </tbody>
  </table>
);

const App = () => (
  <div className={styles.page}>
    <MultiplicationTable max={5} />
    <MultiplicationTable max={7} />
    <MultiplicationTable max={10} />
  </div>
);

export default App;
