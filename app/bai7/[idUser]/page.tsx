import React from 'react'

export default function page(props:any) {
    const {params} = props
    
  return (
    <div>
      danh sách bài viết của User id: {params.idUser}
    </div>
  )
}
