import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { AgGridReact, AgGridReactProps } from '@ag-grid-community/react';
import classNames from 'classnames';
import React from 'react';

interface IProps extends AgGridReactProps {
  //
}

const Table: React.FC<IProps> = (props) => {
  const { columnDefs, rowData } = props;

  return (
    <div className={classNames('ag-theme-balham', 'fit')}>
      <AgGridReact
        modules={AllCommunityModules}
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
  );
};

export default Table;
