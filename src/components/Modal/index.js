import React, {useState} from "react";
import './style.css'

function Modal({ title, fields, onClose, onSave}) {
    const [formData, setFormaData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    ); 

    const handleChange = (e) => {
        const {name, value } =e.target;
        setFormaData({...formData, [name]: value})
    };

    const handleSubmit = () => {
        onSave(formData);
        onClose();
    };


return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        {fields.map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}
        <button onClick={handleSubmit}>Salvar</button>
        <button className="cancel" onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}
export default Modal