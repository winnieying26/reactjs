import { useState } from "react";
interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: Person) => {
  {/*const [isShowInfo, setShowInfo] = useState<boolean>(false);
  const toggleInfo = ()=>{
    setShowInfo((prev) => !prev)
  } */}

  const [personBio, setPersonBio] = useState<string | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setPersonBio(event.target.value);

  }
  {/* const handleSubmit = (event : React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    } 
    */}


  return (
    <div>
     
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>This persion {props.isMarried ? "Married" : "Single"}</p>

      {/*<button onClick={toggleInfo}>Toggle Info</button> */}
      <p>{props.name} Bio:{ personBio === null ? "No Bio Available" : personBio } </p>
      <input onChange = {handleChange}/>
     
    </div>
  );
};
