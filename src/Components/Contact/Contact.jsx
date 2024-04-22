import React from "react";
import "./contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7233fbe-0577-4153-940f-5a0f1bb5f637");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className="contact" id='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni facere
          accusantium aut, reiciendis asperiores assumenda sequi error possimus
          totam, tempora cum dolorem mollitia veritatis! Sit sint numquam qui
          suscipit fugit?
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@dhanush.com</li>
            <li><img src={phone_icon} alt="" />+1 123 456 789</li>
            <li><img src={location_icon} alt="" />77 endhuto Ave, Cambrige <br /> MA 02134, United states</li>
            
        </ul>
      </div>
      <div className="contact-col">
        <form  onSubmit={onSubmit}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" placeholder="Enter your name" name="name" required/>
            <label htmlFor="pn">Phone Number</label>
            <input type="tel" id="pn" name="phone" placeholder="Enter you mobile number" required />
            <label >Write Your message here!</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
