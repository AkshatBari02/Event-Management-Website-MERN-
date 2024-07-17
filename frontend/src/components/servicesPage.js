import Carousel from "react-bootstrap/Carousel";
import "../css/servicesPage.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function ServicesPage({ img1, img2, img3, img4, img5, txt }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [event, setEvent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        process.env.REACT_APP_API_URL,
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
        setName("");
        setEmail("");
        setMobileNumber("");
        setEvent("");
        setMessage("");
        alert("Message Sent Succesfully !");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        alert("Failed to send message! Try again later!");
      });
  };
  return (
    <>
      <section id="servicesSection1">
        <Carousel interval={3000} className="services-carousel">
          <Carousel.Item>
            <img
              src={img1}
              className="carousel-img services-carousel-item-img"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img2}
              className="carousel-img services-carousel-item-img"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img3}
              className="carousel-img services-carousel-item-img"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="container info-1">
          <h3>
            At Celebrations, we bring a fresh perspective to Weddings,
            Corporate, Social, and MICE events, transforming your visions into
            memorable experiences.
          </h3>

          <span>
            Celebrations focuses on crafting unforgettable weddings, with
            meticulous planning and keen attention to detail. From breathtaking
            venues to personalized themes, every element is thoughtfully curated
            to reflect the unique love story of each couple. Our enthusiastic
            team is committed to ensuring a seamless experience, guiding you
            through every step from inception to execution, and creating magical
            moments that will be cherished forever.
          </span>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 services-txt">
              <h3>What We Do?</h3>
              <span>{txt}</span>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 services-img">
              <img src={img4} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section id="servicesSection2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 services-txt">
              <h3>Why Celebrations?</h3>
              <span>
                At Celebrations, we bring your vision to life with meticulous
                planning and innovative ideas. We handle your budget
                effectively, respect deadlines, and create distinctive concepts
                for your event. Our team coordinates with all vendors and
                ensures everything runs seamlessly. Opt for Celebrations for a
                hassle-free and unforgettable event experience.
              </span>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12 services-img">
              <img src={img5} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section id="servicesSection3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 services-h3">
              <h3>Services We Provide</h3>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Venue</h5>
                  <p className="card-text" style={{ display: "none" }}>
                    Our specialized venue selection services guarantee the ideal
                    setting for your event.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Decor</h5>
                  <p className="card-text" style={{ display: "none" }}>
                    We craft exquisite decor that transforms venues into
                    awe-inspiring environments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Photography</h5>
                  <p className="card-text" style={{ display: "none" }}>
                    Expert photography services meticulously capture each
                    unforgettable moment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Food</h5>
                  <p className="card-text" style={{ display: "none" }}>
                    Our premium catering services captivate your guests with
                    exceptional culinary delights.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Audio & Visual</h5>
                  <p className="card-text" style={{ display: "none" }}>
                    We offer top-notch audio-visual solutions, ensuring
                    exceptional sound and visuals for an unforgettable
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicesSection4">
        <div className="container enquiry-form">
          <h3 style={{ textAlign: "center" }}>Enquiry Form</h3>
          <div>
            <form onSubmit={handleSubmit} className="enquiry-container">
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
                <label htmlFor="mobileNumber">Mobile Number:</label>
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
                  <option value="other">Other</option>
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
              <button type="submit" className="enquiry-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default ServicesPage;
