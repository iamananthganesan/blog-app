import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CreateBlog.scss'
const CreateBlog = () => {
const [blogTitle, setBlogTitle] = useState()
  const [blogDesc, setBlogDesc] = useState('');

  return (
    <div className='createBlog'>
      <div className='content'>
        <input type='text' onChange={(e) => { setBlogTitle(e.target.value) }} value={blogTitle} placeholder='Title' />
        <div className='editorContainer'>
        <ReactQuill className='editor' theme="snow" value={blogDesc} onChange={setBlogDesc} />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h3>Publish</h3> 
          <span><strong>Status</strong>: Draft</span>
          <span><strong>Visibility</strong>: Public</span>
          <input type='file' id='file' />
          <label htmlFor='file'>Upload</label>
          <div className='btn-group'>
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className='item'>
          <h3>Category</h3>
          <div className='formControl'>
            <input type='radio' name='category' value='art' id='art' />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='formControl'>
            <input type='radio' name='category' value='science' id='science' />
            <label htmlFor='science'>Science</label>
          </div>
          <div className='formControl'>
            <input type='radio' name='category' value='technology' id='technology' />
            <label htmlFor='technology'>technology</label>
          </div>
          <div className='formControl'>
            <input type='radio' name='category' value='cinema' id='design' />
            <label htmlFor='design'>Cinema</label>
          </div>
          <div className='formControl'>
            <input type='radio' name='category' value='design' id='design' />
            <label htmlFor='design'>Design</label>
          </div>
          <div className='formControl'>
            <input type='radio' name='category' value='food' id='food' />
            <label htmlFor='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBlog
