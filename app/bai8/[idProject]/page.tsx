import React from 'react'

export default function page(props:any) {
    const {params}=props
  return (
    <div>
      Trang chi tiết dự án có id là: {params.idProject}
    </div>
  )
}
