/* import React, { useState } from "react";

const Test1 = () => {
  const [myimg, setMyimg] = useState([]);
  const [file, setFile] = useState();
  const elememt = (t) => {
    return setMyimg([t, ...myimg]);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    elememt(file);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files)}></input>
        <img className="brad" src={file}></img>
      </form>
    </div>
  );
};

export default Test1;
 */