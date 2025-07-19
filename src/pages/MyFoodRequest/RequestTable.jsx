import React from 'react';

const RequestTable = ({request,index}) => {
    const {requetTaime,foodName,expiredDate,donnerName}=request
    return (
        <tr >
        <th>{index+1}</th>
        <td>{donnerName}</td>
        <td>{foodName}</td>
        <td>{expiredDate}</td>
        <td>{requetTaime}</td>
      </tr>
    );
};

export default RequestTable;