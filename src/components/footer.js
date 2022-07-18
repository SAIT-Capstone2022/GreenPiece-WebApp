import React from 'react';
import MyImage from './GPlogo.jpg';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div className='footer'>
        <MDBFooter bgColor='green' className='text-center text-lg-left'>
      <div className='container p-4'>
        <MDBRow>
          <div className='col-lg-6 col-md-6 mb-4 mb-md-0'>

            <h5>
              Welcome to Green Piece
            </h5>
            <p>
              (403)xxx-xxxx
            </p>
            <p>
              GreenPiece@GreenPiece.com
            </p>
          </div>

          <div className='col-lg-2 col-md-6 mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Check Weather</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://www.theweathernetwork.com/ca' target="_blank" className='text-black'>
                  The Weather Network
                </a>
              </li>
            </ul>
          </div>

          <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>affiliated company</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='http://www.nu-worx.com/' target="_blank" className='text-black'>
                  Nu-Worx Technology 
                </a>
              </li>
  
            </ul>

          </div>

          <figure>
              <img src={MyImage} width="15%" alt='Green Piece Logo'></img>
            </figure>

          <hr />

          <div className='row'>
            <p className='col-sm'>
              &copy;{new Date().getFullYear()} GREENPIECE | All rights reserved | Terms Of Service | Privacy
            </p>

          </div>
        </MDBRow>
      </div>
    </MDBFooter>
    </div>
  );
};

export default Footer;