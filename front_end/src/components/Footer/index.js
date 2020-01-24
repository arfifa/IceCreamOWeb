import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="container mb-3 mt-n5">
      <div className="content"></div>
      <footer className="row">
        <div className="col-xs-12 col-sm-6">
          <ul className="row" >
            <li>
              <a href="#">
                <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="logo" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_google_plus-128.png" />
              </a>
            </li>
          </ul>
        </div>

        <div className="copyright col-xs-12 col-sm-3 col-sm-pull-6">
          <p> &copy; Me from now to eternity </p>
        </div>

        <div className="impressum col-xs-12 col-sm-3 col-sm-pull-6">
          <h3>Ice Cream O </h3>
          <p> Jl.sukasari 3 no 47 Bogor Jawa Barat </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer


