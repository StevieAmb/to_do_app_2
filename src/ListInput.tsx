import React, { useState, FormEvent } from "react";
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

  const submitPromise = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const promise = userInput
    setPromise(promise)
    clearInput()
  }



  return (
    <form onSubmit={(e) => submitPromise(e)}>
      <div className="container">
        <input
          id="promise"
          type="text"
          placeholder="Make a promise to yourself and keep it..."
          name="promise"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          />
           <input                 // removed from the button
            type="submit"
            value="Submit Your Promise"
            className="btn btn-dark btn-block" 
          />
          
      </div>
    </form>
  )
}


export default ListInput;