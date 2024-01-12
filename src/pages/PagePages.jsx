import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Trending from "../components/trending/Trending"
import Upcomming from "../components/upcoming/Upcomming"
import { latest, recommended, upcome } from "../dummyData"

const HomePage = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Upcomming items={items} title='Series to Watch' />
      <Trending  title='Trending Series' />
      <Upcomming items={rec} title='Recommended Series' />
    </>
  )
}

export default HomePage
