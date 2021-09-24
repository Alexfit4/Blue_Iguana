import Soup from '../Assets/soup.png';
import chickenTenders from '../Assets/chicken-tenders-750x750.png';
import hummus from '../Assets/hummus-750x750.png';
import nachos from '../Assets/nachos-750x750.png';
import wings from '../Assets/chicken-wings-750x750.png';
import calamari from '../Assets/calamari-750x750.png';
import placeHolder from '../Assets/y9DpT.jpg';
import logoPlace from '../Assets/logo-pic-need.png';
import tacos from '../Assets/street-tacos-750x750.png';
import quesadilla from '../Assets/quesadilla-750x750.png';
import tunaTacos from '../Assets/tuna-tacos-750x750.png';
import porkRibs from '../Assets/pork-ribs-750x750.png';
import pizza from '../Assets/pizza-750x750.png';
import macNcheese from '../Assets/mac-and-chesse-750x750.png';
const heroImages = [placeHolder, placeHolder, placeHolder];

const indexList = [
	'Appetizers',
	'SmallPlates',
	'Drinks',
	'Tater Tot Menu',
	'Salads',
	'Sandwiches',
	'Entress',
	'Sides',
	'Dessert',
];

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

const SmallPlatesMenu = [
	{
		name: 'SLIDER TRIO*',
		image: logoPlace,
		price: '$9',
		description:
			'Choose any three sliders! Served with your choice of Iggy secret sauce, bleu cheese, or ranch',
		description1:
			'Angus Beef Burger: sliders topped with lettuce, diced tomato, and Iggy secret sauce.',
		description2:
			'Crispy Buffalo Chicken: sliders topped with lettuce and bleu cheese crumbles.',
		description3:
			'Andouille Sausage: sliders topped with sautéed onions and spicy creole mustard sauce.',
		description4: '**Make it a platter with fries OR tots for $2 more! **',
	},
	{
		name: 'JOSE’S STREET TACOS',
		image: tacos,
		price: '$9',
		description:
			'Three soft shell tortillas served with smoked chicken, lettuce, pico de gallo, pepper jack cheese, and chipotle mayo Substitute: with beef, fish or shrimp $3, mix and match combo $5',
	},
	{
		name: 'CHICKEN QUESADILLA',
		image: quesadilla,
		price: '$10',
		description:
			'Soft shell flour tortilla, grilled chicken, grilled green and red bell peppers, grilled onions, cheddar and pepper jack cheese. Served with a side of sour cream, lettuce, and pico de gallo. ADD: guacamole $2, bacon $2, jalapeños $1',
	},
	{
		name: 'AHI TUNA TACOS*',
		image: tunaTacos,
		price: '$9',
		description:
			'Crispy homemade won ton taco shells, stuffed with fresh Ahi seasoned with sea salt, spicy Napa cole slaw, and avocado cream dressing',
	},
	{
		name: 'BONELESS BBQ PORK RIBS',
		image: porkRibs,
		price: '$9',
		description:
			'Covered in bourbon BBQ sauce, drizzled with soy honey glaze, and served with a side of sour cream',
	},
	{
		name: 'THIN CRUST PIZZA',
		image: pizza,
		price: '$9',
		description:
			'Served with your choice of two toppings. Choices include: bacon, ham, pepperoni, sausage, chicken, spinach, mushroom, tomatoes, green or red bell pepper, onion, jalapeno, and black olives. Aditional toppings $0.50',
	},
	{
		name: 'MAC ‘N’ CHEESE',
		image: macNcheese,
		price: '$7',
		description:
			'Homemade creamy cheese sauce over elbow macaroni Add: jalapeno 1, chicken 4, sausage or bacon $2, shrimp $5, lobster $7',
	},
];

export { Appetizers, heroImages, indexList, SmallPlatesMenu };
