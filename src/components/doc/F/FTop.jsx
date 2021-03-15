import React, { useRef } from 'react';
import styled from 'styled-components';
import FTableRow from './FTableRow';
import useLists from '../../../hooks/useLists';

const TopBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  input {
    width: 100%;
    border: 1px solid #000;
  }

  > .top-title {
    padding: 15px;
    border-bottom: 1px solid #000;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
  }

  > .top-description {
    font-size: 14px;

    table {
      width: 100%;
      border-collapse: collapse;

      thead {
        tr {
          border-bottom: 1px solid #000;
        }
      }

      tr {
        border-right: 0;
        border-left: 0;

        td {
          padding: 10px 5px;
          border-right: 1px solid #000;
          border-bottom: 1px solid #000;
          text-align: center;
        }

        &:last-child {
          td {
            border-bottom: 0;
          }
        }

        td:first-child {
          width: 25px;
        }

        td:last-child {
          border-right: 0;
          padding: 0;
        }
      }
    }
  }
`;

const FTop = () => {
  const nextId = useRef(5);
  const [onInsert, onRemove, lists] = useLists([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    }
  ], nextId);

  return (
    <>
      <TopBox>
        <p className='top-title'>FLAME DETECTOR</p>
        <div className='top-description'>
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <td>SERIAL NO.</td>
                <td>POSITION</td>
                <td>CONDITION</td>
                <td>REMARK</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {lists.map((list, index) => (
                <FTableRow key={list.id} id={list.id} onRemove={onRemove} num={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
      </TopBox>
      <div style={{ textAlign: 'center' }}>
        <button type='button' style={{ marginBottom: 30 }} onClick={onInsert}>
          추가
        </button>
      </div>
    </>
  );
};

export default FTop;
