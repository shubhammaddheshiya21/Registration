import React, { useState } from 'react';

const App = () => {

  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    qua: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const {value,name} = event.target;

    setFullName((preValue) => {
      console.log(preValue);
      
      return {
        ...preValue,
        [name]: value,
      }
      }
    );
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert('form submitted');
  }

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits} >
          <div>
            <h1> Hello {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <p>{fullName.qua}</p>
            <input
              type='text'
              placeholder=' Enter your name'
              name='fname'
              onChange={inputEvent}
              value={fullName.fname}
            />
            <input
              type='text'
              placeholder=' Enter your Last Name'
              name='lname'
              onChange={inputEvent}
              value={fullName.lname}
            />
            <input
              type='email'
              placeholder=' Enter your Email'
              name='email'
              onChange={inputEvent}
              value={fullName.email}
              autoComplete='off'
            />
            <input
              type='number'
              placeholder=' Enter your Phone'
              name='phone'
              onChange={inputEvent}
              value={fullName.phone}
            />
            <input
              type='text'
              placeholder=' Enter your Qualification'
              name='qua'
              onChange={inputEvent}
              value={fullName.qua}
            />
            <button type="submit" >
              Submit Me 👍
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
