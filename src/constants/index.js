const commands = {
	WEATHER: {
		STREET: ['погода на улице', 'погода', 'температура на улице', 'за окном', 'как там на улице', 'улица'],
		HOME: ['температура в доме']
	},
	WELCOME: ['запусти навык фут кэмп', 'привет'],
	ERRORS: ['no text', 'no version', 'no session', 'end session'],
	SKILL: ['что умеешь', 'что знаешь', 'умения'],
	ABOUT_ME: ['как дела', 'как ты', 'как настроение']
};

const messages = {
	WEATHER: {
		STREET: 'Сейчас на улице'
	},
	NOT_FOUND: 'К сожалению я не знаю такой команды',
	WELCOME: 'Привет. Я бот системы умного дома. Мой функционал растет каждый день.',
	SKILL: 'Я умею работать с различными штуками в доме. Например включить свет или рассказать о температуре в доме.',
	ABOUT_ME: 'У меня все отлично. И вам хорошего дня!'
};

module.exports = {commands, messages};