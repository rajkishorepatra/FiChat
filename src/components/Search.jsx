import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user...'/>
      </div>
      <div className="userChat">
        <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
        <div className="userChatInfo">
          <span>Jojo</span>
        </div>
      </div>
    </div>
  )
}

export default Search