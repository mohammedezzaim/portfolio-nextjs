'use client';
import { useEffect } from 'react';
import styles from './AboutSection.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
  useEffect(() => {
    // Initialisation des animations AOS si nécessaire
    // Vous devrez installer et configurer AOS séparément
  }, []);

  return (
    <section id="about" className={`${styles.about} section`}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
          Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit 
          alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            <img  
              src="/images/profile-img.jpg" 
              className="img-fluid" 
              alt="Profile" 
            />
          </div>
          <div className="col-lg-9 content">
            <h2>UI/UX Designer &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <strong>Birthday:</strong> <span>1 May 1995</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <strong>Phone:</strong> <span>+123 456 7890</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <strong>City:</strong> <span>New York, USA</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <strong>Age:</strong> <span>30</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <strong>Degree:</strong> <span>Master</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <strong>Email:</strong> <span>email@example.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> 
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. 
              Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. 
              Sed et consectetur qui quia repellendus itaque neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;