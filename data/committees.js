/* eslint-disable max-len */

import React from 'react';

export default [
	{
		name: 'Studio',
		class: 'studio',
		slug: 'studio',
		tagline: 'Creative Expression through Games',
		external_link: null,
		image: '/images/committees/studio_wordmark.svg',
		wordmark_dark: '/images/committees/studio_wordmark_dark.svg',
		diamond: '/images/diamonds/studio_diamond.svg',
		links: [
			{
				platform: 'carrd',
				link: 'https://acmstudio.carrd.co/',
			},
			{
				platform: 'discord',
				link: 'https://discord.gg/9jDH6rN',
			},
			{
				platform: 'itch',
				link: 'https://acmstudio.itch.io/',
			},
			{
				platform: 'instagram',
				link: 'https://www.instagram.com/acmstudio.ucla/?hl=en',
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/uclaacmstudio',
			},
		],
		infoCards: [
			{
				title: 'Student Run Studios',
				image: {
					src: '',
					alt: '',
				},
				desc: (
					<>
					Each year, Studio splits into teams of students who work through the winter and spring quarters to put together an indie game. Students can apply to be team leads to pitch their idea to the club and have people join them to bring their game concept into reality! You can see past projects at <a href = "https://acmstudio.itch.io/"> acmstudio.itch.io</a>
					</>
					),
			},
			{
				title: 'Tutorial Tracks',
				image: {
					src: '',
					alt: '',
				},
				desc: (
					<>
					No prior knowledge required! Studio offers the following workshop tracks: Introduction to Game Programming, Special Topics in Game Programming, and Creative Track. The Intro Track introduces students to the Unity editor. The Special Topics Track dives deep into specific game development areas officers are excited to share about. The Creative Track focuses on non-coding skills and how to incorporate them into a game project workflow. You can find tutorial content on our <a href = "https://github.com/topics/acm-studio">GitHub</a>.

					</>
				),
			},
			{
				title: 'Game Jams',
				image: {
					src: '',
					alt: '',
				},
				desc: (
					<>
					Game jams are a beginner-friendly way to get right into making a game of your own! These game-focused hackathons typically span 48-72 hours and revolve around a specific theme. Studio facilitates team formation for Ludum Dare (a global game jam) and also hosts in-house game jams such as our summer and winter break game jams.
					</>
				),
			},
		],
		introImage: '/images/committees/studio/studio_motif_applied.png',
		mission: 'Our mission is to teach skills revolving around video game development such as computer science, game design and art in order to help usher students into the game development industry.',
		internship: {
			whatWeDo: 'Studio wants to create a community of game developers, whether you’re interested in gameplay programming, graphics, animation, pixel, music, whatever. We want to help you express yourself through video game development.',
			whatInternsWillDo: (
			<ul>
				<li> ACM Studio is looking for visual designers to learn ACM/ACM Studio style guide and create graphics to help market and promote our events on social media & update our branding on existing platforms! (Prior skills in graphic design / Figma are appreciated, but not required.)</li>
				<li> Intro to Game Programming Track is looking for people passionate about helping to create content for future beginner level workshops and to teach the content. Interns would be learning alongside experienced officers in the Fall and will have the opportunity in Winter to start actively working on / teaching workshops. (Prior skills in Unity / C# are appreciated, but not required.)</li>
				<li> Special Topics in Gaming is looking for people passionate about teaching more niche topics in game development (whether a specific game mechanic you seem to invest too much time in developing or that you’re deeply passionate about having good game programming practices). Interns will be learning alongside experienced officers in the Fall and will have the opportunity in Winter to start actively working on / teaching workshops. (Prior skills in Unity / C# are appreciated, but not required.)</li>
			</ul> ),
			card: '/images/cards/studio_card.svg',
			nextSteps: 'After serving 2 quarters, interns will graduate and ACM Studio’s president(s) will conduct Intern Exit Interviews that will determine your officership in the spring.',
		},
	},
	{
		name: 'ICPC',
		class: 'icpc',
		slug: 'icpc',
		tagline: 'Mastering Algorithms and Competitive Programming',
		external_link: 'https://icpc.uclaacm.com/',
		links: [
			{
				platform: 'website',
				link: 'https://icpc.uclaacm.com/',
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/ucla.icpc/',
			},
		],
		infoCards: [
			{
				title: 'CodeSprintLA',
				image: {
					src: '/images/committees/icpc/codesprint.png',
					alt: 'Codesprint Flyer',
				},
				desc: 'CodeSprintLA is UCLA\'s own Competitive Programming Competition organized by ACM ICPC. Competitive Programming is the activity (some call it a sport!) of writing programs to solve computational problems. You must be clever with your algorithm to solve the program in a given time limit. Individual or teams compete to solve the most problems!',
			},
			{
				title: 'Project A*: Competitive Programming Workshops',
				image: {
					src: '/images/committees/icpc/A.png',
					alt: 'ICPC Project A* Flyer',
				},
				desc: 'All you need is a passion for problem-solving! Whether you are completely new to competitive programming (or even CS!), or a veteran coder we have a learning opportunity for you this Fall. Introducing Project A*, our weekly algorithm academy! Our Intro to Competitive Programming track will cover all the essentials from the bottom up to get you started in competitive programming. The Advanced Training track will delve deeper into more complicated data structures and algorithms to help you compete at the highest level.',
			},
			{
				title: 'Advanced Interview Prep',
				image: {
					src: '/images/committees/icpc/interview_advanced.png',
					alt: 'Advanced Interview Prep Flyer',
				},
				desc: 'Are you ready to bring your coding interview skills to the next level? Are you worried about the upcoming fall recruiting season? Do your CS 32 algorithm skills feel rusty? 🤔 💭 Don’t worry, we’ve got you covered! ACM ICPC is hosting an ⚙️  Advanced ⚙️  Interview Prep workshop that’ll let you in on all of the secrets to acing your next technical interview. In this workshop, we will be going over advanced algorithms and data structures asked in even the most difficult phone and onsite interviews! 🖥️ ',
			},
		],
		introImage: '/images/committees/icpc/icpc_motif_applied.png',
		mission: 'Our mission is to promote algorithmic thinking and help build proficient problem solvers.',
		image: '/images/committees/icpc_wordmark.svg',
		wordmark_dark: '/images/committees/icpc_wordmark_dark.svg',
		diamond: '/images/diamonds/icpc_diamond.svg',
		internship: {
			whatWeDo: 'ICPC spreads the joy of algorithmic problem solving - and helps you kick-start your career - through workshops, contests, and a top-ranked ICPC team!',
			whatInternsWillDo: (<>Interns will help produce and teach workshops in one of our two winter workshop tracks:
			<ul>
				<li>Intro to Competitive Programming (great for anyone interested in algorithms)</li>
				<li>Interview Track (best for people with interview and internship experience already).</li>
				<li>Advanced Competitive Programming workshop track (for people with a strong background in competitive programming, may or may not take interns)</li>
			</ul></>),
			card: '/images/cards/icpc_card.svg',
			nextSteps: 'All Interns have the opportunity to become officers in the Spring if they choose to stay.',
		},
	},
	{
		name: 'Design',
		class: 'design',
		slug: 'design',
		tagline: 'Form Follows Function',
		external_link: null,
		links: [
			{
				platform: 'website',
				link: 'https://design.uclaacm.com/',
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/acmdesign',
			},
			{
				platform: 'instagram',
				link: 'https://www.instagram.com/acmdesign.ucla',
			},
		],
		infoCards: [
			{
				title: 'ACM Rebranding',
				image: {
					src: '/images/committees/design/rebranding_update.png',
					alt: 'ACM Winter General Meeting',
				},
				desc: 'We are finishing up our main project of rebranding ACM at UCLA including the logos, wordmarks, motifs, banners, and complete visual identities of each committee. The rebranding project started to correct the pain points of our previous branding, and position ACM at UCLA to appeal to a larger audience.',
			},
			{
				title: 'UXLA: UI/UX Workshop Series',
				image: {
					src: '/images/committees/design/uxla_1.png',
					alt: 'UI/UX Workshop Series Flyer',
				},
				desc: 'Come join ACM Design\'s second workshop series of the quarter, UXLA! UXLA will cover core aspects of the UI/UX process. Come join us for our first of four workshops, Intro to UI/UX 💡 This week, we will cover the higher level goals of UI/UX, define terms like "user research" and "wireframes", and analyze companies that use good UI/UX practices!',
			},
			{
				title: 'Design Tapas: HTML/CSS',
				image: {
					src: '/images/committees/design/design_tapas_html_css.jpeg',
					alt: 'Design Tapas Flyer',
				},
				desc: 'We are continuing 🍢 Design Tapas 🍢 this quarter - Come join us this week for a fresh dive into HTML/CSS for beginners! This technology is all over the way we interact with Internet and is essential to know for any web development - a couple of our officers will be demystifying this secret to constructing websites and making them look awesome through code!',
			},
		],
		introImage: '/images/committees/design/design_motif_applied.png',
		mission: 'Our mission is to design, manage, and support the visual identity of ACM at UCLA. We create the club\'s branding, event banners, and more elements, while also doing workshops to teach UI/UX to the UCLA community.',
		image: '/images/committees/design_wordmark.svg',
		wordmark_dark: '/images/committees/design_wordmark_dark.svg',
		diamond: '/images/diamonds/design_diamond.svg',
		internship: {
			whatWeDo: 'Design aims to foster a community passionate about design and user experience through the intersection of creativity and technology. We focus on UX/UI design, graphic design, web development, and more!',
			whatInternsWillDo: (
			<ul>
				<li> All interns will learn ACM&apos;s branding and style and learn to use Figma</li>
				<li> Graphic design interns will create social media graphics for ACM</li>
				<li> UX design interns will design for our various internal projects</li>
			</ul> ),
			card: '/images/cards/design_card.svg',
			nextSteps: 'All Interns have the opportunity to become officers in the Spring if they choose to stay.',
		},
	},
	{
		name: 'Cyber',
		class: 'cyber',
		slug: 'cyber',
		tagline: 'Cybersecurity Made Simple',
		external_link: 'https://acmcyber.com/',
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
				platform: 'website',
				link: 'https://pbr.acmcyber.com/',
			},
			{
				platform: 'twitter',
				link: 'https://twitter.com/pbrucla',
			},
			{
				platform: 'website',
				link: 'https://lac.tf',
			},
		],
		infoCards: [
			{
				title: 'Cyber Academy: Web Auditing x Bruinwalk',
				image: {
					src: '/images/committees/cyber/cyber-academy-bruinwalk.png',
					alt: 'Image of forensics event flyer',
				},
				desc: 'ACM Cyber collaborated up with the Bruinwalk team to perform a security audit of https://bruinwalk.com/. Throughout the quarter, members learned about web hacking and security vulnerabilities which culminated a hands on experience to audit the source code of the famous website! Teams were awarded bounties for finding bugs on the website allowing the team to patch these vulnerabilities.',
			},
			{
				title: 'LA CTF',
				image: {
					src: '/images/committees/cyber/lactf-logo.gif',
					alt: 'LA CTF 2023 mountains logo GIF.',
				},
				desc: 'LA CTF is an annual Capture the Flag (CTF) cybersecurity competition hosted by ACM Cyber at UCLA & Psi Beta Rho. LA CTF is open to all skill levels of cybersecurity! Whether you are tackling your first exploit or have professional experience, there will be challenges just right for you! There will be a variety of events ranging from the competition containing jeopardy-style cybersecurity challenges to talks from UCLA professors to fun events such as typing competitions! If you are interested in attending, join the Discord to stay up to date with the latest information about LA CTF!',
			},
			{
				title: 'Psi Beta Rho',
				image: {
					src: '/images/committees/cyber/pbr-team-photo.jpg',
					alt: '',
				},
				desc: 'Psi Beta Rho, also known as PBR, is UCLA\'s competetive cybersecurity team! We are a group of students who are passionate about learning more about cybersecurity and competing at CTFs. PBR attends a variety of different cybersecurity competitions throughout the year by we primarily compete in capture the flag (CTF) competitions. Psi Beta Rho is open to all skill levels. Whether you are just launching your cybersecurity career or are already an experienced professional, PBR is for you!',
			},
		],
		introImage: '/images/committees/cyber/cyber_motif_applied.png',
		mission: 'Our mission is to create a community in which both experts and beginners alike can grow in the field of cybersecurity skills and knowledge. We want to make cybersecurity simple and accessible for everyone.',
		image: '/images/committees/cyber_wordmark.svg',
		wordmark_dark: '/images/committees/cyber_wordmark_dark.svg',
		diamond: '/images/diamonds/cyber_diamond.svg',
		internship: {
			whatWeDo: 'Our mission is to create a community in which both experts and beginners alike can grow in the field of cybersecurity skills and knowledge. We want to make cybersecurity simple and accessible for everyone.',
			whatInternsWillDo: (<>ACM Cyber is currently not taking any interns. If you are interested in joining or becoming an active member in ACM Cyber, please check out {<a href='https://www.acmcyber.com/join'>here</a>}.</>),
			card: '/images/cards/cyber_card.svg',
			nextSteps: 'All active members of ACM Cyber can apply to become officers in the Winter.',
		},
	},
	{
		name: 'Teach LA',
		class: 'teachla',
		slug: 'teachla',
		tagline: 'Learn It, Teach It',
		external_link: 'https://teachla.uclaacm.com',
		links: [
			{
				platform: 'website',
				link: 'https://teachla.uclaacm.com',
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/teachlaucla/',
			},
			{
				platform: 'instagram',
				link: 'https://www.instagram.com/acm.teachla/',
			},
		],
		infoCards: [
			{
				title: 'Synchronous and Asynchronous Classes',
				image: {
					src: '/images/committees/teachLA/brockton-original.jpg',
					alt: 'Teach LA members with a class they are teaching.',
				},
				desc: 'Teach remote classes on Scratch, Python, Web Development, App Development (w/ React Native), and AI/ML (w/ ACM AI Outreach)! No prior CS experience required, and we like all majors!',
			},
			{
				title: 'Speaker Series & Events',
				image: {
					src: '/images/committees/teachLA/speaker-events.jpg',
					alt: 'Students and instructors from an event',
				},
				desc: 'Help run one-off virtual events like Day of Code (with ACM-W), “What CS in College is Like”, “Diversity in CS”, “Bias in AI & ML”, or “Hacking for Good!”! Here, we especially value diverse experiences, including CS backgrounds and majors.',
			},
			{
				title: 'Dev Team',
				image: {
					src: '/images/committees/teachLA/passworks.png',
					alt: 'Screenshot of Teach LA\'s passworks project',
				},
				desc: (
					<>
						Write educational software to make teaching easier, either by developing interactive web applications called “Learning Labs” (e.g. <a href="https://passworks.uclaacm.com" target="_blank" rel="noopener noreferrer">Passworks Lesson</a>), maintain our <a href="https://editor.uclaacm.com" target="_blank" rel="noopener noreferrer">free online code editor</a>, or bust out your design skills on <a href="https://teachla.uclaacm.com" target="_blank" rel="noopener noreferrer">our website</a>. No prior dev experience required!
					</>
				),
			},
		],
		introImage: '/images/committees/teachLA/teachLA_motif_applied.png',
		mission: 'Our mission is to provide equal access to K-12 CS education in the Los Angeles area. We do this by teaching classes, running workshops and events, and writing software!',
		image: '/images/committees/teachLA_wordmark.svg',
		wordmark_dark: '/images/committees/teachLA_wordmark_dark.svg',
		diamond: '/images/diamonds/teachLA_diamond.svg',
		internship: {
			whatWeDo: 'Teach LA pairs UCLA students with schools in Los Angeles to provide free computer science classes. We have a teaching/curriculum team and a development team depending on what you’re interested in!',
			whatInternsWillDo: (
			<ul>
				<li> The Logistics and Outreach intern will reach out to schools and plan teaching schedules while working on instructor recruiting</li>
				<li> The JEDI intern will work with JEDI directors to help plan allyship spaces and train new instructors</li>
				<li> Speaker Series + Events Interns will be in charge of planning and putting on larger-scale events like Day of Code and coordinating smaller one-off events like speaker series</li>
				<li> Teaching Interns will either help School Leads with coordinating teaching with other instructors and reporting feedback, or serve as the point person for a class</li>
				<li> Curriculum Interns assist the Curriculum Director by working with School Leads and instructors to ensure that all of our curriculum is up-to-date and meets Teach LA’s standards.</li>
				<li> Dev Team Training interns will assist training directors in creating curriculum and training devs</li>
				<li> The Design intern will assist the Design Director in building hi-fidelity mockups of dev team projects, such as learning labs and the static site.</li>
			</ul> ),
			card: '/images/cards/teachLA_card.svg',
			nextSteps: 'Interns will have to apply for or receive an officer role post-internship, or will revert back to instructors or devs',
		},
	},
	{
		name: 'W',
		class: 'w',
		slug: 'w',
		tagline: 'Starting Conversations about Diversity in Tech',
		external_link: null,
		links: [
			{
				platform: 'website',
				link: 'https://w.uclaacm.com',
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/uclaacmw',
			},
		],
		infoCards: [
			{
				title: 'Student Panel Series',
				image: {
					src: '/images/committees/w/startup-panel.png',
					alt: 'Flyer for student panel with title "From Idea to Prototype to Business" and the speakers\' names ',
				},
				desc: 'We invite current and past students to share the wisdom they’ve gained from a variety of experiences, including entrepreneurship and the Grace Hopper Conference!',
			},
			{
				title: 'WESP',
				image: {
					src: '/images/committees/w/wesp.png',
					alt: 'A large gathering of WESP participants outside B-Plate the cafeteria.',
				},
				desc: 'The Women in Engineering Stayover Program is our annual event (pre-coronavirus) put on with WATT and SWE to showcase what UCLA Engineering (and UCLA Dining) has to offer to prospective students!',
			},
			{
				title: 'Mentorship Program',
				image: {
					src: '/images/committees/w/mentorship.jpg',
					alt: 'ACM W members hanging out at UCLA.',
				},
				desc: 'Our year-long mentorship program pairs underclassmen/those new to CS with upperclassmen who can offer advice on everything from internships to favorite spots in LA (pre-COVID, at least).',
			},
		],
		introImage: '/images/committees/w/w_motif_applied.png',
		mission: 'Our goal is to promote diversity in tech through mentorship, networking, and professional development opportunities. We’re a safe space for everyone interested in computer science. :)',
		image: '/images/committees/w_wordmark.svg',
		wordmark_dark: '/images/committees/w_wordmark_dark.svg',
		diamond: '/images/diamonds/w_diamond.svg',
		internship: {
			whatWeDo: 'W is our committee focused on making tech a more diverse space! W does this through mentorship events, hosting career and networking panels, discussion spaces, and outreach events!',
			whatInternsWillDo: (
			<ul>
				<li> The Finance intern will manage and monitor the club budget</li>
				<li> The Outreach intern will co-ordinate with other large UCLA clubs to plan large diversity-focused events such as QWER Hacks and Day of Code</li>
				<li> The External intern will maintain contact with industry representatives and recruiters to plan for colab events</li>
			</ul> ),
			card: '/images/cards/w_card.svg',
			nextSteps: 'All Interns have the opportunity to become officers in the Spring if they choose to stay.',
		},
	},
	{
		name: 'AI',
		class: 'ai',
		slug: 'ai',
		tagline: 'Learning Machine Learning',
		external_link: 'https://uclaacmai.github.io/',
		links: [
			{
				platform: 'website',
				link: 'https://uclaacmai.github.io/',
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/uclaacmai',
			},
			{
				platform: 'instagram',
				link: 'https://www.instagram.com/acm_ai_ucla/',
			},
			{
				platform: 'twitter',
				link: 'https://twitter.com/acm_ai_ucla',
			},
			{
				platform: 'github',
				link: 'https://github.com/uclaacmai',
			},
		],
		infoCards: [
			{
				title: 'AI/ML Workshops',
				image: {
					src: '',
					alt: '',
				},
				desc: 'This fall ACM AI is offering three workshop series: Beginner Track, Advanced Track, and Applied ML. Beginner Track is an introductory course that teaches fundamentals of machine learning and assumes no prior background in AI. Advanced Track is a more advanced machine learning course that covers more advanced deep learning topics and is designed for students who have already previously taken Beginner Track or have prior knowledge of machine learning fundamentals. Our Applied ML workshops series covers practical skills needed to apply machine learning theory to real world problems and is designed for students who already have knowledge of machine learning fundamentals.',
			},
			{
				title: 'You Belong in AI! Podcast',
				image: {
					src: '',
					alt: '',
				},
				desc: (
					<>
						<a href="https://anchor.fm/ucla-acm-ai" target="_blank" rel="noopener noreferrer">You Belong in AI!</a> is a podcast on diversity in the field of Artificial Intelligence. We feature industry and academic leaders in AI from a diverse range of backgrounds to come and talk about their work and the importance of diversity and inclusion in AI. <a href="https://anchor.fm/ucla-acm-ai" target="_blank" rel="noopener noreferrer">You Belong in AI!</a> is available on all major podcast streaming platforms.
					</>
				),
			},
			{
				title: 'Video Game AI (Collaboration with ACM Game Studio)',
				image: {
					src: '',
					alt: '',
				},
				desc: 'ACM AI’s projects team collaborated with ACM Game Studio to develop AI for a fighting video game that would match the skill level of the player. This project made use of reinforcement learning, an advanced machine learning technique used to teach agents to act intelligently in complex environments.',
			},
		],
		introImage: '/images/committees/ai/ai_motif_applied.png',
		mission: 'Our mission is to grow and develop a community of students interested in Artificial Intelligence (AI) at UCLA, Los Angeles, and beyond. Our initiatives aim to serve everyone who has an interest in AI regardless of background, including people with no prior experience or knowledge in AI and non-CS majors.',
		image: '/images/committees/ai_wordmark.svg',
		wordmark_dark: '/images/committees/ai_wordmark_dark.svg',
		diamond: '/images/diamonds/ai_diamond.svg',
		internship: {
			whatWeDo: 'AI is about all things artificial intelligence and machine learning! We teach beginner-friendly and advanced workshops, run projects, and teach kids about machine learning :) ',
			whatInternsWillDo: (
			<ul>
				<li> The Outreach intern will teach weekly ML classes to high school students</li>
				<li> The Projects intern will guide people through building a deep learning model in PyTorch</li>
				<li> The Events intern will help create content, host and organize one-off or recurring events</li>
				<li> The Workshops interns will teach weekly ML and AI workshops to UCLA students</li>
			</ul> ),
			card: '/images/cards/ai_card.svg',
			nextSteps: 'All Interns have the opportunity to become officers in the Spring',
		},
	},

	{
		name: 'Cloud',
		class: 'cloud',
		slug: 'cloud',
		tagline: 'Building the Future in the Clouds',
		external_link: null,
		links: [
			{
				platform: 'instagram',
				link: 'https://www.instagram.com/acmcloud/',
			},
			{
				platform: 'discord',
				link: 'https://discord.gg/smE3pk5DsJ',
			},
		],
		infoCards: [
			{
				title: 'Distributed Systems Workshops',
				image: {
					src: '',
					alt: '',
				},
				desc: (
					<>
						Our weekly Distributed File System Project series provided a hands-on introduction to distributed systems. Each week, participants explored concepts like cloud computing, system architectures, process communication, and security while building and enhancing a distributed file system. Starting with setting up a basic file server, they progressively implemented features such as client-server communication, naming services, consistency models, fault tolerance, and security measures. View the{' '}
						<a
							href='https://drive.google.com/drive/folders/1ZpBAxImfSNb-6HXjxvZ2gWgXxMQe-jVj'
							target='_blank'
							rel='noopener noreferrer'
						>
							drive of resources
						</a>
						{' '}and the{' '}
						<a
							href='https://drive.google.com/drive/folders/1nNUahdX3wLiI2NcrNm5q48mGGQ6wAPy_'
							target='_blank'
							rel='noopener noreferrer'
						>
							slides
						</a>
						.
					</>
				),
			},
			{
				title: 'Amazon Web Services Workshops',
				image: {
					src: '/images/committees/cloud/aws.png',
					alt: 'Image of Cloud AWS Workshops',
				},
				desc: (
					<>
						Our Amazon Web Services Workshop Series provided a comprehensive
						introduction to AWS, featuring weekly sessions on key topics such as
						cloud management, scaling, continuous integration and deployment,
						databases, serverless technologies, and infrastructure as code.
						The{' '}
						<a
							href='https://github.com/uclaacm/acmcloud-aws-w24'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub repository
						</a>
						{' '}includes all code examples, slides, recordings, and guided project steps for you to get started with AWS.
					</>
				),
			},
			{
				title: 'Google Cloud Platform Workshops',
				image: {
					src: '/images/committees/cloud/gcp.png',
					alt: 'Image of Cloud GCP Workshops',
				},
				desc: (
					<>
						The Spring 2024 Google Cloud Platform Workshop mini-series provided
						a comprehensive overview of GCP, featuring sessions on computing
						and databases with Google Cloud.
						View our GitHub repository{' '}
						<a
							href='https://github.com/uclaacm/acmcloud-gcp-s24'
							target='_blank'
							rel='noopener noreferrer'
						>
							here
						</a>
						.
					</>
				),
			},
		],
		introImage: '/images/committees/cloud/cloud_motif_base.png',  // TODO - change to applied
		mission:
			'ACM Cloud is committed to providing resources to build a strong intuition of the architectural foundations of the modern cloud environment through project-based, hands-on experience.',
		image: '/images/committees/cloud_wordmark.svg',  // TODO
		wordmark_dark: '/images/committees/cloud_wordmark_dark.svg',  // TODO
		diamond: '/images/diamonds/cloud_diamond.svg',  // TODO
		internship: {
			whatWeDo:
				'ACM Cloud is committed to providing resources to build a strong intuition of the architectural foundations of the modern cloud environment through project-based, hands-on experience. ACM Cloud supports the UCLA community through three core pillars: Cloud Training Workshops, Research Projects, and Consulting Projects.',
			whatInternsWillDo:
				'Interns will work assist in organizing events and workshops based on personal interests each quarter.',
			card: '/images/cards/cloud_card.svg',  // TODO
			nextSteps:
				'All Interns have the opportunity to become officers in the Spring if they choose to stay.',
		},
	},
	{
		name: 'Hack',
		class: 'hack',
		slug: 'hack',
		tagline: 'Move Fast, Build Things',
		external_link: 'https://hack.uclaacm.com',
		links: [
			{
				platform: 'website',
				link: 'https://hack.uclaacm.com',
			},
			{
				platform: 'instagram',
				link: 'https://www.instagram.com/uclahack',
			},
			{
				platform: 'facebook',
				link: 'https://www.facebook.com/groups/acmhack',
			},
			{
				platform: 'discord',
				link: 'https://discord.gg/dUp8g8wgCv',
			},
		],
		infoCards: [
			{
				title: 'learn.py',
				image: {
					src: '/images/committees/hack/learn_py.png',
					alt: 'Image of Hack Sprint Flyer',
				},
				desc: 'This is our weekly Python workshop series on Wednesdays @ 6-8 PM PDT, dedicated to giving you an accessible introduction to Python. Our goal is to teach you the essentials of the programming language itself, as well as some of its practical and cool applications, such as task automation and web development! No prior Python experience is required, but basic programming knowledge is recommended.',
			},
			{
				title: 'Hack Kitchen',
				image: {
					src: '/images/committees/hack/hack_kitchen.png',
					alt: 'Image of Hack off the Hill flyer',
				},
				desc: 'Hack Kitchen is a virtual coding puzzle competition that encourages creativity in technology. Coders will participate in a 8 hour MasterChef style tournament, where each round will consist of a wacky coding puzzle and some for your favorite Gordon Ramsay references. To accommodate for time zones, we will be offering 2 sessions of Hack Kitchen.',
			},
			{
				title: 'Javascript Chats',
				image: {
					src: '/images/committees/hack/js_chats.png',
					alt: 'Image of Hack Fam flyer',
				},
				desc: 'JavaScript is one of the most popular languages that people use outside of academic settings at UCLA. Come out to JavaScript Chats with ACM Hack, a weekly discussion on intermediate/advanced JavaScript. This series aims to deepen your understanding of the language’s features and designs. We also plan to cover frameworks and related topics.',
			},
		],
		introImage: '/images/committees/hack/hack_motif_applied.png',
		mission: 'To empower the community by providing the means to build amazing things and explore what is possible through code!',
		image: '/images/committees/hack_wordmark.svg',
		wordmark_dark: '/images/committees/hack_wordmark_dark.svg',
		diamond: '/images/diamonds/hack_diamond.svg',
		internship: {
			whatWeDo: 'Hack is all about empowering the community with the means to build amazing things using software. We deal primarily with software development, most commonly web and mobile app development, and host events for these such as workshops and hackathons.',
			whatInternsWillDo: 'Interns will work closely with the rest of the team to organize events, fulfilling roles (i.e. event  director, curriculum developer, marketing) chosen based on personal interest prior to each quarter. Interns may choose to additionally work on our internal dev team to maintain the Hack and HOTH websites.',
			card: '/images/cards/hack_card.svg',
			nextSteps: 'All Interns have the opportunity to become officers in the Spring if they choose to stay.',
		},
	},
];
