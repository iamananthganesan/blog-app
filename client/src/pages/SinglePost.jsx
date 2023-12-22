import React from 'react'
import './SinglePost.scss'
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import MenuBar from '../components/MenuBar'
const SinglePost = () => {
const handleEditBlog = () =>{
  console.log('edit blog');
}
const handleBlogDelete = () =>{
  console.log('Delete blog');
}
  return (
    <div className='singlePost-wrapper'>
      <div className='content'>
        <figure>
          <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
        </figure>
        <div className='user-details'>
          <figure>
            <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
          </figure>
          <div className='user-info'>
            <span>Senthil Anand</span>
            <p>Posted a day ago</p>
          </div>
          <div className='controls'>
            <FaEdit onClick={handleEditBlog} /> <FaRegTrashCan onClick={handleBlogDelete}/>
          </div>
        </div>
        <div className='postDes'>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
          <p>
            Laliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis
            Lorem, ipsum dolor sit amet consectet Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis
            Lorem, ipsum dolor sit amet consectet ur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          </p>
        </div>
      </div>
      <div className='side-menu'>
        <MenuBar />
      </div>
    </div>
  )
}

export default SinglePost
