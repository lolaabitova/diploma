const { useState } = require("react");

function AddCategory(){ 
  const [category, setCategory] = useState("");
  return(
    <div>
      <input type="text" size="15" placeholder="category name"/>
      <button onClick={onAddCategory}>+</button>
    </div>
  )
} 