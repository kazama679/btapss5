'use client'
import { log } from 'console'
import React from 'react'

export default function UserDetail(props:any) {
  const {params} = props
  return (
    <div>
      id là: {params.idUser}
    </div>
  )
}
