import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Recommended.css'

const Recommended = () => {
  return(
    <Tabs className="tabs">
      <TabList>
        <Tab  className="tab_item">共通</Tab>
        <Tab　className="tab_item">寺崎</Tab>
        <Tab　className="tab_item">谷崎</Tab>
        <Tab　className="tab_item">小野寺</Tab>
      </TabList>
      <TabPanel>
        <h2>CodeVillage</h2>
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
  )
}

export default Recommended