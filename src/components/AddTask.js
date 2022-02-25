import {useState} from 'react'
function AddTask({onAdd}) {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setRemider] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text){
            alert('Please add a text');
            return
        }
        onAdd({text, day, reminder});

        setText('')
        setDay('')
        setRemider(false)
    }
  return (
     <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add Task"></input>
        </div>
        <div className="form-control">
            <label>Date/Time</label>
            <input type="text" value={day} onChange={(e)=>setDay(e.target.value)} placeholder="Add Date/Time"></input>
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input checked={reminder} value={reminder} onChange={(e)=>setRemider(e.currentTarget.checked)} type="checkbox"></input>
        </div>
        <input className="btn btn-block" type="submit" value="Save Task"></input>
    </form>
  )
}

export default AddTask