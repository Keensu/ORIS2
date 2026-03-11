import React, { useState } from 'react';
import '../../assets/styles/ChildrenManager.css';

const ChildrenManager = ({ roomIndex, formId }) => {
  const [children, setChildren] = useState([]);

  const addChild = (age) => {
    if (!age) return;
    const newChild = {
      id: `child_${roomIndex}_${Date.now()}_${Math.random()}`,
      age: age
    };
    setChildren([...children, newChild]);
  };

  const removeChild = (childId) => {
    setChildren(children.filter(child => child.id !== childId));
  };

  return (
    <div className="SFroomsData_content_int" id={`${formId}_SFrooms_${roomIndex}`} data-room-index={roomIndex}>
      <div className="SFroomsData_row">
        <div className="SFroomsData_column">
          <label className="mb-5">Взрослые</label>
          <select aria-label="взрослых" name={`room${roomIndex}_adults`} className="days adults" defaultValue="2">
            {[...Array(21).keys()].map(i => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
        <div className="SFroomsData_column">
          <label className="mb-5">Дети до 18</label>
          <div className="children-container">
            <div className="children-list" id={`children_list_${roomIndex}`}>
              {children.map(child => (
                <div key={child.id} className="child-item" data-child-id={child.id}>
                  <span>Возраст: {child.age} лет</span>
                  <input type="hidden" name={`room${roomIndex}_child_age[]`} value={child.age} />
                  <button type="button" className="remove-child" onClick={() => removeChild(child.id)}>×</button>
                </div>
              ))}
            </div>
            <div className="children-controls">
              {children.length > 0 && <span className="children-count">{children.length} реб.</span>}
              <select 
                id={`age_select_${roomIndex}`} 
                className="styled-select"
                onChange={(e) => {
                  addChild(e.target.value);
                  e.target.value = '';
                }}
                value=""
              >
                <option value="" disabled>Добавить</option>
                {[...Array(18).keys()].map(i => (
                  <option key={i} value={i}>{i} {i === 1 ? 'год' : i < 5 ? 'года' : 'лет'}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"><img loading="lazy" alt="" src="/images/spacer.gif" width="1" height="1" /></div>
    </div>
  );
};

export default ChildrenManager;