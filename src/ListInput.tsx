import React, { useState, ChangeEvent, SetStateAction } from "react";
import './ListInput.css'

type Props = {
  setPromise:(arg: string) => void
}

const ListInput: React.FC<Props> = ({
  setPromise
}) => {

  const [userInput, setUserInput] = useState('')

  const clearInput = () => {
    setUserInput('')
  }

  const submitPromise = () => {
    const promise = userInput
    setPromise(promise)
    clearInput()
  }



  return (
    <form>
      <div className="container">
        <input
          id="promise"
          type="text"
          placeholder="Make a promise to yourself and keep it..."
          name="promise"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          />
          <button>Submit Your Promise</button>
      </div>
    </form>
  )
}


export default ListInput;