/**
 * Vaulti.nl - Configuration Module
 * Contains product data, colors, settings
 */

const config = {
    // Product variants
    products: {
        color: {
            id: 'color',
            name: 'Vaulti Color',
            price: 39.95,
            currency: 'EUR',
            colors: ['pink', 'blue', 'green', 'purple'],
            material: 'PETG/ASA',
            description: 'Durable, colorful 3D-printed piggy bank'
        },
        wood: {
            id: 'wood',
            name: 'Vaulti Wood',
            price: 49.95,
            currency: 'EUR',
            colors: ['natural'],
            material: 'Plywood + TPU',
            description: 'Eco-friendly wooden piggy bank'
        }
    },
    
    // Color definitions
    colors: {
        pink: {
            label: 'Różowy / Roze / Pink',
            hex: '#ffc0cb',
            code: 'PINK'
        },
        blue: {
            label: 'Niebieski / Blauw / Blue',
            hex: '#add8e6',
            code: 'BLUE'
        },
        green: {
            label: 'Zielony / Groen / Green',
            hex: '#98fb98',
            code: 'GREEN'
        },
        purple: {
            label: 'Fioletowy / Paars / Purple',
            hex: '#dda0dd',
            code: 'PURPLE'
        },
        natural: {
            label: 'Naturalna / Natuurlijk / Natural',
            hex: '#d2b48c',
            code: 'NATURAL'
        }
    },
    
    // Application settings
    settings: {
        // Sticky CTA
        stickyCtaOffset: 300,
        
        // Configurator
        maxEngraveLength: 20,
        defaultVariant: 'color',
        defaultColor: 'pink',
        
        // Shop integration
        shop: {
            cartUrl: 'https://shop.vaulti.nl/cart',
            checkoutUrl: 'https://shop.vaulti.nl/checkout',
            currency: 'EUR'
        },
        
        // API endpoints
        api: {
            newsletter: '/api/newsletter',
            contact: '/api/contact',
            order: '/api/order'
        },
        
        // Social media
        social: {
            instagram: 'https://instagram.com/vaulti',
            facebook: 'https://facebook.com/vaulti',
            tiktok: 'https://tiktok.com/@vaulti'
        },
        
        // Contact
        contact: {
            email: 'info@vaulti.nl',
            phone: '+31 6 12 34 56 78'
        }
    }
};
