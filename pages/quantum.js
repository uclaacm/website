import Image from 'next/legacy/image';
import { NextSeo } from 'next-seo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout';
import styles from '../styles/pages/quantum.module.scss';

function Quantum() {
  const workshops = [
    {
      number: 1,
      title: 'Introduction to Quantum Gates',
      points: [
        'Learn about H-gates, X-gates and use them to construct classical logic',
      ],
    },
    {
      number: 2,
      title: 'Quantum Circuits & Teleportation',
      points: [
        'Learn about the Bell-state and Bloch sphere',
        'Begin coding in Qiskit',
        'Quantum teleportation!',
      ],
    },
    {
      number: 3,
      title: 'Deutsch-Jozsa Teleportation',
      points: [
        'Learn about one of the earliest quantum algorithms',
        'Understand & implement an algorithm with quantum advantage',
      ],
    },
    {
      number: 4,
      title: "Grover's Algorithm, Part 1",
      points: [
        "Learn about Grover's algorithm, an influential quantum search algorithm",
      ],
    },
    {
      number: 5,
      title: "Grover's Algorithm, Part 2",
      points: [
        "Implement Grover's algorithm in Qiskit and run it on real quantum hardware",
      ],
    },
    {
      number: 6,
      title: "Shor's Algorithm",
      points: [
        'Learn about the famous factoring algorithm',
        'An algorithm with exponential speedup',
      ],
    },
  ];

  const team = [
    {
      name: 'Victor Yu',
      photo: '/images/quantum/quantum-officers/VictorYu.jpg', // Placeholder until actual photo is added
    },
    {
      name: 'Ian Kwon',
      photo: '/images/quantum/quantum-officers/IanKwon.jpg', // Placeholder until actual photo is added
    },
    {
      name: 'Naren Sathishkumar',
      photo: '/images/quantum/quantum-officers/SatishKumar.jpg', // Placeholder until actual photo is added
    },
    {
      name: 'Coming Soon',
      photo: null,
    },
  ];

  return (
    <Layout>
      <NextSeo
        title="Quantum | ACM at UCLA"
        description="Quantum is an initiative that aims to remove the barrier to entry in quantum science. Hosted by the Association for Computing Machinery Student Association at UCLA, we teach introductory quantum computing by focusing on intuition—no advanced mathematics required."
        openGraph={{
          images: [
            {
              url: 'https://www.uclaacm.com/images/quantum/logo.png',
              width: 1200,
              height: 630,
              alt: 'Quantum by ACM at UCLA logo',
            },
          ],
          site_name: 'ACM at UCLA',
        }}
      />
      <div className={styles['quantum-page']}>
        {/* Banner Section */}
        <div className={styles['banner-section']}>
          <div className={styles['banner-content']}>
            <div className={styles['banner-left']}>
              <div className={styles['logo-container']}>
                <img src="/images/quantum/logo.png" alt="Quantum Logo" />
              </div>
              <div className={styles['banner-text']}>
                <p>
                  Quantum is an initiative that aims to remove the barrier to
                  entry in quantum science. Hosted by the Association for
                  Computing Machinery Student Association at UCLA, we teach
                  introductory quantum computing by focusing on intuition—no
                  advanced mathematics required.
                </p>
                <p className={styles['meeting-info']}>
                  <strong>For the Fall 2025 quarter, find us in Boelter 2444, each Wednesday from 6:00-7:50 pm!</strong>
                </p>
              </div>
            </div>
            <div className={styles['banner-right']}>
              <img
                src="/images/quantum/banner.png"
                alt="Quantum Banner Graphic"
                className={styles['banner-image']}
              />
            </div>
          </div>
          
          <div className={styles['shape-right']}>
            <img src="/images/quantum/Union.png" alt="" />
          </div>
        </div>

        <div className={styles['youtube-button-container']}>
          <a
            href="https://www.youtube.com/watch?v=6PcuyKaVyho&list=PLPO7_kXilXFaG_Cz6P27Y4u-PozoocHv-"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['youtube-button']}
          >
            <FontAwesomeIcon icon={faYoutube} />
            <span>Youtube Link</span>
          </a>
          <div className={styles['shape-left']}>
            <img src="/images/quantum/shape.png" alt="" />
          </div>
        </div>

        {/* Workshop Schedule Section */}
        <div className={styles['schedule-section']}>
          <h2>Fall Workshop Schedule</h2>
          <div className={styles['workshops-container']}>
            {workshops.map((workshop, index) => (
              <div key={workshop.number} className={styles['workshop-item']}>
                <div className={styles['workshop-number']}>
                  {workshop.number}
                </div>
                <div className={styles['workshop-content']}>
                  <h3>{workshop.title}</h3>
                  <ul>
                    {workshop.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
                {index < workshops.length - 1 && index !== 2 && (
                  <div className={styles['workshop-arrow']}>
                    <img src="/images/quantum/arrow.png" alt="" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className={styles['schedule-note']}>
            And a social, guest lecture, and more!
          </p>
        </div>

        <div className={styles['shape-bottom-right']}>
            <img src="/images/quantum/shape.png" alt="" />
        </div>

        {/* Team Section */}
        <div className={styles['team-section']}>
          <h2>Team</h2>
          <div className={styles['team-grid']}>
            {team.map((member, index) => (
              <div key={index} className={styles['team-member']}>
                <div className={styles['member-photo']}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} />
                  ) : (
                    <div className={styles['placeholder-photo']}></div>
                  )}
                </div>
                <h4>{member.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className={styles['shape-bottom-left']}>
            <img src="/images/quantum/Union.png" alt="" />
        </div>

        {/* Social Media Section */}
        <div className={styles['social-section']}>
          <div className={styles['social-links']}>
            <a
              href="https://www.instagram.com/acm_quantum_ucla/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/images/quantum/social_media_icons/instagram.svg" alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/acm-at-ucla/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/images/quantum/social_media_icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/uclaacm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img src="/images/quantum/social_media_icons/github.svg" alt="GitHub" />
            </a>
            <a
              href="mailto:acm@ucla.edu"
              aria-label="Email"
            >
              <img src="/images/quantum/social_media_icons/email.svg" alt="Email" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=6PcuyKaVyho&list=PLPO7_kXilXFaG_Cz6P27Y4u-PozoocHv-"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <img src="/images/quantum/social_media_icons/youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Quantum;

