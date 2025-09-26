// Мапа перекладів
const translations = {
	en: {
		title: "up to 6 000 EUR",
		bonus: "+extra 50 FS",
		heroButton: "Registration",
		benefitsTitle: "Trusted Casino",
		benefitsTitle2: "Gambling Guide for",
		benefitsText: "30+ Years - Casino.org",
		images: {
			card1: "images/benefits/CARD1.webp",
			card2: "images/benefits/CARD2.webp",
			card3: "images/benefits/CARD3.webp",
		},
		gamesTitle: "Over 8000+ games",
		footerButton: "Play",
	},
	pt: {
		title: "até 6000 Eur",
		bonus: "+ 50 FS extra",
		heroButton: "Registo",
		benefitsTitle: "Casino fiável",
		benefitsTitle2: "Gambling Guide for",
		benefitsText: "30+ Anos - Casino.org",
		images: {
			card1: "images/benefits/card1_pt.webp",
			card2: "images/benefits/card2_pt.webp",
			card3: "images/benefits/card3_pt.webp",
		},
		gamesTitle: "Mais de 8000 jogos",
		footerButton: "Jogar",
	},
};
    function getBrowserLanguage() {
			const lang = navigator.language || navigator.userLanguage;
			if (lang.startsWith("pt")) return "pt";
			return "en"; // fallback
		}

		function applyTranslations(lang) {
			// Текст
			document.querySelectorAll("[data-translate]").forEach((el) => {
				const key = el.getAttribute("data-translate");
				if (translations[lang][key]) {
					el.textContent = translations[lang][key];
				}
			});

			// Картинки
			document.querySelectorAll("[data-translate-img]").forEach((el) => {
				const key = el.getAttribute("data-translate-img");
				if (translations[lang].images && translations[lang].images[key]) {
					el.src = translations[lang].images[key];
				}
			});
		}

		// Виконуємо переклад при завантаженні сторінки
		const lang = getBrowserLanguage();
		applyTranslations(lang);