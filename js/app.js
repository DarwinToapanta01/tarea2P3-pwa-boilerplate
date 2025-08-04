// Aplicación PWA Boilerplate
class PWAApp {
  constructor() {
    this.deferredPrompt = null;
    this.init();
  }

  init() {
    this.registerServiceWorker();
    this.setupInstallButton();
    this.setupEventListeners();
    console.log('PWA Boilerplate inicializada');
  }

  // Registrar Service Worker
  async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registrado:', registration);

        // Escuchar actualizaciones
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (
              newWorker.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              this.showNotification(
                'Nueva versión disponible. Recarga la página.'
              );
            }
          });
        });
      } catch (error) {
        console.error('Error al registrar Service Worker:', error);
      }
    }
  }

  // Configurar botón de instalación
  setupInstallButton() {
    const installBtn = document.getElementById('install-btn');

    // Escuchar el evento beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      installBtn.style.display = 'block';
    });

    // Manejar clic en el botón de instalación
    installBtn.addEventListener('click', () => {
      this.installApp();
    });

    // Ocultar botón si ya está instalada
    window.addEventListener('appinstalled', () => {
      installBtn.style.display = 'none';
      this.showNotification('¡PWA instalada correctamente!');
    });
  }

  // Instalar la aplicación
  async installApp() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      const { outcome } = await this.deferredPrompt.userChoice;

      if (outcome === 'accepted') {
        console.log('Usuario aceptó la instalación');
      } else {
        console.log('Usuario rechazó la instalación');
      }

      this.deferredPrompt = null;
    }
  }

  // Configurar event listeners
  setupEventListeners() {
    // Detectar cuando la app está online/offline
    window.addEventListener('online', () => {
      this.showNotification('Conexión restaurada');
    });

    window.addEventListener('offline', () => {
      this.showNotification('Sin conexión - Modo offline');
    });

    // Detectar cambios de orientación
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.handleOrientationChange();
      }, 100);
    });
  }

  // Manejar cambio de orientación
  handleOrientationChange() {
    // Actualizar layout si es necesario
    console.log('Orientación cambiada');
  }

  // Mostrar notificación
  showNotification(message, duration = 3000) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Agregar al DOM
    document.body.appendChild(notification);

    // Mostrar con animación
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);

    // Ocultar después del tiempo especificado
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, duration);
  }

  // Utilidades para desarrollo
  static getDeviceInfo() {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      screen: {
        width: screen.width,
        height: screen.height,
        orientation: screen.orientation?.angle || 0
      }
    };
  }

  static logDeviceInfo() {
    console.table(PWAApp.getDeviceInfo());
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.app = new PWAApp();

  // Log información del dispositivo en modo desarrollo
  if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    PWAApp.logDeviceInfo();
  }
});
