import sampleImpactImage from '../public/images/impact/sample-image.png';

export const initiatives = [
	{
		title: 'A workshop 1',
		img: sampleImpactImage,
		alt: 'sample image - will change later, I promise!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'A workshop 2',
		img: sampleImpactImage,
		alt: 'sample image - will change later, I promise!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		title: 'A workshop 3',
		img: sampleImpactImage,
		alt: 'sample image - will change later, I promise!',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
];

export const people = [
	{
		name: 'Maya Raman',
		pronouns: 'she/her',
		position: 'Impact Director',
		major: 'Computer Science Major',
		year: 2023,
		img: 'https://teachla.uclaacm.com/img/team/mayaraman.jpg',
		alt: 'a photo of maya smiling beside royce hall',
	},
	{
		name: 'Maya clone #1',
		pronouns: 'she/her',
		position: 'Impact Director',
		major: 'Computer Science Major',
		year: 2023,
		img: 'https://teachla.uclaacm.com/img/team/mayaraman.jpg',
		alt: 'a photo of maya smiling beside royce hall',
	},
	{
		name: 'Maya clone #2',
		pronouns: 'she/her',
		position: 'Impact Director',
		major: 'Computer Science Major',
		year: 2023,
		img: 'https://teachla.uclaacm.com/img/team/mayaraman.jpg',
		alt: 'a photo of maya smiling beside royce hall',
	},
];

const blogImages = [
	'https://miro.medium.com/max/1400/0*CtF08rCYE9G4Xqk7.jpg',
	'https://miro.medium.com/max/1400/0*LSHF7HtyCOuJgbBP.jpg',
	'https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-start-a-blog-illustration.png?format=jpg&quality=90&v=1595363254&width=1024',
];

export const blogs = [
	{
		title: 'Digital Tech for a Greener Future',
		author: 'Jason Jewik',
		date: 'Apr 3',
		length: '11 min read',
		img: 'https://miro.medium.com/max/1400/0*CtF08rCYE9G4Xqk7.jpg',
		href: 'https://medium.com/acm-at-ucla/digital-tech-for-a-greener-future-7bc7f2e00bda',
		authorImg: 'https://miro.medium.com/fit/c/96/96/1*HdS_CXUnr6GGVUfMR66_4g.jpeg',
		authorAlt: 'a photo of Jason smiling',
		backgroundStyle: { backgroundImage: `url("${blogImages[0]}")` },
	},
	{
		title: 'Considerations for The Future of AI Governance',
		author: 'Justin Yi',
		date: 'Feb 10',
		length: '6 min read',
		img: 'https://miro.medium.com/max/1400/0*LSHF7HtyCOuJgbBP.jpg',
		href: 'https://medium.com/impact-labs/considerations-for-the-future-of-ai-governance-46d727012c5b',
		authorImg: 'https://www.ssu.ca/wp-content/uploads/2020/08/default-profile.png',
		authorAlt: 'default profile pic',
		backgroundStyle: { backgroundImage: `url("${blogImages[1]}")` },
	},
	{
		title: 'Introducing ACM | Impact',
		author: 'ACM at UCLA',
		date: 'Jan 7',
		length: '3 min read',
		img: 'https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-start-a-blog-illustration.png?format=jpg&quality=90&v=1595363254&width=1024',
		href: 'https://medium.com/@acmucla',
		authorImg: 'https://www.ssu.ca/wp-content/uploads/2020/08/default-profile.png',
		authorAlt: 'default profile pic',
		backgroundStyle: { backgroundImage: `url("${blogImages[2]}")` },
	},
];

// possible default blog images
//https://blog.hubspot.com/hubfs/GettyImages-974683580.jpg
//https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-start-a-blog-illustration.png?format=jpg&quality=90&v=1595363254&width=1024
