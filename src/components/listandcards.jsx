import React from 'react'

function listandcards({reference, card, list}) {
  return (
    <div>
      <div className='flex relative border-t-[1px] border-zinc-800 py-[1.2vw] pl-[2vw]'>
        <div><a className='underline' href="">{list.name}</a></div>
        <div className='absolute left-[50%]'>{list.owner}</div>
        <div><a className=' absolute underline right-0 pr-[3vw]' href="">{list.read}</a></div>
      </div>
    </div>
  );
}

export default listandcards