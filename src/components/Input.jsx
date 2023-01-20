import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something...'/>
      <div className="send">
        <img src="https://cdn-icons-png.flaticon.com/128/1837/1837526.png" alt="" />
        <input type="file" style={{display:"none"}} id='file'/>
        <label htmlFor="file">
          <img src="https://www.svgrepo.com/show/256644/attachment-attach.svg" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input