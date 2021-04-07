import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import DeleteButton from '../common/DeleteButton';

const H41TableRow = ({ id, onRemove, onChange, units }) => {
  const { TestDt } = useSelector(state => state.h2A.D1[id]);
  const inputArg = ({ target }) => onChange({ target, id });

  return (
    <tr>
      <td>
        <input type='text' onChange={inputArg} name="CylnType"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="Volume"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="WorkPress"/>
      </td>
      <td>
        <input type='text' onChange={inputArg} name="SerialNo"/>
      </td>
      <td>
        <DatePicker
          selected={TestDt}
          name="TestDt"
          dateFormat="MMM.yyyy"
          onChange={value => onChange({ id, target: { name: "TestDt", value } })}
          showMonthYearPicker
        />
      </td>
      <td>
        <select onChange={inputArg} name="Perform">
          <option defaultValue="선택해주세요">선택해주세요</option>
          {units.map(unit => (
            <option key={unit.CdNm} value={unit.CD}>
              {unit.CdNm}
            </option>
          ))}
        </select>
      </td>
      <td onClick={() => onRemove(id)}>
        <DeleteButton />
      </td>
    </tr>
  );
};

export default H41TableRow;
