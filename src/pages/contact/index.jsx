import React from "react";
import "./contact.scss"

function Contact (){
    return(
        <div className="contact-cont">
          <div className="text-block">
            <h2 className="contact-h2">Contact Us</h2>
            <p className="contact-prg">Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="map-block">
            <iframe className="map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11678.18929247963!2d36.422193887471416!3d34.176315814360514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15226f7856bdd3c9%3A0xfba3520ea2765cb9!2sZay%20shop!5e0!3m2!1sru!2sam!4v1691438671353!5m2!1sru!2sam" allowFullScreen="" loading="lazy"
               referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="inputs-block">
              <div className="name-mail G-flex G-flex-between">
                <div className="name-block">
                  <p className="input-name">Name</p>
                  <input className="input input-name" type="text" placeholder="Name"/>
                </div>
                <div className="mail-block">
                  <p className="input-name">Email</p>
                  <input className="input input-mail" type="text" placeholder="Email"/>
                </div>
              </div>
              
              <div className="subject">
                  <p className="input-name">Subject</p>
                <input className="input input-subject" type="text" placeholder="Subject"/>
              </div>
            
              <div className="message">
                  <p className="input-name">Message</p>
                <textarea className="input-message" name="" id="1" cols="30" rows="10" placeholder="Message"></textarea>
              </div>
            
              <div className="button-block">
                  <button className="lets-talk-button">Let’s Talk</button>
              </div>
          </div>
        </div>
    )
}

export default Contact