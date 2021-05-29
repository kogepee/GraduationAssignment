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
        <p className="box-title">寺崎 遼</p>
        <p>ここに文章を入れます
          <br />ここに文章を入れます
          <br />ここに文章を入れます
        </p>
      </div>
      <div className="box2">
        <p className="box-title">谷崎 奨</p>
        <p>ここに文章を入れます
          <br />ここに文章を入れます
          <br />ここに文章を入れます
        </p>
      </div>
      <div className="box3">
        <p className="box-title">小野寺一樹</p>
        <p>ここに文章を入れます
          <br />ここに文章を入れます
          <br />ここに文章を入れます
        </p>
      </div>
    </div>
  )
}

export default Album