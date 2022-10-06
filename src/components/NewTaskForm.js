import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit,theCategory}) {
  const [text,setTask]=useState('')
  const [category,setCategory]=useState('Code')

function handleSubmit(e){
e.preventDefault()
onTaskFormSubmit({text,category})
setTask('')
setCategory('Code')

}

function changeLabel(e){
setTask(e.target.value)

}

function handleCategory(e){
  setCategory(e.target.value)

}


  return (
    <form className="new-task-form"   onSubmit={handleSubmit}>
    <label>
      Details
      <input type='text' value={text} onChange={changeLabel} />
    </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {/* render <option> elements for each category here */}
        {theCategory?.map((CATEGORY)=>(
          <option key={CATEGORY}>{CATEGORY}</option>

        ))}
        </select>
      </label>

      <input type="submit" value="Add task"   />
    </form>
  );
}

export default NewTaskForm;
