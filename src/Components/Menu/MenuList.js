import Soup from '../Assets/soup.png';
import chickenTenders from '../Assets/chicken-tenders-750x750.png';
import hummus from '../Assets/hummus-750x750.png';
import nachos from '../Assets/nachos-750x750.png';
import wings from '../Assets/chicken-wings-750x750.png';
import calamari from '../Assets/calamari-750x750.png';

const Appetizers = [
	{
		name: 'SOUPS',
		image: Soup,
		price: '$6',
		description: 'Ask your server for the Chef’s homemade soup of the day',
	},
	{
		name: 'CHICKEN TENDERS',
		image: chickenTenders,
		price: '$9',
		description:
			'crispy fried chicken tenders served with your choice of two sauces: honey mustard, buffalo sauce, bourbon BBQ, ranch, or bleu cheese **Make it a platter with fries OR tots for $2 more! **',
	},
	{
		name: 'ROASTED GARLIC HUMMUS',
		image: hummus,
		price: '$8',
		description:
			'Served with warm pita, green and red bell peppers, carrots, celery, and Kalamata olives',
	},
	{
		name: 'NACHOS',
		image: nachos,
		price: '$9',
		description:
			'yellow corn tortilla chips layered with our homemade chili, cheddar and pepper jack cheese, pico de gallo and sour cream Load your nachos up! ADD: grilled chicken $4, guacamole $2, bacon $2, jalapeños $1',
	},
	{
		name: '8, 16 OR 24 CHICKEN WINGS',
		image: wings,
		price: '$11-$16-$22',
		description:
			'Your choice of: Bourbon BBQ / buffalo /soy honey / garlic parmesan. Served with celery, carrots and your choice of bleu cheese or ranch dressing',
	},
	{
		name: 'CALAMARI',
		image: calamari,
		price: '$11',
		description:
			'Fried and topped with fresh herb-lemon zest, and served with a side of sweet chili ponzu',
	},
];

export { Appetizers };
