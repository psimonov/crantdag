import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { GridOptions } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import classNames from 'classnames';
import React from 'react';

interface IProps extends GridOptions {
  //
}

const Table: React.FC<IProps> = (props) => {
  return (
    <div className={classNames('ag-theme-balham', 'fit')}>
      <AgGridReact {...props} />
    </div>
  );
};

export default Table;
