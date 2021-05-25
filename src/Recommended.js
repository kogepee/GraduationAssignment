import React from 'react'
import './Recommended.css'

const Recommended = () => {
  return(
  <div className="tabs">
    <input id="all" type="radio" name="tab_item" checked />
    <label class="tab_item" for="all">総合</label>

    <input id="programming" type="radio" name="tab_item" />
    <label className="tab_item" for="programming">プログラミング</label>
    
    <input id="design" type="radio" name="tab_item" />
    <label className="tab_item" for="design">デザイン</label>
    
    <input id="design2" type="radio" name="tab_item" />
    <label className="tab_item" for="design2">デザイン2</label>
    
    <div className="tab_content" id="all_content">
        総合の内容がここに入ります
    </div>
    <div className="tab_content" id="programming_content">
        プログラミングの内容がここに入ります
    </div>
    <div className="tab_content" id="design_content">
        デザインの内容がここに入ります
    </div>
    <div className="tab_content" id="design2_content">
        デザイン2の内容がここに入ります
    </div>
  </div>
)
}

export default Recommended