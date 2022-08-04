import React from 'react';
import MyImage from '../images/logo.jpg';
import { MDBFooter, MDBCol, MDBRow } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div className='footer m-0 p-0'>
      <MDBFooter bgColor='green' className='text-center text-lg-left'>
        <div className='container-fluid pt-4 mx-auto'>

          <MDBRow className='justify-content-center'>

            <MDBCol className='col-lg-2'>
              <figure>
                <img src={MyImage} width="200px" alt='Green Piece Logo'></img>
              </figure>
            </MDBCol>

            <div className='col-lg-2'>
              <h5>
                Green Piece
              </h5>
              <p>
                (403) xxx-xxxx
                <br></br>
                GreenPieceContact22@gmail.com
              </p>
            </div>

            <div className='col-lg-2'>
              <h5>Check Weather</h5>
              <ul className='list-unstyled'>
                <li>
                  <a href='https://www.theweathernetwork.com/ca' target="_blank" rel="noopener noreferrer" className='text-black'>
                    The Weather Network
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-lg-2'>
              <h5>Affiliated company</h5>
              <ul className='list-unstyled'>
                <li>
                  <a href='http://www.nu-worx.com/' target="_blank" rel="noopener noreferrer" className='text-black'>
                    Nu-Worx Technology
                  </a>
                </li>
              </ul>
            </div>

            <hr className='col-lg-10' />

            <div className='row'>
              <p>
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