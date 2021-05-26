import React from 'react'
import { Link } from 'react-router-dom'
import  './Album.css'

const Album = () => {
  return (
    <div>
        アルバム機能
        <br />
        <Link to={`/`}>最初の画面 </Link>
         <br />
        <Link to={`/Recommended`}>おすすめ機能 </Link>
        <div>
         <p className="family">寺崎 遼</p>
         <p>ここに文章を入れます</p>
       </div>
       <div>
         <p className="family">谷崎 奨</p>
         <p>ここに文章を入れます</p>
       </div>
       <div>
         <p className="family">小野寺一樹</p>
         <p>ここに文章を入れます</p>
       </div>
    </div>
  )
}

export default Album