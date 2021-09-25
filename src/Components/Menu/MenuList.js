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
import steakSalad from '../Assets/steak-salad-750x750.png';
import blackChicken from '../Assets/blackened-chicken-750x750.png';
import cobbSalad from '../Assets/cobb-salad-750x750.png';
import salmonSalad from '../Assets/salmon-salad-750x750.png';
import impossibleBurger from '../Assets/impossible-burger-750x750.png'
import blt from '../Assets/blt-750x750.png';
import bbqChickenWrap from '../Assets/chicken-wrap-750x750.png';
import shrimpPoBoy from '../Assets/shrimp-poboy-750x750.png';
import chickenClub from '../Assets/chicken-club-750x750.png';
import angusBurger from '../Assets/angus-burger-750x750.png';
import vegieWrap from '../Assets/veggie-wrap-750x750.png';
import crabCake from '../Assets/crabcake-sandwich-750x750.png';
import gyro from '../Assets/gyro-750x750.png';
import steaknCheese from '../Assets/chessesteak-750x500.png';
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

const TaterTotsMenu = [
	{
		name: 'TATOR TOT NACHOS',
		image: logoPlace,
		price: '$7',
		description:
			'Crispy golden tots layered with our homemade chili, cheddar and pepper jack cheese, pico de gallo, and sour cream.',
		description1:
			'Load your Nachos up! Add: grilled chicken $4, guacamole $2, bacon $2, jalapeños $1',
	},
	{
		name: 'BUFFALO TATOR TOTS',
		image: logoPlace,
		price: '$10',
		description:
			'Crispy golden tots layered with grilled smoked chicken, buffalo sauce, bleu cheese crumbles, and pepper jack cheese, and served with a side of bleu cheese dressing',
	},
	{
		name: 'CHEESY TOTS',
		image: logoPlace,
		price: '$7',
		description:
			'Crispy golden tots layered with cheddar cheese, topped with bacon, and served with a side of ranch',
	},
	{
		name: 'PIZZA TOTS',
		image: logoPlace,
		price: '$7',
		description:
			'Crispy golden tots layered with mozzarella cheese, our homemade marinara sauce, and your choice of two toppings. Choices include: bacon, ham, pepperoni, sausage, chicken, spinach, mushroom, tomatoes, green or red bell peppers, onion, jalapeño, black olives. Additional toppings add $0.50',
	},
];

const SaladMenu = [
	{
		name: 'CAESAR SALAD',
		image: logoPlace,
		price: '$11',
		description: 'Ask your server for the Chef’s homemade soup of the day',
	},
	{
		name: 'MEDITERRANEAN STEAK SALAD*',
		image: steakSalad,
		price: '$16',
		description:
			'crispy fried chicken tenders served with your choice of two sauces: honey mustard, buffalo sauce, bourbon BBQ, ranch, or bleu cheese **Make it a platter with fries OR tots for $2 more! **',
	},
	{
		name: 'BLACKENED CHICKEN',
		image: blackChicken,
		price: '$15',
		description:
			'Served with warm pita, green and red bell peppers, carrots, celery, and Kalamata olives',
	},
	{
		name: 'COBB SALAD',
		image: cobbSalad,
		price: '$12',
		description:
			'yellow corn tortilla chips layered with our homemade chili, cheddar and pepper jack cheese, pico de gallo and sour cream Load your nachos up! ADD: grilled chicken $4, guacamole $2, bacon $2, jalapeños $1',
	},
	{
		name: 'BUFFALO CHICKEN SALAD',
		image: logoPlace,
		price: '$15',
		description:
			'Your choice of: Bourbon BBQ / buffalo /soy honey / garlic parmesan. Served with celery, carrots and your choice of bleu cheese or ranch dressing',
	},
	{
		name: 'SALMON SALAD*',
		image: salmonSalad,
		price: '$16',
		description:
			'Fried and topped with fresh herb-lemon zest, and served with a side of sweet chili ponzu',
	},
];

const SandWhichesMenu = [
	{
		name: 'IMPOSSIBLE BURGER',
		image: impossibleBurger,
		price: '$14',
		description:
			'Plant-based patty topped with arugula, tomato, onion, and served on a brioche roll',
		description1:
			'Add cheese $1: American, provolone, cheddar, pepper jack or bleu cheese crumbles Additional toppings: bacon $2, fried egg $1',
	},
	{
		name: 'BLT SANDWICH',
		image: blt,
		price: '$10',
		description: 'Applewood smoked bacon, lettuce, tomato, mayonnaise',
		description1: 'Add: chicken $4, fried egg $1',
	},
	{
		name: 'BUFFALO CHICKEN SANDWICH',
		image: logoPlace,
		price: '$14',
		description:
			'Marinated chicken, pepper jack cheese, lettuce, tomato, bleu cheese crumbles, served on a ciabatta bun with a side of bleu cheese dressing',
	},
	{
		name: 'BBQ CHICKEN WRAP',
		image: bbqChickenWrap,
		price: '$14',
		description:
			'Marinated chicken, bacon, cheddar cheese, bourbon BBQ, tomato, served with a side of ranch dressing',
	},
	{
		name: 'SHRIMP PO BOY',
		image: shrimpPoBoy,
		price: '$14',
		description:
			'Crispy fried shrimp, onion, tomato, shredded lettuce, topped with a creole vinaigrette, served on French bread',
	},
	{
		name: 'GRILLED OR CRISPY CHICKEN CLUB',
		image: chickenClub,
		price: '$15',
		description:
			'Chicken breast topped with Applewood smoked bacon, tomato, lettuce, avocado, provolone cheese and a fresh herb spread, served on a ciabatta bun',
	},
	{
		name: 'ANGUS HAMBURGER*',
		image: angusBurger,
		price: '$10',
		description:
			'Angus beef patty topped with lettuce, tomato, onion, and served on a brioche roll',
		description1:
			'Add cheese $1: American, provolone, cheddar, pepper jack, bleu cheese crumbles Additional toppings: bacon $2, fried egg $1',
	},
	{
		name: 'GRILLED VEGETABLE WRAP',
		image: vegieWrap,
		price: '$10',
		description: 'Zucchini, yellow squash, peppers, avocado, arugula, hummus',
	},
	{
		name: 'CRAB CAKE SANDWICH',
		image: crabCake,
		price: '$16',
		description:
			'Jumbo lump crab meat, lettuce, tomato, and Florida mustard, served on a brioche roll',
	},
	{
		name: 'GYRO',
		image: gyro,
		price: '$13',
		description:
			'Thin sliced lamb & beef, lettuce, tomato, onion, and tzatziki sauce, served on a large pitaSubstitute chicken at no additional charge',
	},
	{
		name: 'STEAK & CHEESE SUB*',
		image: steaknCheese,
		price: '$12',
		description:
			'Thin sliced steak, sautéed onion, grilled peppers, lettuce, tomato, mayo, & provolone, served on an Italian hoagie',
	},
];

export {
	Appetizers,
	heroImages,
	indexList,
	SmallPlatesMenu,
	TaterTotsMenu,
	SaladMenu,
	SandWhichesMenu,
};
