import React from 'react'
import GetTodos from '../GetTodos'
import GetClientTodos from '../GetClientTodos'
import { getTodos } from '@/lib/action';

export default async function TodoSide() {
const todos = await getTodos();
  return (
    <div className='w-96 h-min-screen bg-gray-400'>
      <div className="flex  flex-col items-center h-1/2 ">
        <GetClientTodos todos={todos}/>
      </div>
    </div>
  )
}
