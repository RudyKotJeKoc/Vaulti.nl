/**
 * Vaulti.nl - Internationalization (i18n) Module
 * Supports: PL (Polish), NL (Dutch), EN (English)
 */

const i18n = {
    currentLang: 'pl',
    
    translations: {
        pl: {
            // Meta
            'meta.title': 'Vaulti – Personalizowana Skarbonka 3D z Lokalizatorem',
            
            // Navigation
            'nav.how': 'Jak to działa',
            'nav.models': 'Modele',
            'nav.reviews': 'Opinie',
            'nav.faq': 'FAQ',
            
            // Hero
            'hero.title': 'Spokój ducha dla rodziców.<br>Magia dla dzieci.',
            'hero.subtitle': 'Dyskretnie ukryty lokalizator daje pewność, że najcenniejsze skarby Twojego dziecka nigdy się nie zgubią.',
            
            // CTA
            'cta.create': 'Stwórz swoją Vaulti teraz',
            'cta.video': 'Obejrzyj film',
            'cta.compare': 'Porównaj modele',
            'cta.buy': 'Dodaj do koszyka',
            'cta.quick': 'Stwórz teraz!',
            
            // Trust badges
            'trust.rating': 'Ocena od 87 klientów',
            'trust.sold': 'Dzieci posiadające Vaulti',
            'trust.returns': 'Gwarancja zwrotu',
            
            // How it works
            'how.title': 'Spokój ducha w 3 prostych krokach',
            'how.step1.title': 'Zaprojektuj',
            'how.step1.desc': 'Wybierz model, kolor i dodaj grawer imienia Twojego dziecka.',
            'how.step2.title': 'Dodaj AirTag',
            'how.step2.desc': 'Włóż Apple AirTag lub Samsung SmartTag do dyskretnego schowka.',
            'how.step3.title': 'Spokój!',
            'how.step3.desc': 'Śledzenie skarbów Twojego dziecka w aplikacji Find My / SmartThings.',
            
            // Configurator
            'config.title': 'Stwórz swoją Vaulti',
            'config.variant': 'Model',
            'config.variant_color': 'Vaulti Color (39,95 €)',
            'config.variant_wood': 'Vaulti Wood (49,95 €)',
            'config.color': 'Kolor',
            'config.engrave': 'Grawer (imię)',
            'config.engrave_placeholder': 'np. Anna',
            'config.price': 'Cena:',
            'config.share': 'Udostępnij konfigurację',
            
            // Models
            'models.title': 'Porównanie modeli',
            'models.feature': 'Funkcja',
            'models.color': 'Color',
            'models.wood': 'Wood',
            'models.material': 'Materiał',
            'models.colors': 'Dostępne kolory',
            'models.slot': 'Slot na AirTag',
            'models.engrave': 'Grawer imienia',
            'models.price': 'Cena',
            
            // Video
            'video.title': 'Poznaj Vaulti w akcji',
            'video.fallback': 'Twoja przeglądarka nie obsługuje HTML5 video.',
            
            // Reviews
            'reviews.title': 'Co mówią rodzice?',
            
            // Guarantee
            'guarantee.title': 'Gwarancja satysfakcji',
            'guarantee.returns_title': '30 dni zwrotu',
            'guarantee.returns_desc': 'Zwrot bez pytań, jeśli Vaulti Ci się nie podoba.',
            'guarantee.replace_title': 'Darmowa wymiana',
            'guarantee.replace_desc': 'W razie uszkodzenia wymienimy bezpłatnie.',
            'guarantee.warranty_title': '12 miesięcy',
            'guarantee.warranty_desc': 'Pełna gwarancja producenta na wszystkie wady.',
            
            // FAQ
            'faq.title': 'Często zadawane pytania',
            'faq.q1': 'Jaki lokalizator pasuje do Vaulti?',
            'faq.a1': '<p>Vaulti jest kompatybilna z Apple AirTag i Samsung SmartTag. Slot ma wymiary optymalne dla obu urządzeń.</p>',
            'faq.q2': 'Czy dziecko musi wiedzieć o lokalizatorze?',
            'faq.a2': '<p>Nie, schowek na AirTag jest całkowicie ukryty i niedostępny dla dziecka. To Twoja prywatna poduszka bezpieczeństwa.</p>',
            'faq.q3': 'Z jakich materiałów jest wykonana Vaulti?',
            'faq.a3': '<p><strong>Color:</strong> PETG/ASA (trwałe, kolorowe). <strong>Wood:</strong> Naturalna sklejka + TPU (ekologiczne).</p>',
            'faq.q4': 'Jakie są wymiary Vaulti?',
            'faq.a4': '<p>18 × 12 × 12 cm (H × W × D). Idealna do schowania na półce lub w szufladzie.</p>',
            'faq.q5': 'Jak długo trwa dostawa?',
            'faq.a5': '<p>Standardowo 2-4 dni robocze w UE. Możliwa przesyłka ekspresowa (+2€).</p>',
            'faq.q6': 'Czy mogę zwrócić Vaulti?',
            'faq.a6': '<p>Tak! Masz 30 dni na bezwarunkowy zwrot. Koszt zwrotu pokrywamy my.</p>',
            'faq.q7': 'Czy skarbonka ma gwarancję?',
            'faq.a7': '<p>Tak, 12 miesięcy gwarancji producenta na wszystkie wady. W razie problemów wymieniamy bezpłatnie.</p>',
            'faq.q8': 'Czy istnieje możliwość personalizacji?',
            'faq.a8': '<p>Oczywiście! Grawer laserowy imienia (do 20 znaków) jest darmowy i wliczony w cenę.</p>',
            
            // Newsletter
            'newsletter.title': 'Bądź na bieżąco',
            'newsletter.subtitle': 'Subskrybuj naszą gazetę i otrzymaj -10% rabatu na pierwszą zamówienie.',
            'newsletter.placeholder': 'twój@email.com',
            'newsletter.submit': 'Zapisz się',
            
            // Footer
            'footer.tagline': 'Personalizowana skarbonka 3D z lokalizatorem.',
            'footer.links': 'Linki',
            'footer.contact': 'Kontakt',
            'footer.follow': 'Śledź nas',
        },
        
        nl: {
            // Meta
            'meta.title': 'Vaulti – Gepersonaliseerde 3D Spaarpot met Tracker',
            
            // Navigation
            'nav.how': 'Hoe werkt het',
            'nav.models': 'Modellen',
            'nav.reviews': 'Reviews',
            'nav.faq': 'FAQ',
            
            // Hero
            'hero.title': 'Gemoedsrust voor ouders.<br>Magie voor kinderen.',
            'hero.subtitle': 'Een discreet verborgen tracker geeft je de zekerheid dat de kostbaarste schatten van je kind nooit verloren raken.',
            
            // CTA
            'cta.create': 'Creëer nu jouw Vaulti',
            'cta.video': 'Bekijk video',
            'cta.compare': 'Vergelijk modellen',
            'cta.buy': 'Voeg toe aan winkelwagen',
            'cta.quick': 'Creëer nu!',
            
            // Trust badges
            'trust.rating': 'Beoordeling van 87 klanten',
            'trust.sold': 'Kinderen met Vaulti',
            'trust.returns': 'Retourgarantie',
            
            // How it works
            'how.title': 'Gemoedsrust in 3 eenvoudige stappen',
            'how.step1.title': 'Ontwerp',
            'how.step1.desc': 'Kies model, kleur en voeg de naam van je kind gegraveerd toe.',
            'how.step2.title': 'Voeg AirTag toe',
            'how.step2.desc': 'Plaats een Apple AirTag of Samsung SmartTag in het discrete compartiment.',
            'how.step3.title': 'Gemoedsrust!',
            'how.step3.desc': 'Volg de schatten van je kind in de Find My / SmartThings app.',
            
            // Configurator
            'config.title': 'Creëer jouw Vaulti',
            'config.variant': 'Model',
            'config.variant_color': 'Vaulti Color (€ 39,95)',
            'config.variant_wood': 'Vaulti Wood (€ 49,95)',
            'config.color': 'Kleur',
            'config.engrave': 'Gravering (naam)',
            'config.engrave_placeholder': 'bijv. Anna',
            'config.price': 'Prijs:',
            'config.share': 'Deel configuratie',
            
            // Models
            'models.title': 'Modellenvergelijking',
            'models.feature': 'Functie',
            'models.color': 'Color',
            'models.wood': 'Wood',
            'models.material': 'Materiaal',
            'models.colors': 'Beschikbare kleuren',
            'models.slot': 'AirTag slot',
            'models.engrave': 'Naamgravure',
            'models.price': 'Prijs',
            
            // Video
            'video.title': 'Ontdek Vaulti in actie',
            'video.fallback': 'Je browser ondersteunt geen HTML5 video.',
            
            // Reviews
            'reviews.title': 'Wat zeggen ouders?',
            
            // Guarantee
            'guarantee.title': 'Tevredenheidsgarantie',
            'guarantee.returns_title': '30 dagen retour',
            'guarantee.returns_desc': 'Zonder vragen retourneren als Vaulti je niet bevalt.',
            'guarantee.replace_title': 'Gratis vervanging',
            'guarantee.replace_desc': 'Bij beschadiging vervangen we gratis.',
            'guarantee.warranty_title': '12 maanden',
            'guarantee.warranty_desc': 'Volledige fabrieksgarantie op alle defecten.',
            
            // FAQ
            'faq.title': 'Veelgestelde vragen',
            'faq.q1': 'Welke tracker past in Vaulti?',
            'faq.a1': '<p>Vaulti is compatibel met Apple AirTag en Samsung SmartTag. Het slot heeft optimale afmetingen voor beide apparaten.</p>',
            'faq.q2': 'Moet mijn kind weten over de tracker?',
            'faq.a2': '<p>Nee, het AirTag-compartiment is volledig verborgen en ontoegankelijk voor het kind. Het is jouw privé veiligheidskussen.</p>',
            'faq.q3': 'Van welke materialen is Vaulti gemaakt?',
            'faq.a3': '<p><strong>Color:</strong> PETG/ASA (duurzaam, kleurrijk). <strong>Wood:</strong> Natuurlijk multiplex + TPU (milieuvriendelijk).</p>',
            'faq.q4': 'Wat zijn de afmetingen van Vaulti?',
            'faq.a4': '<p>18 × 12 × 12 cm (H × W × D). Ideaal om op een plank of in een lade te bewaren.</p>',
            'faq.q5': 'Hoe lang duurt de levering?',
            'faq.a5': '<p>Standaard 2-4 werkdagen in de EU. Express verzending mogelijk (+€2).</p>',
            'faq.q6': 'Kan ik Vaulti retourneren?',
            'faq.a6': '<p>Ja! Je hebt 30 dagen voor onvoorwaardelijke retour. Wij dekken de retourkosten.</p>',
            'faq.q7': 'Heeft de spaarpot garantie?',
            'faq.a7': '<p>Ja, 12 maanden fabrieksgarantie op alle defecten. Bij problemen vervangen we gratis.</p>',
            'faq.q8': 'Is personalisatie mogelijk?',
            'faq.a8': '<p>Natuurlijk! Lasergravure van een naam (tot 20 karakters) is gratis en inbegrepen in de prijs.</p>',
            
            // Newsletter
            'newsletter.title': 'Blijf op de hoogte',
            'newsletter.subtitle': 'Abonneer je op onze nieuwsbrief en ontvang -10% korting op je eerste bestelling.',
            'newsletter.placeholder': 'jouw@email.nl',
            'newsletter.submit': 'Inschrijven',
            
            // Footer
            'footer.tagline': 'Gepersonaliseerde 3D spaarpot met tracker.',
            'footer.links': 'Links',
            'footer.contact': 'Contact',
            'footer.follow': 'Volg ons',
        },
        
        en: {
            // Meta
            'meta.title': 'Vaulti – Personalized 3D Piggy Bank with Tracker',
            
            // Navigation
            'nav.how': 'How it works',
            'nav.models': 'Models',
            'nav.reviews': 'Reviews',
            'nav.faq': 'FAQ',
            
            // Hero
            'hero.title': 'Peace of mind for parents.<br>Magic for kids.',
            'hero.subtitle': 'A discreetly hidden tracker ensures your child\'s most precious treasures never get lost.',
            
            // CTA
            'cta.create': 'Create your Vaulti now',
            'cta.video': 'Watch video',
            'cta.compare': 'Compare models',
            'cta.buy': 'Add to cart',
            'cta.quick': 'Create now!',
            
            // Trust badges
            'trust.rating': 'Rated by 87 customers',
            'trust.sold': 'Kids with Vaulti',
            'trust.returns': 'Return guarantee',
            
            // How it works
            'how.title': 'Peace of mind in 3 simple steps',
            'how.step1.title': 'Design',
            'how.step1.desc': 'Choose model, color and add your child\'s name engraving.',
            'how.step2.title': 'Add AirTag',
            'how.step2.desc': 'Insert Apple AirTag or Samsung SmartTag into the discrete compartment.',
            'how.step3.title': 'Relax!',
            'how.step3.desc': 'Track your child\'s treasures in the Find My / SmartThings app.',
            
            // Configurator
            'config.title': 'Create your Vaulti',
            'config.variant': 'Model',
            'config.variant_color': 'Vaulti Color (€39.95)',
            'config.variant_wood': 'Vaulti Wood (€49.95)',
            'config.color': 'Color',
            'config.engrave': 'Engraving (name)',
            'config.engrave_placeholder': 'e.g. Anna',
            'config.price': 'Price:',
            'config.share': 'Share configuration',
            
            // Models
            'models.title': 'Model comparison',
            'models.feature': 'Feature',
            'models.color': 'Color',
            'models.wood': 'Wood',
            'models.material': 'Material',
            'models.colors': 'Available colors',
            'models.slot': 'AirTag slot',
            'models.engrave': 'Name engraving',
            'models.price': 'Price',
            
            // Video
            'video.title': 'Discover Vaulti in action',
            'video.fallback': 'Your browser doesn\'t support HTML5 video.',
            
            // Reviews
            'reviews.title': 'What parents say',
            
            // Guarantee
            'guarantee.title': 'Satisfaction guarantee',
            'guarantee.returns_title': '30-day returns',
            'guarantee.returns_desc': 'Return without questions if Vaulti doesn\'t suit you.',
            'guarantee.replace_title': 'Free replacement',
            'guarantee.replace_desc': 'In case of damage, we replace for free.',
            'guarantee.warranty_title': '12 months',
            'guarantee.warranty_desc': 'Full manufacturer warranty on all defects.',
            
            // FAQ
            'faq.title': 'Frequently asked questions',
            'faq.q1': 'Which tracker fits Vaulti?',
            'faq.a1': '<p>Vaulti is compatible with Apple AirTag and Samsung SmartTag. The slot has optimal dimensions for both devices.</p>',
            'faq.q2': 'Does my child need to know about the tracker?',
            'faq.a2': '<p>No, the AirTag compartment is completely hidden and inaccessible to the child. It\'s your private safety cushion.</p>',
            'faq.q3': 'What materials is Vaulti made of?',
            'faq.a3': '<p><strong>Color:</strong> PETG/ASA (durable, colorful). <strong>Wood:</strong> Natural plywood + TPU (eco-friendly).</p>',
            'faq.q4': 'What are the dimensions of Vaulti?',
            'faq.a4': '<p>18 × 12 × 12 cm (H × W × D). Perfect for storing on a shelf or in a drawer.</p>',
            'faq.q5': 'How long does delivery take?',
            'faq.a5': '<p>Standard 2-4 working days in the EU. Express shipping available (+€2).</p>',
            'faq.q6': 'Can I return Vaulti?',
            'faq.a6': '<p>Yes! You have 30 days for unconditional return. We cover return costs.</p>',
            'faq.q7': 'Does the piggy bank have a warranty?',
            'faq.a7': '<p>Yes, 12 months manufacturer warranty on all defects. In case of problems, we replace for free.</p>',
            'faq.q8': 'Is personalization possible?',
            'faq.a8': '<p>Of course! Laser engraving of a name (up to 20 characters) is free and included in the price.</p>',
            
            // Newsletter
            'newsletter.title': 'Stay up to date',
            'newsletter.subtitle': 'Subscribe to our newsletter and receive -10% discount on your first order.',
            'newsletter.placeholder': 'your@email.com',
            'newsletter.submit': 'Subscribe',
            
            // Footer
            'footer.tagline': 'Personalized 3D piggy bank with tracker.',
            'footer.links': 'Links',
            'footer.contact': 'Contact',
            'footer.follow': 'Follow us',
        }
    },
    
    // Initialize i18n system
    init() {
        // Detect browser language
        const browserLang = navigator.language.substring(0, 2);
        
        // Check localStorage for saved preference
        const savedLang = localStorage.getItem('vaulti_lang');
        
        // Set language (priority: saved > browser > default)
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else if (this.translations[browserLang]) {
            this.currentLang = browserLang;
        }
        
        // Apply translations
        this.applyTranslations();
        
        // Update language toggle
        this.updateLangToggle();
        
        // Set up language switcher
        this.setupLanguageSwitcher();
    },
    
    // Get translation by key
    get(key) {
        return this.translations[this.currentLang][key] || key;
    },
    
    // Set language
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('vaulti_lang', lang);
            this.applyTranslations();
            this.updateLangToggle();
            
            // Update document language
            document.documentElement.lang = lang;
        }
    },
    
    // Apply translations to all elements with data-i18n attribute
    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.get(key);
            
            if (translation) {
                el.innerHTML = translation;
            }
        });
        
        // Apply placeholder translations
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = this.get(key);
            
            if (translation) {
                el.placeholder = translation;
            }
        });
        
        // Update page title
        document.title = this.get('meta.title');
    },
    
    // Update language toggle display
    updateLangToggle() {
        const currentLangEl = document.getElementById('current-lang');
        if (currentLangEl) {
            currentLangEl.textContent = this.currentLang.toUpperCase();
        }
    },
    
    // Setup language switcher
    setupLanguageSwitcher() {
        const langToggle = document.getElementById('lang-toggle');
        const langDropdown = document.querySelector('.lang-dropdown');
        
        if (langToggle && langDropdown) {
            // Toggle dropdown on click
            langToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const isVisible = langDropdown.style.display === 'block';
                langDropdown.style.display = isVisible ? 'none' : 'block';
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                langDropdown.style.display = 'none';
            });
            
            // Language selection
            langDropdown.querySelectorAll('[data-lang]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const lang = link.getAttribute('data-lang');
                    this.setLanguage(lang);
                    langDropdown.style.display = 'none';
                });
            });
        }
    },
    
    // Format price according to current language
    formatPrice(price) {
        const formatters = {
            pl: new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'EUR' }),
            nl: new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }),
            en: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' })
        };
        
        return formatters[this.currentLang].format(price);
    }
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}
