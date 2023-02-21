import React from 'react'
import FooterCard from './FooterCard'
import FooterLeft from './FooterLeft'

function Footer() {
  return (
    <footer>
        <div className="footer-all">
            <FooterLeft/>
            <div className="footer-mid-cont">
                <FooterCard
                one={'Landings'}
                two={'Home'}
                theere={'Products'}
                four={"Services"}
                />
                <FooterCard
                one={'Company'}
                two={'Home'}
                theere={'Careers'}
                four={"Services"}
                hiring={'Hiring!'}
                />
                <FooterCard
                one={'Company'}
                two={'Home'}
                theere={'Careers'}
                four={"Services"}
                />
            </div>
        </div>
    </footer>
  )
}

export default Footer