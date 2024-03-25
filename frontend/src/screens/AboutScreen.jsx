/** @format */
import '../styles/about.css';
import React, { useEffect } from 'react';
import girlwater from '../assets/girlwater.jpg';
import plasic2 from '../assets/plasic2.jpg';

const AboutScreen = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className="about-grid">
            <div className="about-left">
              <div>
                <div className="about-title-container animate-about">
                  <h1 className="about-title ff-serif fs-900">
                    Jas<span className="accent">o</span>n
                  </h1>
                  <p className="about fs-300 upper">
                    Fitness Trainer and Nutrition Coach
                  </p>
                </div>
                <div className="aboutme-container fs-400 letter-s">
                  <div className="animate-about-1">
                    <div className="underline">
                      <h2 className="letter-m fs-600">About me</h2>
                    </div>
                    <p className="about-paragraph ff-sans fs-400 l-1">
                      Hello there! My name is Jason Bennett, and I am a fervent
                      advocate for nutrition, fitness and a healthy lifestyle.
                      However, my journey to reach this point wasn't always
                      easy. Having grown up in a small town where unhealthy
                      habits were the norm, I found myself stuck in a cycle of
                      poor eating and a sedentary lifestyle. Fortunately, a
                      pivotal moment sparked a desire for change within me. I
                      was determined to transform myself into the best version I
                      could be, so I embarked on a journey of self-discovery and
                      growth. Through hard work and dedication, I managed to
                      reclaim my health and also discovered a deep passion for
                      helping others do the same. As a certified fitness trainer
                      and nutrition coach, I am now on a mission to inspire and
                      empower individuals to take control of their well-being
                      and unlock their full potential. I welcome you to join me
                      on this journey towards a happier, healthier life.
                    </p>
                  </div>
                  <div className="timeline animate-about-2">
                    <div className="underline">
                      <h3 className="timeline-t fs-600">Timeline</h3>
                    </div>
                    <div>
                      <span className="time">Background</span>
                      <p className="time-p">
                        "I grew up in a small town where there were more
                        fast-food joints than gyms. My childhood was filled with
                        unhealthy eating habits and a sedentary lifestyle. By
                        the time I reached my late teens, I found myself
                        overweight, lacking energy, and unhappy with my
                        appearance."
                      </p>
                    </div>
                    <div>
                      <span className="time">Turning Point</span>
                      <p className="time-p">
                        When I was 20 years old, I had a wake-up call. found it
                        difficult to climb a flight of stairs without getting
                        out of breath. This experience made me realize that I
                        needs to make a change in my life. Therefore, I started
                        researching nutrition, fitness, and healthy living. read
                        books ect, searched for information online, and sought
                        guidance from experts in the field.
                      </p>
                    </div>
                    <div className="underline">
                      <span className="time">Transformation Journey</span>
                      <p className="time-p">
                        The journey towards a healthier lifestyle was tough for
                        me. I encountered multiple setbacks, struggled with
                        self-doubt, and faced resistance from my friends and
                        family who were not accustomed to healthy habits.
                        However, I remained committed to my goal and started by
                        making small, sustainable changes to my diet. I
                        gradually incorporated more fruits, vegetables, and lean
                        proteins while cutting back on processed foods and
                        sugary drinks. In addition to overhauling my diet, I
                        also adopted a regular exercise routine. I started with
                        simple workouts at home and gradually progressed to
                        weightlifting and cardiovascular exercises. In the
                        process, I discovered a passion for fitness and the
                        transformative power it had on both my body and mind.
                      </p>
                    </div>
                    <div className="underline">
                      <span className="time">Becoming an Advocate</span>
                      <p className="time-p">
                        As my journey progressed, I realized, I wanted to share
                        my experiences and knowledge with others. I became
                        certified as a personal trainer and nutrition coach,
                        eager to help people like my former self transform their
                        lives for the better. Through social media, blogs, and
                        community workshops, I began spreading his message of
                        holistic health, emphasizing the importance of
                        nutrition, lifestyle, and fitness in achieving overall
                        well-being.
                      </p>
                    </div>
                  </div>
                  <div className="mission animate-about-3">
                    <h4 className="fs-600 underline">The Mission</h4>
                    <p className="my-mission">
                      The mission is to inspire and empower individuals to take
                      control of their health and fitness, regardless of where
                      they are starting from. I strongly believe that everyone
                      has the potential to become the best version of themselves
                      through hard work, determination, and proper guidance. My
                      own journey and the experiences of those who have
                      supported me along the way have motivated me to encourage
                      others to prioritize their health and strive for
                      excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-right">
              <picture>
                <source
                  as="image"
                  srcSet={plasic2}
                  media="(min-width: 1250px)"
                />
                <img as="image" src={girlwater} alt="Image for decortive" />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutScreen;
