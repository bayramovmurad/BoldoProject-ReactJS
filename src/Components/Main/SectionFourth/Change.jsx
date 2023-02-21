import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Change() {
  return (
    <div className='section-five-bottom-right'>
       <Accordion>
       <Accordion.Item eventKey="0">
        <Accordion.Header>We connect our customers with the best?</Accordion.Header>
        <Accordion.Body>
        We connect our customers with the best, and help them keep up-and stay open.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Android research & development rockstar? </Accordion.Header>
        <Accordion.Body>
        We connect our customers with the best, and help them keep up-and stay open.
        </Accordion.Body>
      </Accordion.Item>
       </Accordion>

    </div>
  )
}

export default Change