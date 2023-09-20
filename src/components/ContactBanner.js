import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineForm } from 'react-icons/ai'
const resume = 'resume.pdf'

function ContactBanner(props){

  return(
    <>

        <div className='contactBanner'>
          <div className='centerContactBanner'>
          <ul>  
                <li className='contactLi'>
                  <div>
                    <a href={resume} target='blank'>
                      <i className='icon'><FaRegFilePdf size='4vw'/></i>
                      <h1>Resume</h1>
                    </a>
                  </div>
                  <div>
                    <i className='icon'><BsPersonCircle size='4vw'/></i>
                    <h1>About</h1>
                  </div>
                  <div>
                    <a href='mailto:travis@lamberte.com'>
                      <i className='icon'><MdOutlineEmail size='4vw'/></i>
                      <h1>Contact</h1>
                    </a>
                  </div>
                  {/* <div>
                    <i className='icon'><AiOutlineForm size='4vw'/></i>
                    <h1>Contact</h1>
                  </div> */}
                </li> 
          </ul>
        </div>
      </div>
    </>
  )
}


export default ContactBanner;