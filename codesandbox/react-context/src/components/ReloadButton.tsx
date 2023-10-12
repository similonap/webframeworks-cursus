import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../dataContext';

const ReloadButton = () => {
  const { loadData, loading } = useContext(DataContext);
  return (
    <button disabled={loading} onClick={() => loadData()}>reload</button>
  )
}

export default ReloadButton;
