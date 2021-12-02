import Soup from '../Assets/soup.png';
import chickenTenders from '../Assets/chicken-tenders-750x750.png';
import hummus from '../Assets/hummus-750x750.png';
import nachos from '../Assets/nachos-750x750.png';
import wings from '../Assets/chicken-wings-750x750.png';
import calamari from '../Assets/calamari-750x750.png';
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
import impossibleBurger from '../Assets/impossible-burger-750x750.png';
import blt from '../Assets/blt-750x750.png';
import bbqChickenWrap from '../Assets/chicken-wrap-750x750.png';
import shrimpPoBoy from '../Assets/shrimp-poboy-750x750.png';
import chickenClub from '../Assets/chicken-club-750x750.png';
import angusBurger from '../Assets/angus-burger-750x750.png';
import vegieWrap from '../Assets/veggie-wrap-750x750.png';
import crabCake from '../Assets/crabcake-sandwich-750x750.png';
import gyro from '../Assets/gyro-750x750.png';
import steaknCheese from '../Assets/chessesteak-750x500.png';
import crabLegs from '../Assets/crab-legs-750x750.png';
import shrimpLb from '../Assets/shrimp-750x750.png';
import chickenWaffle from '../Assets/chicken-waffle-sliders-750x750.png';
import chickenPaillard from '../Assets/chicken-paillard-750x750.png';
import alfredo from '../Assets/fetuchinni-steak-750x750.png';
import jumboCrabCakes from '../Assets/jumbo-crabcake-750x750.png';
import newYorkStrip from '../Assets/ny-strip-750x750.png';
import fajitas from '../Assets/fajitas-750x750.png';
import blueIggy from '../Assets/beef-load-potato-750x750.png';
import panRoastedSalmon from '../Assets/salmon-750x750.png';
import pho from '../Assets/pho-750x750.png';
import spinachRav from '../Assets/mushroom-ravioli-750x750.png';
import jambalaya from '../Assets/yambalamba-750x750.png';
import homemadeIceCream from '../Assets/ice-cream-750x750.png';
import tresLeches from '../Assets/tres-leches-750x750.png';
import grannySmith from '../Assets/apple-crisp-750x750.png';
import chocolateCake from '../Assets/chocolate-cake-750x750.png';
import tacoBanner from '../Assets/homepage-dish-2-1500x900.jpg';
import seaFoodInfo from '../Assets/homepage-seafood-3-1500x900.jpg';
import cheeseCakeBanner from '../Assets/cheescake.jpg';
import bbqWings from '../Assets/HappyHourMenu/hh-wings-750x750.png';
import hhChickenTenders from '../Assets/HappyHourMenu/hh-chicken-tenders-750x750.png';
import hhbaconCheeseFries from '../Assets/HappyHourMenu/hh-fries-750x750.png';
import hhSliders from '../Assets/HappyHourMenu/hh-sliders-750x750.png';
import hhquesadilla from '../Assets/HappyHourMenu/hh-quesadilla-750x750.png';
const heroImages = [
	tacoBanner,
	seaFoodInfo,
	cheeseCakeBanner,
	cheeseCakeBanner,
];

const indexList = [
	'Appetizers',
	'SmallPlates',
	'Drinks',
	'Tater Tot Menu',
	'Salads',
	'Sandwiches',
	'Entrees',
	'Sides',
	'Premium Sides',
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

const EntreeMenu = [
	{
		name: '1 LB ALASKAN SNOW CRAB LEGS',
		image: crabLegs,
		price: '$24',
		description:
			'Alaskan snow crab have a sweet and succulent flavor with moist, firm and rich meat. The claw and leg meat is somewhat firmer than the body meat',
	},
	{
		name: '1 LB PEEL & EAT SHRIMP',
		image: shrimpLb,
		price: '$21',
		description:
			'Our ribs seasoned and smoked in house, with a side of our homemade cole slaw. Served with your choice of one side',
	},
	{
		name: 'CHICKEN AND WAFFLE SLIDERS',
		image: chickenWaffle,
		price: '$16',
		description:
			'Roasted and deep-fried chicken served on a homemade waffle with a side of maple cream or spicy maple syrup. Served with your choice of one side',
	},
	{
		name: 'CHICKEN PAILLARD',
		image: chickenPaillard,
		price: '$19',
		description:
			'Panko crusted chicken breast, smothered in our homemade grain mustard sauce,topped with diced asparagus, tomato, capers, served over mashed potatoes',
	},
	{
		name: 'FETTUCCINI ALFREDO',
		image: alfredo,
		price: '$12',
		description:
			'Creamy Alfredo sauce poured over fettuccine, mushrooms, spinach, topped with Parmesan cheese',
		description1: 'Add: chicken $4, shrimp $5, lobster $7',
	},
	{
		name: 'JUMBO LUMP CRAB CAKES',
		image: jumboCrabCakes,
		price: '$25',
		description:
			'Served with a side of our homemade Florida mustard and your choice of one side',
	},
	{
		name: 'NEW YORK STRIP (16OZ)*',
		image: crabCake,
		price: '$32',
		description: 'Served with your choice of two sides',
	},
	{
		name: 'RIBEYE (16OZ)',
		image: logoPlace,
		price: '$35',
		description: 'Served with your choice of two sides',
	},
	{
		name: 'FAJITAS*',
		image: fajitas,
		price: '$17-$18-$19-$22',
		description:
			'Marinated steak served with peppers, onions, flour tortilla, various savory fillings served with rice and frijoles charros',
		description1:
			'(chicken $17, beef $18, shrimp $19, combine any two $22, double a single meat order $26)',
	},
	{
		name: 'BLUE IGGY BEEF BAKED POTATO',
		image: blueIggy,
		price: '$19',
		description:
			'Baked potato with beef, bell peppers, onion, garlic and tossed in Alfredo sauce',
	},
	{
		name: 'PAN ROASTED SALMON *',
		image: panRoastedSalmon,
		price: '$24',
		description:
			'Topped with Tabasco butter cream and served with your choice of two sides.',
	},
	{
		name: 'SHRIMP & GRITS',
		image: logoPlace,
		price: '$18',
		description:
			'Seasoned shrimp with creamy grits with parmesan and balsamic glaze',
	},
	{
		name: 'SPINACH MUSHROOM RAVIOLI',
		image: spinachRav,
		price: '$13',
		description:
			'Fresh spinach, mushroom ravioli with homemade spaghetti sauce, garlic and fresh basil',
	},
	{
		name: 'JAMBALAYA',
		image: jambalaya,
		price: '$13',
		description:
			'Our combination of shrimp, chicken, Andouille sausage, onion, and peppers in our homemade spicy tomato red sauce, served over garlic parsley rice',
	},
];

const SidesMenu = [
	{
		name: 'BAKED POTATO',
		price: '$4',
	},
	{
		name: 'MASHED POTATO',

		price: '$4',
	},
	{
		name: 'HAND CUT FRIES',

		price: '$4',
	},
	{
		name: 'MAC & CHEESE',

		price: '$4',
	},
	{
		name: 'SAUTÉED GREEN BEANS',

		price: '$4',
	},
	{
		name: 'PARSLEY RICE',

		price: '$4',
	},
	{
		name: 'TATER TOTS',

		price: '$4',
	},
	{
		name: 'ONION RINGS',

		price: '$4',
	},
	{
		name: 'LOADED BAKED POTATO',

		price: '$5',
	},
	{
		name: 'LOADED SWEET POTATO',

		price: '$5',
	},
	{
		name: 'SWEET POTATO FRIES',

		price: '$5',
	},
	{
		name: 'HOUSE SALAD',

		price: '$5-$18-$19-$22',
	},
	{
		name: 'CAESAR SALAD',

		price: '$5',
	},
	{
		name: 'SAUTÉED MIXED VEGGIES',

		price: '$5',
	},
	{
		name: 'MIXED FRUITS',

		price: '$5',
	},
];

const PremiumSidesMenu = [
	{
		name: '1/2 LB ALASKAN SNOW CRAB LEGS',
		price: '$14',
	},
	{
		name: '1/2 LB PEEL & EAT SHRIMP',

		price: '$12',
	},
	{
		name: 'JUMBO LUMP CRAB CAKE',

		price: '$8',
	},
];

const DessertsMenu = [
	{
		name: 'HOMEMADE ICE CREAM SELECTIONS',
		image: homemadeIceCream,
		price: '$4',
		description:
			'Two scoops of our homemade Vanilla Bean Ice Cream, Dark Chocolate Ice Cream, or Raspberry Sorbet',
	},
	{
		name: 'TRES LECHES',
		image: tresLeches,
		price: '$8',
		description:
			'Traditional homemade three milks cake, topped with homemade whipped cream',
	},
	{
		name: 'GRANNY SMITH APPLE CRISP',
		image: grannySmith,
		price: '$6',
		description:
			'This homemade dessert has a crispy brown sugar crust, filled with warm apple pie, topped with a scoop of our vanilla bean ice cream',
	},
	{
		name: 'CARROT CAKE',
		image: logoPlace,
		price: '$6',
		description:
			'Made with fresh carrots, toasted walnuts, filled & frosted with cream cheese icing',
	},
	{
		name: 'CHOCOLATE CAKE',
		image: chocolateCake,
		price: '$7',
		description: 'Dark chocolate cake',
	},
	{
		name: 'CHEESE CAKE',
		image: logoPlace,
		price: '$7',
		description: 'Classic cheesecake with graham cracker crust',
	},
];

const breakfastMenu = [
	{
		name: 'CHESAPEAKE BENEDICT',
		image: logoPlace,
		price: '$12',
		description:
			'Poached egg over a jumbo lump crab cake, topped with hollandaise sauce, and Old Bay, served with home fries',
	},
	{
		name: 'BETTER BOTANAS',
		image: logoPlace,
		price: '$12',
		description:
			'Our house specialty Botanas over home fries, topped with a fried egg. Double it up! Get twice the meat $15',
	},
	{
		name: 'BLUE BURRITO',
		image: logoPlace,
		price: '$10',
		description:
			'Scrambled eggs, bacon, pico de gallo, pepper jack and cheddar cheese, served w/ homefries.',
	},
];

const byo = [
	{
		name: 'CHOOSE YOUR GRAIN',

		price: '$1',
		description: [
			'Tortilla , ',
			'Brioche , ',
			'Ciabatta , ',
			'Texas Toast , ',
			'Hoagie , ',
			'Pita , ',
			'English Muffin , ',
			'Pancake , ',
			'Waffle , ',
			'French Toast',
		],
	},
	{
		name: 'CHOOSE YOUR MEAT',
		price: '$2',
		description: [
			'Bacon $2 , ',
			'Canadian Bacon $2 , ',
			'Crab Cake $8 , ',
			'Andouille $2 , ',
			'Sausage Links $2 , ',
			'Diced Ham $2 , ',
			'Thin Rib-eye $5 , ',
			'Grilled Chicken Breast $4 , ',
			'Gyro $5 , ',
			'IMPOSSIBLE BURGER $8 , ',
			'Hamburger $6.00',
		],
	},
	{
		name: '$2',
		price: 'CHOOSE YOUR CHEESE',
		description: [
			'American , ',
			'Cheddar , ',
			'Pepper jack , ',
			'BleuGoat , ',
			'Provolone',
		],
	},
	{
		name: '$1/each',
		price: 'CHOOSE YOUR EGGS',
		description: ['Scrambled , ', 'Fried , ', 'Poached '],
	},
	{
		name: 'CHOOSE YOUR VEGGIES',
		price: '$0.50 each',
		description: [
			'Diced White Onion , ',
			'Sliced Red Onion , ',
			'Zucchini  , ',
			'Squash , ',
			'Sliced Tomato , ',
			'Diced Tomato , ',
			'Pico de Gallo , ',
			'Arugula , ',
			'Spinach , ',
			'Romaine , ',
			'Red Pepper, ',
			'Green Pepper , ',
			'Jalapeno , ',
			'Chopped Asparagus , ',
			'Mushrooms , ',
			'Corn , ',
			'Black Beans , ',
			'Kalamata Olives , ',
			'Black Olives , ',
			'Avocado Guacamole $2/each',
		],
	},
];

const happyHourFood = [
	{
		name: 'BEEF CHILI NACHOS',
		description: 'Chili / Cheddar / Pepper Jack /Pico de Gallo/Sour Cream',
		image: logoPlace,
		price: '$5',
	},
	{
		name: 'BUFFALO OR BBQ WINGS',
		image: bbqWings,
		price: '$5',
	},
	{
		name: 'FRIED MOZZARELLA STICKS',
		image: logoPlace,
		price: '$5',
	},
	{
		name: 'CHICKEN TENDERS',
		description:
			'Choice of two sauces: honey mustard, buffalo sauce, bourbon BBQ, ranch, or bleu cheese',
		image: hhChickenTenders,
		price: '$5',
	},
	{
		name: 'BACON & JALAPENO MAC N CHEESE',
		image: logoPlace,
		price: '$5',
	},
	{
		name: 'BACON CHEESE FRIES',
		image: hhbaconCheeseFries,
		price: '$5',
	},
	{
		name: 'BURGER SLIDERS & FRIES',
		description: 'Lettuce / Tomato/ Chipotle Dressing',
		image: hhSliders,
		price: '$5',
	},
	{
		name: 'CHICKEN QUESADILLA',
		image: hhquesadilla,
		price: '$5',
	},
];

const hhdrinks = [
	{
		name: 'ALL DAY HAPPY HOUR',
		description: 'Fireball and PBR Tall Boy',
		price: '$3',
	},
	{
		name: 'HOUSE WINE',
		description: 'Cabernet, Chardonnay, Merlot, Pinot Grigio, Sauvignon Blanc',
		price: '$3.50',
	},
	{
		name: 'DOMESTIC BOTTLES',
		description: 'Budweiser, Bud Light, Coors Light, Miller Lite',
		price: '$3.50',
	},
	{
		name: 'DOMESTIC DRAFTS',
		description: 'Miller Lite, Yeungling Larger',
		price: '$3.50',
	},
	{
		name: 'RAIL LIQUOR',
		description: 'Bourbon, Gin, Rum, Scotch, Spiced Rum, Tequila, Vodka',
		price: '$3.50',
	},
];

const wednesdaySpecials = [
	{
		name: '1 LB WILD CAUGHT PEEL & EAT SHRIMP*',
		description: '*LIMITED QUANTITY',
		image: logoPlace,
		price: '$8.99',
	},
	{
		name: '1 LB ALASKAN SNOW CRAB LEGS*',
		description: '*LIMITED QUANTITY',
		image: logoPlace,
		price: '$12.99',
	},
];

const meatMondays = [
	{
		name: 'BOARD MEETING 1',
		description:
			'Includes 8 wings, 1/2 Rack Ribs, Pulled Pork (1 lb), Kielbasa (12oz) and Beef Brisket (1lb)',
		price: '$20',
	},
	{
		name: 'BOARD MEETING 2',
		description:
			'Includes 12 wings, Rack Ribs, Pulled Pork (1 lb), Kielbasa (12oz) and Beef Brisket (1lb)',
		price: '$30',
	},
	{
		name: 'BOARD MEETING 3',
		description:
			'Includes 18 wings, Rack Ribs, Pulled Pork (1 lb), Kielbasa (12oz) and Beef Brisket (1lb)',
		price: '$35',
	},
	{
		name: 'VEGGIE PLATTER',
		description:
			'Grilled Sliced Zucchini, Yellow Squash, Yam, Mushrooms, Peppers, Asparagus, Tomatoes and hummus!',
		price: '$18',
	},
];

const sundayBrunch = [
	{
		name: 'ALL YOU CAN EAT',
		description:
			'Omelette station / Eggs Benedict / Home Fries / Breakfast Sausage / Bacon / Pancakes / French Toast / Three or Four types of entrees( change every Sunday)',
		price: '$',
	},
	{
		name: 'SALAD STATION',
		description: 'Caesar and House Salad',
		price: '$',
	},
	{
		name: 'CARVING STATION',
		description: 'Beef carving station',
		price: '$',
	},
	{
		name: 'HAPPY HOUR MIMOSAS',
		description: '*No included in Buffet price',
		price: '$',
	},
	{
		name: 'BLOODY MARY BAR',
		description: 'Make you own Bloody Mary! *No included in Buffet price',
		price: '$',
	},
];

const mothersBrunch = [
	{
		name: 'SALAD AND SOUP STATION',
		description:
			'She crab soup / Ceasar salad / classic russian olivier salad / mixed garden salad',
	},
	{
		name: 'SEAFOOD',
		description:
			'eel and eat wild caught shrimp / atlantic smoked salmon with cream cheese and capers',
	},
	{
		name: 'HOT STATION',
		description:
			'Breakfast & lunch specialities including: pancakes / french toast / belgian waffles / applewood smoked bacon / Breakfast sausage / eggs benedict / omelette station / creamy mashed potatoes / roasted pork loin / cajun chicken pasta / Skillet corn / bbq meatballs / mixed grilled veggies / mac & cheese / buffalo wings',
	},
	{
		name: 'CARVING STATION',
		description: 'Oven roast beef with horseradish cream sauce / holiday ham',
	},
	{
		name: 'DESSERTS',
		description:
			'Assorted easter cupcakes / bread pudding / chocolate cake / mixed fruits / strawberries w/ wipped cream',
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
	EntreeMenu,
	SidesMenu,
	PremiumSidesMenu,
	DessertsMenu,
	breakfastMenu,
	byo,
	happyHourFood,
	hhdrinks,
	wednesdaySpecials,
	meatMondays,
	sundayBrunch,
	mothersBrunch,
};
