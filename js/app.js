/**
 * Vaulti.nl - Main Application
 * Handles configurator, sticky CTA, newsletter, and interactions
 */

class VaultiApp {
    constructor() {
        this.currentVariant = config.settings.defaultVariant;
        this.currentColor = config.settings.defaultColor;
        this.engraveName = '';
        
        this.canvas = null;
        this.ctx = null;
        
        this.init();
    }
    
    init() {
        // Wait for DOM and i18n to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        // Initialize canvas
        this.initCanvas();
        
        // Setup configurator controls
        this.setupConfigurator();
        
        // Setup sticky CTA
        this.setupStickyCta();
        
        // Setup newsletter form
        this.setupNewsletter();
        
        // Setup share button
        this.setupShare();
        
        // Initial preview render
        this.updatePreview();
        this.updatePrice();
    }
    
    // Initialize canvas for 3D preview
    initCanvas() {
        this.canvas = document.getElementById('preview-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
    }
    
    // Setup configurator controls
    setupConfigurator() {
        // Variant selector
        const variantSelect = document.getElementById('variant');
        if (variantSelect) {
            variantSelect.addEventListener('change', (e) => {
                this.currentVariant = e.target.value;
                this.updateColorSwatches();
                this.updatePreview();
                this.updatePrice();
            });
        }
        
        // Color swatches
        document.querySelectorAll('.swatch').forEach(swatch => {
            swatch.addEventListener('click', (e) => {
                const color = e.target.getAttribute('data-color');
                this.selectColor(color);
            });
        });
        
        // Engrave input
        const engraveInput = document.getElementById('engrave');
        if (engraveInput) {
            engraveInput.addEventListener('input', (e) => {
                this.engraveName = e.target.value.substring(0, config.settings.maxEngraveLength);
                this.updatePreview();
            });
        }
        
        // Buy button
        const buyButton = document.getElementById('buy-config');
        if (buyButton) {
            buyButton.addEventListener('click', () => this.addToCart());
        }
    }
    
    // Select color
    selectColor(color) {
        const product = config.products[this.currentVariant];
        
        // Check if color is available for this variant
        if (!product.colors.includes(color)) {
            return;
        }
        
        this.currentColor = color;
        
        // Update active state
        document.querySelectorAll('.swatch').forEach(s => {
            s.classList.remove('active');
        });
        
        const selectedSwatch = document.querySelector(`[data-color="${color}"]`);
        if (selectedSwatch) {
            selectedSwatch.classList.add('active');
        }
        
        this.updatePreview();
    }
    
    // Update color swatches based on variant
    updateColorSwatches() {
        const product = config.products[this.currentVariant];
        
        document.querySelectorAll('.swatch').forEach(swatch => {
            const color = swatch.getAttribute('data-color');
            const isAvailable = product.colors.includes(color);
            
            swatch.style.display = isAvailable ? 'block' : 'none';
            
            if (isAvailable && !product.colors.includes(this.currentColor)) {
                // Auto-select first available color
                this.selectColor(product.colors[0]);
            }
        });
    }
    
    // Update canvas preview
    updatePreview() {
        if (!this.ctx || !this.canvas) return;
        
        const ctx = this.ctx;
        const width = this.canvas.width;
        const height = this.canvas.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Background
        ctx.fillStyle = '#1c1f26';
        ctx.fillRect(0, 0, width, height);
        
        // Get current color
        const colorConfig = config.colors[this.currentColor];
        const colorHex = colorConfig ? colorConfig.hex : '#ffc0cb';
        
        // Draw piggy bank shape (simplified)
        ctx.save();
        ctx.translate(width / 2, height / 2);
        
        // Body (main cylinder)
        ctx.fillStyle = colorHex;
        ctx.beginPath();
        ctx.ellipse(0, 0, 150, 120, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.ellipse(0, 10, 150, 120, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Coin slot
        ctx.fillStyle = '#0d1117';
        ctx.fillRect(-40, -80, 80, 10);
        
        // Feet (4 small circles)
        ctx.fillStyle = this.darkenColor(colorHex, 20);
        [-60, -20, 20, 60].forEach((x, i) => {
            ctx.beginPath();
            ctx.arc(x, 80, 15, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Engraving text
        if (this.engraveName) {
            ctx.fillStyle = '#0d1117';
            ctx.font = 'bold 32px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.engraveName, 0, 20);
        }
        
        // Variant badge
        ctx.restore();
        ctx.fillStyle = 'rgba(0, 217, 255, 0.9)';
        ctx.fillRect(10, 10, 120, 40);
        ctx.fillStyle = '#0d1117';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(config.products[this.currentVariant].name, 20, 30);
    }
    
    // Darken color helper
    darkenColor(hex, percent) {
        const num = parseInt(hex.slice(1), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255))
            .toString(16).slice(1);
    }
    
    // Update price display
    updatePrice() {
        const product = config.products[this.currentVariant];
        const priceEl = document.getElementById('price');
        
        if (priceEl && product) {
            priceEl.textContent = i18n.formatPrice(product.price);
        }
    }
    
    // Setup sticky CTA
    setupStickyCta() {
        const stickyCta = document.getElementById('sticky-cta');
        if (!stickyCta) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > config.settings.stickyCtaOffset) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        });
    }
    
    // Setup newsletter form
    setupNewsletter() {
        const form = document.getElementById('newsletter-form');
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email) return;
            
            try {
                // Simulate API call (replace with actual endpoint)
                console.log('Newsletter signup:', email);
                
                // Show success message
                alert(i18n.get('newsletter.title') + ' - Dziękujemy! / Bedankt! / Thank you!');
                
                // Clear form
                emailInput.value = '';
            } catch (error) {
                console.error('Newsletter signup error:', error);
                alert('Error signing up. Please try again.');
            }
        });
    }
    
    // Setup share configuration
    setupShare() {
        const shareButton = document.getElementById('share-config');
        if (!shareButton) return;
        
        shareButton.addEventListener('click', () => {
            this.shareConfiguration();
        });
    }
    
    // Share configuration
    shareConfiguration() {
        const params = new URLSearchParams({
            variant: this.currentVariant,
            color: this.currentColor,
            engrave: this.engraveName
        });
        
        const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
        
        // Copy to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                alert('Link skopiowany! / Link gekopieerd! / Link copied!');
            }).catch(err => {
                console.error('Failed to copy:', err);
                this.showShareUrl(url);
            });
        } else {
            this.showShareUrl(url);
        }
    }
    
    // Show share URL (fallback)
    showShareUrl(url) {
        const urlText = prompt('Skopiuj link / Kopieer link / Copy link:', url);
    }
    
    // Add to cart
    addToCart() {
        const product = config.products[this.currentVariant];
        const cartUrl = config.settings.shop.cartUrl;
        
        // Build cart parameters
        const params = new URLSearchParams({
            product: product.id,
            color: this.currentColor,
            engrave: this.engraveName,
            price: product.price
        });
        
        // Redirect to shop (or open modal)
        console.log('Add to cart:', {
            product: product.name,
            color: this.currentColor,
            engrave: this.engraveName,
            price: product.price
        });
        
        alert(`${product.name} dodano do koszyka! / toegevoegd aan winkelwagen! / added to cart!`);
        
        // In production, redirect to actual shop
        // window.location.href = `${cartUrl}?${params.toString()}`;
    }
    
    // Load configuration from URL
    loadFromUrl() {
        const params = new URLSearchParams(window.location.search);
        
        if (params.has('variant')) {
            this.currentVariant = params.get('variant');
            const variantSelect = document.getElementById('variant');
            if (variantSelect) {
                variantSelect.value = this.currentVariant;
            }
        }
        
        if (params.has('color')) {
            this.currentColor = params.get('color');
            this.selectColor(this.currentColor);
        }
        
        if (params.has('engrave')) {
            this.engraveName = params.get('engrave');
            const engraveInput = document.getElementById('engrave');
            if (engraveInput) {
                engraveInput.value = this.engraveName;
            }
        }
        
        this.updatePreview();
        this.updatePrice();
    }
}

// Initialize app when ready
let app;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new VaultiApp();
        app.loadFromUrl();
    });
} else {
    app = new VaultiApp();
    app.loadFromUrl();
}
