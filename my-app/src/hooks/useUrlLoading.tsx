import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

const useUrlLoading = (url: string, deps:[] = []) => {// deps用来控制什么时候重新触发
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
      setLoading(true)
      axios.get(url).then(res=>{
          setData(res.data)
          setLoading(false)
      })
  })
  
  return [data,loading]
}
export default useUrlLoading