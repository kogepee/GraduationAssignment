import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Recommended.css'

const Recommended = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] =useState([])

  const addTodo = content => {
    setTodos([
      ...todos,
      {
        content:content
      }
    ])
  }

  const handleSubmit = e => {
    e.preventDefault()
    if ( value =='') {
      alert('入力してください');
      return false;
    } else {
    }
    addTodo(value)
    setValue('')
  }

  return(
    <div>
      <h1>おすすめ機能</h1>
      <br />
      <div className="transition">
      <Link to={`/`}>最初の画面</Link>
      <Link to={`/Album`}>アルバム</Link>
      <br />
      <br />
      </div>
      <Tabs className="tabs">
        <TabList>
          <Tab  className="tab_item">共通</Tab>
          <Tab　className="tab_item">寺崎</Tab>
          <Tab　className="tab_item">谷崎</Tab>
          <Tab　className="tab_item">小野寺</Tab>
        </TabList>
        <TabPanel>
          <h2>CodeVillage</h2>
          <div addTodo={addTodo} />
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              onChange={e => {
                setValue(e.target.value)
                console.log(e.target.value)
              }}
              value={value}
              />
          </form>
        </TabPanel>
        <TabPanel>
          <h2>寺崎おすすめ</h2>
        </TabPanel>
        <TabPanel>
          <h2>谷崎おすすめ</h2>
        </TabPanel>
        <TabPanel>
          <h2>小野寺おすすめ</h2>
        </TabPanel>    
      </Tabs>

    </div>
  )
}

export default Recommended