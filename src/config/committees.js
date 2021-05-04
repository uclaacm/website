import React from 'react';

export default [
	{
		name: 'Studio',
		class: 'studio',
		tagline: 'Creative Expression through Games and VR',
		image: '/images/committees/studio_wordmark.svg',
		diamond: '/images/diamonds/studio_diamond.svg',
		links: [
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/uclaacmstudio'
			},
			{
				platform: 'discord',
				link: 'https://discord.gg/9jDH6rN'
			}
		],
		infoCards: [
			{
				title: 'Projects',
				image: {
					src: '',
					alt: ''
				},
				desc: (
					<p>
						Each year, Studio splits into several teams of students who each
						work throughout winter and spring quarter to put together a
						fully-fledged game, usually coding in C# with the Unity engine. You
						can see a collection of many past projects at{" "}
						<a
							href="https://uclaacmstudio.itch.io"
							target="_blank"
							rel="noopener noreferrer"
						>
							uclaacmstudio.itch.io
						</a>
						.
					</p>
				),
			},
			{
				title: 'Beginner Unity track',
				image: {
					src: '',
					alt: ''
				},
				desc: 'No prior knowledge required! We walk new students through navigating the Unity editor and build a working knowledge of the tools starting from the ground up.'
			},
			{
				title: 'Advanced Unity track',
				image: {
					src: '',
					alt: ''
				},
				desc: 'For students already confident in the fundamentals of Unity, we examine a different advanced topic each week.'
			},
			{
				title: 'Artists track',
				image: {
					src: '',
					alt: ''
				},
				desc: 'These tutorials cater to students more interested in the artistic side of gamedev, focusing on how to incorporate skills besides coding into a game project workflow.'
			}
		],
		introImage: '/images/committees/studio/studio_motif_applied.png',
		mission: 'Our mission is to teach skills revolving around video game development such as computer science, game design and art in order to help usher students into the game development industry.',
	},
	{
		name: 'ICPC',
		class: 'icpc',
		tagline: 'Mastering Algorithms and Competitive Programming',
		links: [
			{
				platform: 'website',
				link: 'https://icpc.uclaacm.com/'
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/ucla.icpc/'
			}
		],
		infoCards: [
			{
				title: 'Intro to Competitive Programming',
				image: {
					src: '/images/committees/icpc/intro.png',
					alt: 'Rubik\'s Cube'
				},
				desc: 'From climbing coding leaderboards to competing in ICPC regionals to constructing clever algorithms with clever friends, the Competitive Programming journey starts here. Write your first contest solution and learn what it takes to start solving challenging and often beautiful problems!',
			},
			{
				title: 'Advanced Training',
				image: {
					src: '/images/committees/icpc/advanced.png',
					alt: 'Graph diagram'
				},
				desc: 'An advanced workshop to help learn and practice advanced algorithms, data structures, and problem solving skills. Focus of the workshop will be preparing for the ICPC competition, but the workshop is open to anyone interested!'
			},
			{
				title: 'CodeSprintLA',
				image: {
					src: '/images/committees/icpc/codesprint.png',
					alt: 'Codesprint Flyer'
				},
				desc: 'CodeSprintLA is UCLA\'s own Competitive Programming Competition organized by ACM ICPC. Competitive Programming is the activity (some call it a sport!) of writing programs to solve computational problems. You must be clever with your algorithm to solve the program in a given time limit. Individual or teams compete to solve the most problems!',
			},
			{
				title: 'Cyber x Hack x ICPC presents Bruin Quest',
				image: {
					src: '/images/committees/hack/bruin_quest.png',
					alt: 'Flyer for Bruin Quest'
				},
				desc: 'Explore a virtual UCLA campus and complete fun challenges to compete for points, prizes, and the glory of being Bruin Quest champion.'
			},
			{
				title: 'Interview Prep Bootcamp',
				image: {
					src: '/images/committees/icpc/interview.png',
					alt: 'Interview Prep Bootcamp Flyer'
				},
				desc: 'Ace this recruiting season with focused interview prep from ACM ICPC. In our weekly series, we will cover all the essentials from stacks and queues to string manipulation and dynamic programming.'
			}
		],
		introImage: '/images/committees/icpc/icpc_motif_applied.png',
		mission: 'Our mission is to promote algorithmic thinking and help build proficient problem solvers.',
		image: '/images/committees/icpc_wordmark.svg',
		diamond: '/images/diamonds/icpc_diamond.svg',
	},
	{
		name: 'Design',
		class: 'design',
		tagline: 'Form Follows Function',
		links: [
			{
				platform: 'website',
				link: 'https://design.uclaacm.com/'
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/acmdesign'
			}
		],
		infoCards: [
			{
				title: 'ACM Rebranding',
				image: {
					src: '/images/committees/design/rebranding_update.png',
					alt: 'ACM Winter General Meeting'
				},
				desc: 'We are finishing up our main project of rebranding ACM at UCLA including the logos, wordmarks, motifs, banners, and complete visual identities of each committee. The rebranding project started to correct the pain points of our previous branding, and position ACM at UCLA to appeal to a larger audience.'
			},
			{
				title: 'Styleguide Update',
				image: {
					src: '/images/committees/design/styleguide.png',
					alt: ''
				},
				desc: (
					<p>
						We are finishing the design styleguide which contains the new
						branding design assets necessary for all committees, and some
						do&apos;s and don&apos;ts with abiding by the new brand image. We
						are also extracting the styles used in the styleguide into a CSS
						framework that can be used by all ACM committees to create their
						sites in the ACM style. Check it out at{" "}
						<a
							href="https://design.uclaacm.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							design.uclaacm.com
						</a>{" "}
						and the{" "}
						<a
							href="github.com/uclaacm/Styleguide"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github page
						</a>
						.
					</p>
				),
			},
			{
				title: 'UXLA 01: Intro to UI/UX (Thursday January 28)',
				image: {
					src: '/images/committees/design/uxla_1.png',
					alt: ''
				},
				desc: 'Come join ACM Design\'s second workshop series of the quarter, UXLA! UXLA will cover core aspects of the UI/UX process. Come join us for our first of four workshops, Intro to UI/UX 💡 This week, we will cover the higher level goals of UI/UX, define terms like "user research" and "wireframes", and analyze companies that use good UI/UX practices!'
			},
			{
				title: 'UXLA 02: UX Research (Thursday February 4)',
				image: {
					src: '/images/committees/design/uxla_2.png',
					alt: ''
				},
				desc: 'Come join ACM Design for our second UIUX workshop: User Experience Research 💡 Learn about building a user flow map 🗺, user testing 📝, user personas 👤, and much more! Although this is the second workshop in our series, we encourage you to come out even if you missed the first one!'
			},
			{
				title: 'UXLA 03: Solution Ideation (Thursday February 18)',
				image: {
					src: '/images/committees/design/uxla_3.png',
					alt: ''
				},
				desc: ''
			},
			{
				title: 'UXLA 04: Visual Design (Thursday February 25)',
				image: {
					src: '/images/committees/design/uxla_4.png',
					alt: ''
				},
				desc: ''
			},
			{
				title: 'Design Tapas: 3D Modeling',
				image: {
					src: '/images/committees/design/design_tapas_3D_modeling.png',
					alt: ''
				},
				desc: (
					<p>
						<span role="img" aria-label="rocket emoji">
							🍢
						</span>{" "}
						Design Tapas{" "}
						<span role="img" aria-label="rocket emoji">
							🍢
						</span>{" "}
						is ACM Design’s first workshop series this quarter. Come join us
						this week to sample a 3D modeling tool called Blender! Blender is a
						free yet powerful 3D modeling tool that has seen an explosion in
						popularity recently among enthusiasts and professionals alike{" "}
						<span role="img" aria-label="computer emoji">
							💻
						</span>
						. We’re going to talk about the very basics of Blender, and we are
						going to make a cool vending machine at the end of this workshop!
						This is an introductory workshop to Blender, so no previous
						experience is required{" "}
						<span role="img" aria-label="star-struck emoji ">
							🤩
						</span>{" "}
						Feel free to download the software at{" "}
						<a
							href="https://www.blender.org/download/"
							target="_blank"
							rel="noopener noreferrer"
						>
							www.blender.org/download/
						</a>
						.
					</p>
				),
			},
			{
				title: 'Design Tapas: WebGL',
				image: {
					src: '/images/committees/design/design_tapas_webGL.png',
					alt: ''
				},
				desc: 'Design Tapas is ACM Design’s first workshop series this quarter. Come join us this week to sample WebGL, which allows you to add impressive graphical effects to your website! WebGL allows developers to create anything from video games to data visualization, all running in a regular web browser. In this workshop, we will use a library called three.js, which allows you to easily leverage WebGL and create various 3D scenes. Beginners are welcome, thought basic experience in JavaScript is highly recommended. Otherwise, all you need is a computer with a web browser and a text editing tool (e.g. VS Code, Notepad, etc.)'
			}

		],
		introImage: '/images/committees/design/design_motif_applied.png',
		mission: 'Our mission is to design, manage, and support the visual identity of ACM at UCLA. We create the club\'s branding, event banners, and more elements, while also doing workshops to teach UI/UX to the UCLA community.',
		image: '/images/committees/design_wordmark.svg',
		diamond: '/images/diamonds/design_diamond.svg',
	},
	{
		name: 'Cyber',
		class: 'cyber',
		tagline: 'Cybersecurity Made Simple',
		links: [
			{
				platform: 'website',
				link: 'https://acmcyber.com/',
			},
			{
				platform: 'discord',
				link: 'https://discord.gg/j9dgf2q',
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/320869398280511',
			}
		],
		infoCards: [
			{
				title: 'Cyber Academy: Webhacking',
				image: {
					src: '/images/committees/cyber/cyber_academy_webhacking.png',
					alt: 'Image of forensics event flyer'
				},
				desc: 'Attend our weekly workshops on Webhacking where we go over topics such as XSS+CSRF, SQL+noSQL Injection, and PHP’s many problems with in-depth demos and challenges. Our workshops are designed for beginners with no experience or just beginning in cybersecurity, and are self-encapsulated so feel free to attend even if you had to miss one!'
			},
			{
				title: 'CTF After Dark',
				image: {
					src: '/images/committees/cyber/cft_after_dark.png',
					alt: 'Capture the flag after dark'
				},
				desc: 'Collaborate with your friends in our beginner friendly Capture The Flag (CTF) competition. Challenges will be targeted at the skills that you’ve learned from our Winter workshops. Top teams get bragging rights as well as prizes.'
			}
		],
		introImage: '/images/committees/cyber/cyber_motif_applied.png',
		mission: 'Our mission is to create a community in which both experts and beginners alike can grow in the field of cybersecurity skills and knowledge. We want to make cybersecurity simple and accessible for everyone.',
		image: '/images/committees/cyber_wordmark.svg',
		diamond: '/images/diamonds/cyber_diamond.svg',
	},
	{
		name: 'Teach LA',
		class: 'teachla',
		tagline: 'Learn It, Teach It',
		links: [
			{
				platform: 'website',
				link: 'https://teachla.uclaacm.com'
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/teachlaucla/'
			}
		],
		infoCards: [
			{
				title: 'Synchronous and Asynchronous Classes',
				image: {
					src: '/images/committees/teachLA/brockton-original.jpg',
					alt: 'Teach LA member teaching two primary schoolers.'
				},
				desc: 'Teach remote classes on Scratch, Python, Web Development, App Development (w/ React Native), and AI/ML (w/ ACM AI Outreach)! No prior CS experience required, and we like all majors!',
			},
			{
				title: 'Speaker Series & Events',
				image: {
					src: '/images/committees/teachLA/speaker-events.jpg',
					alt: ''
				},
				desc: 'Help run one-off virtual events like Day of Code (with ACM-W), “What CS in College is Like”, “Diversity in CS”, “Bias in AI & ML”, or “Hacking for Good!”! Here, we especially value diverse experiences, including CS backgrounds and majors.'
			},
			{
				title: 'Dev Team',
				image: {
					src: '/images/committees/teachLA/passworks.png',
					alt: 'Screenshot of Teach LA\'s passworks project'
				},
				desc: (
					<p>
						Write educational software to make teaching easier, either by
						developing interactive web applications called “Learning Labs” (e.g.{" "}
						<a
							href="https://passworks.uclaacm.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Passworks Lesson
						</a>
						), maintain our{" "}
						<a
							href="https://editor.uclaacm.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							free online code editor
						</a>
						, or bust out your design skills on{" "}
						<a
							href="https://teachla.uclaacm.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							our website
						</a>
						. No prior dev experience required!
					</p>
				),
			},
			{
				title: 'Weekly Curriculum Meetings',
				image: {
					src: '/images/committees/teachLA/day-of-code-original.jpg',
					alt: ''
				},
				desc: 'Prepare for classes and speaker series, and find your favourite way to teach kids! And, in the process, learn more about the wonderful and mystical topics of computer science!',
			},
			{
				title: 'Weekly Dev Team Meetings ',
				image: {
					src: '/images/committees/teachLA/editor.png',
					alt: 'Image of Teach LA\'s Editor Project'
				},
				desc: 'Whether you’re a complete beginner in web development or a seasoned pro, our dev team meetings are a blend of training & development (where we cover both intro and intermediate web dev topics), and a chance to work on projects with a diverse team.',
			},
		],
		introImage: '/images/committees/teachLA/teachLA_motif_applied.png',
		mission: 'Our mission is to provide equal access to K-12 CS education in the Los Angeles area. We do this by teaching classes, running workshops and events, and writing software!',
		image: '/images/committees/teachLA_wordmark.svg',
		diamond: '/images/diamonds/teachLA_diamond.svg',
	},
	{
		name: 'W',
		class: 'w',
		tagline: 'Starting Conversations about Diversity in Tech',
		links: [
			{
				platform: 'website',
				link: 'https://w.uclaacm.com'
			},			
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/uclaacmw'
			},
		],
		infoCards: [
			{
				title: 'Student Panel Series',
				image: {
					src: '/images/committees/w/startup-panel.png',
					alt: 'A large garthering of WESP participants outside B-Plate the cafeteria.'
				},
				desc: 'We invite current and past students to share the wisdom they’ve gained from a variety of experiences, including entrepreneurship and the Grace Hopper Conference!',
			},
			{
				title: 'WESP',
				image: {
					src: '/images/committees/w/wesp.png',
					alt: 'A large garthering of WESP participants outside B-Plate the cafeteria.'
				},
				desc: 'The Women in Engineering Stayover Program is our annual event (pre-coronavirus) put on with WATT and SWE to showcase what UCLA Engineering (and UCLA Dining) has to offer to prospective students!',
			},
			{
				title: 'Mentorship Program',
				image: {
					src: '/images/committees/w/mentorship.jpg',
					alt: 'ACM W members hanging out at UCLA.'
				},
				desc: 'Our year-long mentorship program pairs underclassmen/those new to CS with upperclassmen who can offer advice on everything from internships to favorite spots in LA (pre-COVID, at least).'
			},
			{
				title: 'Socials',
				image: {
					src: '/images/committees/w/zoom-heart.png',
					alt: 'Eight ACM W members on Zoom conference call forming a collective heart with their arms.'
				},
				desc: ''
			},
			{
				title: 'Collaborations with other committees/organizations',
				image: {
					src: '',
					alt: ''
				},
				desc: 'We co-host a variety of one-off events with other branches of ACM + external UCLA student orgs centered around making computer science as accessible and open as possible (e.g. Day of Code, WESP, QWER Hacks)!'
			}
		],
		introImage: '/images/committees/w/w_motif_applied.png',
		mission: 'Our goal is to promote diversity in tech through mentorship, networking, and professional development opportunities. We’re a safe space for everyone interested in computer science. :)',
		image: '/images/committees/w_wordmark.svg',
		diamond: '/images/diamonds/w_diamond.svg',
	},
	{
		name: 'AI',
		class: 'ai',
		tagline: 'Learning Machine Learning',
		links: [
			{
				platform: 'website',
				link: 'https://uclaacmai.github.io/'
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/uclaacmai'
			},
			{
				platform: 'instagram',
				link: 'https://www.instagram.com/acm_ai_ucla/'
			},
			{
				platform: 'twitter',
				link: 'https://twitter.com/acm_ai_ucla'
			},
			{
				platform: 'github',
				link: 'https://github.com/uclaacmai'
			},
		],
		infoCards: [
			{
				title: 'Video Game AI (Collaboration with ACM Game Studio)',
				image: {
					src: '',
					alt: ''
				},
				desc: 'ACM AI’s projects team collaborated with ACM Game Studio to develop AI for a fighting video game that would match the skill level of the player. This project made use of reinforcement learning, an advanced machine learning technique used to teach agents to act intelligently in complex environments.',
			},
			{
				title: 'You Belong in AI! Podcast',
				image: {
					src: '',
					alt: ''
				},
				desc: (
					<p>
						<a
							href="https://anchor.fm/ucla-acm-ai"
							target="_blank"
							rel="noopener noreferrer"
						>
							You Belong in AI!
						</a>{" "}
						is a podcast on diversity in the field of Artificial Intelligence.
						We feature industry and academic leaders in AI from a diverse range
						of backgrounds to come and talk about their work and the importance
						of diversity and inclusion in AI.{" "}
						<a
							href="https://anchor.fm/ucla-acm-ai"
							target="_blank"
							rel="noopener noreferrer"
						>
							You Belong in AI!
						</a>{" "}
						is available on all major podcast streaming platforms.
					</p>
				),
			},
			{
				title: 'AI Course for High School Students (Collaboration with ACM Teach LA)',
				image: {
					src: '',
					alt: ''
				},
				desc: (
					<p>
						ACM AI’s Outreach team collaborates with ACM TeachLA to teach an
						introductory AI course to local high school students in Los Angeles.
						An overview of this course content can be found at{" "}
						<a
							href="https://teachla.uclaacm.com/classes/ml"
							target="_blank"
							rel="noopener noreferrer"
						>
							teachla.uclaacm.com/ classes/ml
						</a>
						.
					</p>
				),
			},
			{
				title: 'AI/ML Workshops',
				image: {
					src: '',
					alt: ''
				},
				desc: 'This fall ACM AI is offering three workshop series: Beginner Track, Advanced Track, and Applied ML. Beginner Track is an introductory course that teaches fundamentals of machine learning and assumes no prior background in AI. Advanced Track is a more advanced machine learning course that covers more advanced deep learning topics and is designed for students who have already previously taken Beginner Track or have prior knowledge of machine learning fundamentals. Our Applied ML workshops series covers practical skills needed to apply machine learning theory to real world problems and is designed for students who already have knowledge of machine learning fundamentals.'
			},
			{
				title: 'Demystifying AI',
				image: {
					src: '',
					alt: ''
				},
				desc: 'It is important for all people, including those who do not work in technology to understand the impacts and ethical implications of the increasing usage of AI in modern society. Demystifying AI is an event designed for UCLA students of all majors to learn about AI and its pervasive impacts.'
			},
			{
				title: 'AI Research Panel',
				image: {
					src: '',
					alt: ''
				},
				desc: 'UCLA is one of the world’s leading AI research producing institutions. ACM AI will be hosting a panel of world-class AI researchers from UCLA in a discussion on their ongoing work at UCLA, the greater AI research landscape, and how undergraduates can get involved.'
			}
		],
		introImage: '/images/committees/ai/ai_motif_applied.png',
		mission: 'Our mission is to grow and develop a community of students interested in Artificial Intelligence (AI) at UCLA, Los Angeles, and beyond. Our initiatives aim to serve everyone who has an interest in AI regardless of background, including people with no prior experience or knowledge in AI and non-CS majors.',
		image: '/images/committees/ai_wordmark.svg',
		diamond: '/images/diamonds/ai_diamond.svg',
	},
	{
		name: 'Hack',
		class: 'hack',
		tagline: 'Move Fast, Build Things',
		links: [
			{
				platform: 'website',
				link: 'https://hack.uclaacm.com'
			},
			{
				platform: 'instagram',
				link: 'https://www.instagram.com/uclahack'
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/acmhack'
			}
		],
		infoCards: [
			{
				title: 'Hack Sprint',
				image: {
					src: '/images/committees/hack/hack_sprint.png',
					alt: 'Image of Hack Sprint Flyer'
				},
				desc: 'Hack Sprint is our beginner-friendly workshop series on mobile development with React Native. Through React Native, you\'ll be able to build apps for both Android and iOS devices at the same time! You’ll also get to build and present your very own app in our final showcase. No previous mobile development experience is needed!',
			},
			{
				title: 'Hack off the Hill',
				image: {
					src: '/images/committees/hack/hack_off_the_hill.png',
					alt: 'Image of Hack off the Hill flyer'
				},
				desc: 'Hack off the Hill (HOTH 8) is the virtual edition of our annual hackathon. This 2-day long beginner-friendly hackathon is designed to give you a glimpse of a real hackathon. There will be workshops, mentors, and fun prizes for the best hacks!'
			},
			{
				title: 'Hack Fam',
				image: {
					src: '/images/committees/hack/hack_fam.png',
					alt: 'Image of Hack Fam flyer'
				},
				desc: 'Join one of our families to meet new people and find a close support group to hang out with, study with, and form long lasting friendships for life with.'
			}
		],
		introImage: '/images/committees/hack/hack_motif_applied.png',
		mission: 'To empower the community by providing the means to build amazing things and explore what is possible through code!',
		image: '/images/committees/hack_wordmark.svg',
		diamond: '/images/diamonds/hack_diamond.svg',
	}
]
