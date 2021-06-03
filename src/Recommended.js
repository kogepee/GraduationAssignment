// reactインポート
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactPlayer from 'react-player';
import './Recommended.css';
import firebase from './firebase';

// メイン部分ここから
const Recommended = () => {
  const [messages, setMessages] =useState([])
  const [value, setValue] = useState('')

// firebaseからインスタンスを取得
  useEffect(() => {
    firebase.firestore().collection('messages')
        .onSnapshot((snapshot) => {
            const messages = snapshot.docs.map(doc => {
                return doc.data()
            })
            setMessages(messages)
        })
}, [])

// 挙動のキャンセルとアラート機能、テキストの追加
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
      {/* タイトル名 */}
      <h1>おすすめ機能</h1>
      <br />
      {/* リンク先 */}
      <div className="transition">
        <Link to={`/`}>最初の画面</Link>
        <Link to={`/Album`}>アルバム</Link>
        <br />
        <br />
      </div>
      {/* タブの大枠 */}
      <Tabs className="tabs">
        <TabList>
          <Tab  className="tab_item">共通</Tab>
          <Tab　className="tab_item">寺崎</Tab>
          <Tab　className="tab_item">谷崎</Tab>
          <Tab　className="tab_item">小野寺</Tab>
        </TabList>
        {/* 共通のタブパネル */}
        <TabPanel>
          <a href="https://js.course.codevillage.jp/">
          CodeVillage
          </a>
          <br />
          <li>
            {messages.map((message) => {
              return <li>{message.content}</li>;
            })}
          </li>
          <br />
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
        {/* 寺崎のタブパネル */}
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
        {/* 谷崎のタブパネル */}
        <TabPanel>
          <h2>谷崎おすすめ</h2>
        </TabPanel>
        {/* 小野寺のタブパネル */}
        <TabPanel>
          <h2>小野寺おすすめ</h2>
        </TabPanel>    
      </Tabs>

    </div>
  )
}
// メイン部分ここまで

// Recommendedを外に出す
export default Recommended