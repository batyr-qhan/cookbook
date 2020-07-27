import React from 'react'
import Wysiwyg from '../../components/Wysiwyg/Wysiwyg'
import data from './assets/data'
import './PageDetails.scss'

function PageDetail () {
  const { text, title, date, image } = data
  return (
    <div>
      <div className='header'>
        <div className='header__title'>
          <h1>{title}</h1>
          <h4>{date}</h4>
        </div>
        <div className='header__image' dangerouslySetInnerHTML={{ __html: image }} />
      </div>
      <Wysiwyg text={text} date={date} title={title} />
    </div>
  )
}

export default PageDetail
