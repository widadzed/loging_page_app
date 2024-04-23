import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input type="password" className="form-control" />
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactForm;

