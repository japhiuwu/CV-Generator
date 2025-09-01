import { useState } from 'react'
export {AddBtn, RemoveBtn}

function AddBtn(){
    return(
        <button className='m-2 bg-green-600 w-12 rounded-2xl font-bold hover:cursor-pointer hover:bg-green-700'>+</button>
    )
}

function RemoveBtn(){
    return(
        <button className='m-2 bg-red-600 w-12 rounded-2xl font-bold hover:cursor-pointer hover:bg-red-700'>-</button>
    )
}

