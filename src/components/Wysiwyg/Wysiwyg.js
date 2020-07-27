import React from 'react'
import PropTypes from 'prop-types'
import './Wysiwyg.scss'

function Wysiwyg ({ text, title }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope='col'>
              Title
            </th>
            <th scope='col'>
              Content
            </th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td dangerouslySetInnerHTML={{ __html: title }} />
            {/* <td dangerouslySetInnerHTML={{ __html: image }} /> */}
            {/* <td dangerouslySetInnerHTML={{ __html: date }} /> */}
            <td dangerouslySetInnerHTML={{ __html: text }} />
          </tr>
        </tbody>
      </table>
    </div>
    // <div className='wysiwyg' dangerouslySetInnerHTML={{ __html: text }} />
  )
}

Wysiwyg.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
  // date: PropTypes.string,
  // image: PropTypes.string
}

export default Wysiwyg
