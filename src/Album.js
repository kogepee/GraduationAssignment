import React from 'react'
import { Link } from 'react-router-dom'
import  './Album.css'

const Album = () => {
  return (
    <div>
      <h1>アルバム機能</h1>
      <br />
      <div className="transition">
        <Link to={`/`}>最初の画面 </Link>
         <br />
        <Link to={`/Recommended`}>おすすめ機能 </Link>
      </div>
      <div className="box1">
        <h2 className="name">寺崎 遼</h2>
        <div className="box1-1">
          <p>ここに文章を入れます
            <br />ここに文章を入れます
            <br />ここに文章を入れます
          </p>
        </div>
      </div>
      <div className="box2">
        <h2 className="name">谷崎 奨</h2>
        <div className="box2-2">
          <p>ここに文章を入れます
            <br />ここに文章を入れます
            <br />ここに文章を入れます
          </p>
        </div>
      </div>
      <div className="box3">
        <h2 className="name">小野寺一樹</h2>
        <div className="box3-3">
          <p>ここに文章を入れます
            <br />ここに文章を入れます
            <br />ここに文章を入れます
          </p>
        </div>
      </div>
    </div>
  )
}

export default Album