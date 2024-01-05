import React from 'react';
import './whatGPT3.css';
import Features from '../features/Features';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-features'>
        <Features title='What is GPT-3?' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are boyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Features title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
        <Features title='Knowledge base' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'/>
        <Features title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments'/>
      </div>
    </div>
  )
}

export default WhatGPT3;