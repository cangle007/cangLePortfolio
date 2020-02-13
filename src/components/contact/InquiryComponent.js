import React from 'react';
import { Icon } from 'semantic-ui-react';
import resume from '../../images/cl_resume.pdf';

export default function InquiryComponent({ handle_openTabGithub, handle_openTabLinkedin }) {
  return (
    <div className='myContact-container'>
      <form id='inputField-item' action='mailto:cang.b.le@gmail.com' method='GET' encType='text/plain'>
        <p>contact</p>
        <p>please contact me for any front-end inquiry related</p>

        <input placeholder='name' type='text' tabIndex='1' required autoFocus />
        <input placeholder='email' type='text' tabIndex='1' required autoFocus />
        <textarea placeholder='Type your Message Here....' tabIndex='5' required />
        <button id='myContact-submit-btn' name='submit' type='submit'>
          SUBMIT
        </button>

        <div id='socialMedia-item'>
          <div id='resume-item'>
            <a href={resume} download>
              <Icon name='file outline' />
              <p>RESUME</p>
            </a>
          </div>

          <div id='github-item' onClick={handle_openTabGithub}>
            <Icon name='github' />
            <p>GITHUB</p>
          </div>

          <div id='linkedin-item' onClick={handle_openTabLinkedin}>
            <Icon name='linkedin' />
            <p>LINKEDIN</p>
          </div>
        </div>
      </form>
    </div>
  );
}
