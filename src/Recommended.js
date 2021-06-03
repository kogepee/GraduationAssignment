import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from 'react-player';
import './Recommended.css';
import firebase from './firebase';

const Recommended = () => {
  const [messages, setMessages] =useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    firebase.firestore().collection('messages')
        .onSnapshot((snapshot) => {
            const messages = snapshot.docs.map(doc => {
                return doc.data()
            })
            setMessages(messages)
        })
}, [])

const handleSubmit = e => {
  e.preventDefault()
  if ( value ==='') {
    alert('入力してください');
    return false;
  } 
  firebase.firestore().collection('messages').add({
      content: value,
  })
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
          <a href="https://js.course.codevillage.jp/">
          CodeVillage
          </a>
          <li>
            {messages.map((message) => {
              return <li>{message.content}</li>;
            })}
            </li>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={value}
              onChange={e => {
                setValue(e.target.value)
                console.log(e.target.value)
              }}
            />
            <button type="submit">送信</button>
          </form>
        </TabPanel>
        <TabPanel>
          <ul>
            <li> 動画サンプル
              <ReactPlayer 
                url='https://www.youtube.com/watch?v=oUFJJNQGwhk'　
                controls={true}
                volume
                muted
                width="256px"
                height="144px"
              />
            </li>
          </ul>
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