import drinkMenu from '../Assets/drinkMenu.png';
import happyHour from '../Assets/happyHour.png';
import mainMenu from '../Assets/mainMenu.png';
import uberEats from '../Assets/uberEats.png';
export const data = [
	{
		image: uberEats,
		styling: 'md:w-40 w-32 ml-28 lg:ml-36 md:ml-22',
		title: 'UberEats',
		description:
			'You can order your favorite dishes through Uber Eats. (link to UberEats)',
	},
	{
		image: happyHour,
		styling: 'md:w-28 w-32 ml-32 lg:ml-44 md:ml-22',
		title: 'Happy Hour Menu',
		description:
			'Drink specials all day until 8pm. Every day of the week! Even weekends!',
	},
	{
		image: mainMenu,
		styling: 'md:w-32 w-38 ml-10 md:ml-32 lg:ml-40',
		title: 'Main Menu',
		description: 'Special signature dishes and delicius options!',
	},
	{
		image: drinkMenu,
		styling: 'md:w-28 w-32 ml-32 md:ml-32 lg:ml-44',
		title: 'Drink Menu',
		description:
			'Beers from local breweries all around the DMV and quality cocktails.',
	},
];