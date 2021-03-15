import React from 'react';
import styled from 'styled-components';
import { GoX } from 'react-icons/go'; 


const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;
`;

const I1TableRow = ({ id, onRemove }) => {
  return (
    <tr>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='date' />
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <input type='text' />
      </td>
      <td>
        <DeleteButton type="button" onClick={() => onRemove(id)}>
          <GoX fill="#e92a2a" size="18px"/>
        </DeleteButton>
      </td>
    </tr>
  );
};

export default I1TableRow;
