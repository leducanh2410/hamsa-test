/**
 * Device Detector - Responsive Redirect System
 * Tự động chuyển hướng giữa desktop và mobile version
 */

class DeviceDetector {
    constructor() {
        this.desktopUrl = 'index.html';
        this.mobileUrl = 'indexSp.html';
        this.init();
    }

    init() {
        // Chạy kiểm tra ngay khi load
        this.checkDevice();
        
        // Lắng nghe sự kiện resize và orientation change
        window.addEventListener('resize', () => this.checkDevice());
        window.addEventListener('orientationchange', () => this.checkDevice());
        
        // Lắng nghe sự kiện visibility change (khi chuyển tab)
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.checkDevice();
            }
        });
    }

    checkDevice() {
        const isMobile = this.isMobileDevice();
        const currentUrl = window.location.pathname;
        const isOnMobilePage = currentUrl.includes('indexSp');
        
        if (isMobile && !isOnMobilePage) {
            // Nếu là mobile và đang ở trang desktop, chuyển đến mobile
            this.redirectToMobile();
        } else if (!isMobile && isOnMobilePage) {
            // Nếu là desktop và đang ở trang mobile, chuyển về desktop
            this.redirectToDesktop();
        }
    }

    isMobileDevice() {
        // Chỉ kiểm tra kích thước màn hình
        const screenWidth = window.screen.width || window.innerWidth;
        
        // Mobile: màn hình <= 768px
        return screenWidth <= 768;
    }

    redirectToMobile() {
        console.log('Redirecting to mobile version...');
        window.location.href = this.mobileUrl;
    }

    redirectToDesktop() {
        console.log('Redirecting to desktop version...');
        window.location.href = this.desktopUrl;
    }

    // Phương thức để kiểm tra thủ công
    forceCheck() {
        this.checkDevice();
    }

    // Phương thức để lấy thông tin thiết bị
    getDeviceInfo() {
        return {
            isMobile: this.isMobileDevice(),
            screenWidth: window.screen.width || window.innerWidth,
            screenHeight: window.screen.height || window.innerHeight,
            breakpoint: (window.screen.width || window.innerWidth) <= 768 ? 'mobile' : 'desktop'
        };
    }
}

// Khởi tạo Device Detector
const deviceDetector = new DeviceDetector();

// Export để sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DeviceDetector;
}

// Log thông tin thiết bị (chỉ trong development)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('Device Info:', deviceDetector.getDeviceInfo());
}
