// src/components/AddressForm.js
import React, { useState } from 'react';

const AddressForm = ({ onCancel, onSave, initialData }) => {
  const [formData, setFormData] = useState({ ...initialData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div>
      <label htmlFor="street">Street:</label>
      <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} />

      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />

      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} />

      <label htmlFor="zip">ZIP Code:</label>
      <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} />

      <div>
        <button onClick={handleSave}>Simpan</button>
        <button onClick={onCancel}>Batal</button>
      </div>
    </div>
  );
};

export default AddressForm;
