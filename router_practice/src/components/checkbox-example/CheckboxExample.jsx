import React, { useState } from 'react';

const CheckboxExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        Accept Terms & Conditions
      </label>
      {checked && <p>You have accepted the terms.</p>}
    </div>
  );
};

export default CheckboxExample;
