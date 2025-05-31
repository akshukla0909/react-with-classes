import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import UserClass from './components/UserClass'

const App = () => {
 
  const [list, setList] = React.useState(["A", "B", "C"])
  const[count, setCount] = React.useState(0)

  useEffect(() => {
    console.log("component mounted")
    const interval = setInterval(()=> {
      // setCount((prev)=> prev + 1)
    }, 1000)

    return ()=> {
      console.log("component unmounted", interval)
     clearInterval(interval) 
    }

  },[])

  // console.log(<UserClass />, "op")
  // console.log(<Home />, "op")

  return (
    <div>
      { list.map((item, index)=> (
        <div key={index} >{item}</div>
      )) }

      "count" : { count }
      <Home />
      <UserClass user={"akash"} age="12" />
      {/* <Routes>
        <Route path="/" element={<Home />}  /> 
        <Route path='/about' element={<About />} />
      </Routes> */}
    </div>
  )
}

export default App