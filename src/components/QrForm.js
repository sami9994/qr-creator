import { useState } from 'react'
import QrConvertor from './QrConvertor'

const QrForm = () => {
  const [link, setLink] = useState('')
  const [url, setURL] = useState('')
  const handleChange = (event) => {
    setLink(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setURL(link)
  }
  return (
    <div>
      <form className='form-style'>
        <div className='input-block'>
          <label htmlFor='url' id='url'>
            <h1>input your url</h1>
          </label>
          <input
            type='text'
            name='url'
            onChange={handleChange}
            placeholder='input url here'
          />
        </div>
        <button type='submit' className='btn' onClick={handleSubmit}>
          create your QR
        </button>
      </form>
      <QrConvertor url={url} />
    </div>
  )
}
export default QrForm
