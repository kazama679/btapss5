"use client"
import React from 'react'

export default function page(props:any) {
  const {params} = props

  const posts=[
    {
      content:"nhà bà nữ",
      idPost:123,
      idUser:1
    },
    {
      content:"nhà bà nữ",
      idPost:1253,
      idUser:2
    },
    {
      content:"nhà bà n31231231",
      idPost:12313231,
      idUser:1
    }
  ]
  const filter123 = posts.filter((item) => {
    return item.idUser === Number(params.idUser);
  });  
  console.log(123,filter123,params);
  return (
    <div>
      Danh sách bài viết của User id: {params.idUser}
      {filter123.map((item)=>{
        return <li key={item.idPost}>{item.content}</li>
      })}
    </div>
  )
}
