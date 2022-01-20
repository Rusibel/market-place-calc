import React from 'react';
import './calc-of-roi.scss';
import Aside from '../aside/aside';
import ManagerSettings from '../manager-settings/manager-settings';

export default function CalcOfRoi() {
  return (
    <div className="App">
      <Aside/>
      <ManagerSettings/>
    </div>
  );
}

