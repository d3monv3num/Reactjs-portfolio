import React from 'react'

const SkillCardContent = (props) => {
  return (
    <div className='card'>
        <h3>- {props.title} -</h3>
        <span className='bar'></span>
        {props.content.map((element,index)=>(<p>{element}</p>))}
    </div>
  )
}

export default SkillCardContent;
