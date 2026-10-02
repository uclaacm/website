import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import styles from '../styles/pages/quantum.module.scss';

function Quantum() {
  const workshops = [
    {
      number: '01',
      title: 'The qubit and quantum gates',
      description: 'Learn what makes a qubit more powerful than a classical bit and how we can manipulate them with quantum gates.',
    },
    {
      number: '02',
      title: 'Quantum circuits & teleportation',
      description: 'Begin constructing more complex quantum circuits, including a teleportation circuit! Learn to code in Qiskit.',
    },
    {
      number: '03',
      title: 'Deutsch-Jozsa algorithm',
      description: 'Learn about and implement one of the first quantum algorithms with quantum advantage.',
    },
    {
      number: '04',
      title: "Grover's Algorithm — the theory",
      description: "Learn about the fastest known approach to unstructured search, Grover's algorithm.",
    },
    {
      number: '05',
      title: "Grover's Algorithm — the implementation",
      description: "Work in groups to implement Grover's algorithm from scratch and run it on real quantum computers!",
    },
    {
      number: '06',
      title: 'Extra content',
      description: "If there is sufficient interest and time, we'll cover anything you're curious about!",
    }
  ];

  const applied = [
    {
      title: 'Open source',
      description: 'Implemented quantum algorithms in open-source libraries',
    },
    {
      title: 'QEC + benchmarks',
      description: 'Contributed to error correction & benchmarking efforts',
    },
    {
      title: 'Spin qubits',
      description: 'Explored the theory of spin qubits',
    }
  ];

  const team = [
    {
      name: 'Victor Yu',
      position: 'CO-PRESIDENT',
      introduction: 'Victor is a third-year at UCLA studying Eletrical Engineering. He works in the Petta Group to develop automated tune-up and qubit calibration sequences for quantum dot devices. In his free time, he enjoys playing the piano, reading fantasy & science fiction, eating good food, and going on runs.',
      photo: '/images/quantum/quantum-officers/VictorYu.jpg',
    },
    {
      name: 'Aarav Pabla',
      position: 'CO-PRESIDENT',
      introduction: 'Aarav is a computer science and physics student. He is interested in fault-tolerant quantum computing and quantum complexity theory. He has worked on efficient quantum code architectures and creating robust implementations of fault-tolerant protocols in the presence of realistic hardware noise. In his free time, he likes to go on bike trips, play tennis, and go amusement park hopping.',
      photo: '/images/quantum/quantum-officers/AaravPabla.jpg',
    },
    {
      name: 'Cyrus Zeng',
      position: 'OFFICER',
      introduction: 'Cyrus Zeng is a second-year at UCLA studying math and computer science. Outside of class he builds data and product projects - recommendation systems, analytics dashboards, and product wireframes - and is learning quantum in his own time as well. He likes anything music, follows soccer and the Premier League, and occassionally hits the gym.',
      photo: null,
    },
  ];

  return (
    <Layout>
      <NextSeo
        title="Quantum | ACM at UCLA"
        description="Quantum is an initiative that aims to remove the barrier to entry in quantum science. Hosted in collaboration with the Quantum Computing Student Association at UCLA, we teach introductory quantum computing by focusing on intuition—no advanced mathematics or physics required."
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
                  entry in quantum science. Hosted in collaboration with the
                  Quantum Computing Student Association at UCLA, we teach
                  introductory quantum computing by focusing on intuition—no
                  advanced mathematics or physics required.
                </p>
                <p className={styles['meeting-info']}>
                  <strong>
                    [ Applied Track - MS 6201 Tuesdays, 6-7pm ]
                  </strong>
                </p>
              </div>
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
          <hr className={styles['section-divider']} ></hr>
          <h2>Introductory Workshop Schedule</h2>
          <div className={styles['workshops-container']}>
            {workshops.map((workshop) => (
              <div key={workshop.number} className={styles['workshop-item']}>
                <div className={styles['workshop-number']}>
                  {workshop.number}
                </div>
                <div className={styles['workshop-content']}>
                  <h3>{workshop.title}</h3>
                  <p>{workshop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applied Track Section */}
        <div className={styles['applied-track-section']}>
          <hr className={styles['section-divider']} ></hr>
          <h2>Applied Track Schedule</h2>
          <div className={styles['applied-track-container']}>
            <h3>The Applied Track</h3>
            <p className={styles['advanced-track-description']}>
            The Applied Track is intended to explore whatever you're most interested in! 
            This is a great opportunity to gain real-world experience and make meaningful 
            contributions to the quantum computing community.
          </p>
          <div className={styles['applied-track-grid']}>
            {applied.map((item, index) => (
              <div key={index} className={styles['applied-track-item']}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className={styles['shape-bottom-right']}>
          <img src="/images/quantum/shape.png" alt="" />
        </div>

        {/* Team Section */}
        <div className={styles['team-section']}>
          <hr className={styles['section-divider']} ></hr>
          <h2>Meet the Team</h2>
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
                <h3>{member.name}</h3>
                <h4>{member.position}</h4>
                <p>{member.introduction}</p>
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
              href="https://www.linkedin.com/company/ucla-acm"
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
