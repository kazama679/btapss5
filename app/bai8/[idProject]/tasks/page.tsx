import React from 'react'

export default function page(props:any) {
    const {params}=props
    const listTask=[
      {
        content:"lazada1",
        idTask:1,
        id:1
      },
      {
        content:"lazada2",
        idTask:2,
        id:1
      },
      {
        content:"lazada3",
        idTask:3,
        id:2
      }
    ]
    const filter123 = listTask.filter((item) => {
      return item.id === Number(params.idProject);
    });  
  return (
    <div>
      Danh sách nhiệm vụ của dự án có id: {params.idProject}
      {filter123.map((item)=>{
        return <li key={item.idTask}>{item.content}</li>
      })}
    </div>
  )
}