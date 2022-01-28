import React from 'react';
import './calc-of-roi.scss';
import Aside from '../aside/aside';
import ManagerSettings from '../manager-settings/manager-settings';
import Table from '../table/table';

export default function CalcOfRoi() {
  return (
    <div className="calc_of_roi">

      <ManagerSettings/>
      <Table/>
      
    </div>
  );
}

