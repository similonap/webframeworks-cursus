import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../providers/DataProvider';

const ReloadButton = () => {
  const { reload, loading } = useContext(DataContext);
  return (
    <button disabled={loading} onClick={() => reload()}>reload</button>
  )
}

export default ReloadButton;
