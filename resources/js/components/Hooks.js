import React, { useState, useEffect } from 'react';

function Hooks() {

  
  const [notes, setNotes] = useState(null);
  const [form, setForm] = useState({ title: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);


 
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  

  

  return (
    <div className='Hooks'>
      
      
            <div className='form-group'>
              <label>Title</label>
              <input
                type='text'
                name='title'
                className='form-control'
                id='exampleInputEmail1'
                onChange={handleChange}
                value={form.title}
                aria-describedby='emailHelp'
                placeholder='Title'
              />
            </div>
            </div>
            
      
  );
}

export default Hooks;