import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from "framer-motion"
import { query } from '@/lib/db'

const Home = ({posts}) => {  
  console.log(posts)
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://hellofaizan.me/api/lanyard', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [data]);

  return (
    <>
    <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}>
      <p className="text-3xl font-bold underline">
        Hello World
      </p>
    </motion.div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await query('SELECT * FROM posts');
  return {
    props: {
      posts,
    },
  };
}

export default Home