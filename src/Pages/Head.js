import React,{useState} from 'react'
import Navbar from './Navbar'

function Head() {

    const [T_id, setId] = useState("");
    console.log(T_id);
  
    const sendId = () => {
      const data = {
        id: T_id,
      };
  
      fetch(`http://localhost:3000/teacher/material/:${T_id}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    };


    return (
        <div>
            <Navbar/>
            <div className="container">
        <form >
          <div>
            <label for="id">Get Result by Id</label>
            <input
              onChange={(e) => setId(e.target.value)}
              value={T_id}
              type="text"
              name="id"
              id="id"
              placeholder="Put Id"
              required
            />
          </div>

          <button className="btn" onClick={sendId()} type="submit">
            Get Result
          </button>
        </form>
      </div>
        </div>
    )
}

export default Head
