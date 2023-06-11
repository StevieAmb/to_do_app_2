import React, { useState} from "react";
import './ListInput.css'

const ListInput: React.FC = () => {

  const [ promise, setPromise ] = useState('')

  return (
    <form>
      <div className="container">
        <input
          id="promise"
          type="text"
          placeholder="Make a promise to yourself and keep it..."
          name="promise"
          value={promise}
          onChange={(e) => {setPromise(e.target.value)}}
          />
          <button>Submit Your Promise</button>
      </div>
    </form>
  )
}


export default ListInput;