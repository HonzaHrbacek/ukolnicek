
import {useState} from 'react'

const AddTask = ({onAdd}) => {
  
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false) // default value
  
  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add task')
      return;
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label >Co?</label>
        <input type="text" placeholder="Přidej úkol..." value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label >Kdy?</label>
        <input type="text" placeholder="Přidej datum nebo termín..." value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label >Zvýraznit?</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.target.checked)}/>
      </div>
      <input className='form-submit' type="submit" value="Uložit"/>      
    </form>
  )
}

export default AddTask
