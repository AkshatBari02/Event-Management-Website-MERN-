import Carousel from "react-bootstrap/Carousel";
import event1 from "./../../images/event-1.jpg";
import event2 from "./../../images/event-2.jpg";
import event3 from "./../../images/event-3.jpg";
import React, {useState } from "react";
import "./../../css/homeCarousel.css";
import axios from "axios";
import toast from "react-hot-toast";

function HomeCarousel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          mobileNumber,
          event,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMobileNumber("");
        setEvent("");
        setMessage("");
        alert("Message Sent Succesfully !");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An unknown error occurred");
        }
      });
  };
  return (
    <>
      <Carousel interval={3000} className="home-carousel">
        <Carousel.Item>
          <img src={event1} className="carousel-img carousel-item-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={event2} className="carousel-img carousel-item-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={event3} className="carousel-img carousel-item-img" />
        </Carousel.Item>
      </Carousel>

      <div>
        <form onSubmit={handleSubmit} className="home-container" id="contact">
          <h3 className="home-carousel-h3">Contact Us</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="mobileNumber">mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="+91"
            />
          </div>
          <div className="contact-form">
            <label htmlFor="event">Event:</label>
            <select
              id="event"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            >
              <option value="">Select an event</option>
              <option value="wedding">wedding</option>
              <option value="social events">Social Events</option>
              <option value="corporate events">Corporate Events</option>
              <option value="other">other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your enquiry"
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default HomeCarousel;
