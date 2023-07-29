import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const Home = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get('https://hellofaizan.me/api/lanyard', {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);
  //TODO Need to Handle Cors Error

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>
        <div className="grid h-screen px-4 place-content-center">
          <div className="text-center">
            <h1 className="font-black text-gray-200 text-3xl">Lets build something new 🚀</h1>
          </div>
        </div>

      </motion.div>
    </>
  )
}


export default Home