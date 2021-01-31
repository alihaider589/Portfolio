const data = [
	{
		slug: 'start',
		messages: [
			'Salam, nice to meet you. Welcome to my Portfolio.',
			'How can I help you?',
		],
		answers: [
			{ label: 'Tell me Something about yourself.', link: '/chat/bio' },
			{ label: 'Show your previous Work', link: '/chat/portfolio' },
			{ label: 'How can I contact you?', link: '/chat/contact' },
		],
	},
	{
		slug: 'bio',
		messages: [
			"My name is Ali Haider and I'm from Karachi, Pakistan and I'm 23 years old.",
			"I've been working as a mobile and web developer from past 2 years",
			'I am currently working with a company named as Avolox',
		],
		answers: [
			{ label: 'What technologies are you using?', link: '/chat/tech' },
			{ label: "Show me some stuff you've done.", link: '/chat/portfolio' },
		],
	},
	{
		slug: 'tech',
		messages: [
			"I love building with React right now, but I don't shy away from vanilla CSS/HTML and Javascript if needed.",
			'I really like using serverless/jamstacky backends like Firebase, but I can spin up some basic node Backend stack if needed.',
			'My guilty pleasure is developing with/for WordPress. Especially using it as headless CMS to power React Frontends.',
		],
		answers: [
			{ label: 'Cool, show me some projects', link: '/chat/portfolio' },
		],
	},
	{
		slug: 'contact',
		messages: [
			'You can contact me on Github and LinkedIn, the links are in the right corner of this page.',
			'Or just simply hit me up at alihaider589@outlook.com',
		],
		answers: [
			{
				label: "Okay! Let's start again.",
				link: '/chat/start/completed',
			},
		],
	},
	{
		slug: 'portfolio',
		messages: ['Wait a second, let me get my projects ...'],
	},
];

export default data;
