function openModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('appointmentModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Qualification kartları için açılır-kapanır özelliği
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.qualification-card');
    
    cards.forEach(card => {
        const header = card.querySelector('.card-header');
        const content = card.querySelector('.card-content');
        const toggleBtn = card.querySelector('.toggle-btn i');
        
        // Başlangıçta içeriği tamamen gizle
        content.style.maxHeight = "0px";
        content.style.padding = "0";
        content.style.opacity = "0";
        toggleBtn.style.transform = 'rotate(0deg)';
        
        header.addEventListener('click', () => {
            const isCollapsed = content.style.maxHeight === "0px";
            
            // İçeriği aç/kapat
            if (isCollapsed) {
                content.style.padding = "1.2rem";
                content.style.opacity = "1";
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0px";
                content.style.padding = "0";
                content.style.opacity = "0";
            }
            
            // Butonu döndür
            toggleBtn.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';
            
            // Başlık rengini değiştir
            header.style.opacity = isCollapsed ? '1' : '0.9';
        });
    });
});

// Açılır-kapanır özelliği için JavaScript
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card-header').forEach(header => {
        header.addEventListener('click', function() {
            const card = this.closest('.qualification-card');
            const content = card.querySelector('.card-content');
            const toggleBtn = this.querySelector('.toggle-btn i');
            
            // İçeriği aç/kapat
            content.classList.toggle('collapsed');
            
            // Buton ikonunu döndür
            toggleBtn.style.transform = content.classList.contains('collapsed') 
                ? 'rotate(180deg)' 
                : 'rotate(0deg)';
        });
    });
});

// Scroll durumunda navbar değişimi
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // 100px scroll sonrası değişim
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// İletişim bölümünü ekran boyutuna göre güncelle
function updateContactSection() {
    const contactSection = document.querySelector('.contact-section');
    const contactItems = document.querySelectorAll('.contact-item');
    const sectionTitle = document.querySelector('.section-title');
    const contactLink = document.querySelector('a[href="#iletisim"]');
    
    if (window.innerWidth <= 768) {
        // Mobil görünüm
        // Navbar'daki iletişim linkini güncelle
        if (contactLink) {
            const icon = contactLink.querySelector('i');
            const text = contactLink.lastChild;
            icon.className = 'fas fa-clock';
            text.textContent = 'Çalışma Saatleri';
        }
        
        // İletişim bölümünü güncelle
        if (contactItems) {
            contactItems.forEach(item => {
                const icon = item.querySelector('.contact-icon i');
                if (icon && icon.classList.contains('fa-clock')) {
                    item.style.display = 'block';
                    item.style.margin = '1rem auto';
                    item.style.maxWidth = '100%';
                    item.style.padding = '1rem';
                } else {
                    item.style.display = 'none';
                }
            });
        }
        if (sectionTitle) {
            sectionTitle.textContent = 'Çalışma Saatleri';
        }
    } else {
        // Masaüstü görünüm
        // Navbar'daki iletişim linkini güncelle
        if (contactLink) {
            const icon = contactLink.querySelector('i');
            const text = contactLink.lastChild;
            icon.className = 'fas fa-envelope';
            text.textContent = 'İletişim';
        }
        
        // İletişim bölümünü güncelle
        if (contactItems) {
            contactItems.forEach(item => {
                item.style.display = 'block';
                item.style.margin = '0';
                item.style.maxWidth = 'none';
                item.style.padding = '2.5rem 2rem';
            });
        }
        if (sectionTitle) {
            sectionTitle.textContent = 'İletişim';
        }
    }
}

// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde çalıştır
document.addEventListener('DOMContentLoaded', function() {
    updateContactSection();
    window.addEventListener('resize', updateContactSection);
});

// Mobil Menü İşlevselliği
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = mobileMenuBtn.querySelector('.fa-bars');
    const closeIcon = mobileMenuBtn.querySelector('.fa-times');
    
    // Sayfa yüklendiğinde mobil kontrol
    if (window.innerWidth <= 768) {
        const contactLink = document.querySelector('a[href="#iletisim"]');
        if (contactLink) {
            const icon = contactLink.querySelector('i');
            const text = contactLink.lastChild;
            icon.className = 'fas fa-clock';
            text.textContent = 'Çalışma Saatleri';
        }
    }
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        
        // Menü açıkken ikonları güncelle
        if (navMenu.classList.contains('active')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            closeIcon.style.color = 'white';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            menuIcon.style.color = 'var(--primary-color)';
        }
    });

    // Menü linklerine tıklandığında menüyü kapat
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            menuIcon.style.color = 'var(--primary-color)';
        });
    });

    // Sayfa dışına tıklandığında menüyü kapat
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            menuIcon.style.color = 'var(--primary-color)';
        }
    });
});

// Scroll olayında navbar'ın görünümünü değiştir
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Sayfa yüklendiğinde smooth scroll'u etkinleştir
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobil görünüm için sertifika, workshop ve eğitim düzeni
document.addEventListener('DOMContentLoaded', function() {
    const certificateList = document.querySelector('.certificate-list');
    const workshopList = document.querySelector('.workshop-list');
    const educationList = document.querySelector('.education-list');
    
    function updateLayout() {
        if (window.innerWidth <= 768) {
            // Mobil görünüm
            if (certificateList) {
                certificateList.style.display = 'grid';
                certificateList.style.gridTemplateColumns = 'repeat(2, 1fr)';
                certificateList.style.gap = '0.8rem';

                // Sertifika kartlarının içeriğinin tam görünmesi için
                const certificateItems = certificateList.querySelectorAll('.certificate-item');
                certificateItems.forEach(item => {
                    const details = item.querySelector('.certificate-details');
                    if (details) {
                        details.style.whiteSpace = 'normal';
                        details.style.overflow = 'visible';
                        details.style.textOverflow = 'unset';
                        details.style.display = 'flex';
                        details.style.flexDirection = 'column';
                        details.style.gap = '0';
                        details.style.height = 'auto';
                    }
                    const heading = details?.querySelector('h4');
                    if (heading) {
                        heading.style.whiteSpace = 'normal';
                        heading.style.overflow = 'visible';
                        heading.style.textOverflow = 'unset';
                        heading.style.height = 'auto';
                        heading.style.marginBottom = '0.2rem';
                        heading.style.wordBreak = 'break-word';
                    }
                    const duration = details?.querySelector('.duration');
                    if (duration) {
                        duration.style.fontSize = '0.8rem';
                        duration.style.marginTop = '0';
                        duration.style.color = 'var(--secondary-color)';
                    }
                });
            }
            
            if (workshopList) {
                workshopList.style.display = 'grid';
                workshopList.style.gridTemplateColumns = 'repeat(2, 1fr)';
                workshopList.style.gap = '0.8rem';

                // Workshop kartlarının içeriğinin tam görünmesi için
                const workshopItems = workshopList.querySelectorAll('.workshop-item');
                workshopItems.forEach(item => {
                    const details = item.querySelector('.workshop-details');
                    if (details) {
                        details.style.whiteSpace = 'normal';
                        details.style.overflow = 'visible';
                        details.style.textOverflow = 'unset';
                        details.style.display = 'flex';
                        details.style.flexDirection = 'column';
                        details.style.gap = '0';
                        details.style.height = 'auto';
                    }
                    const heading = details?.querySelector('h4');
                    if (heading) {
                        heading.style.whiteSpace = 'normal';
                        heading.style.overflow = 'visible';
                        heading.style.textOverflow = 'unset';
                        heading.style.height = 'auto';
                        heading.style.marginBottom = '0.2rem';
                        heading.style.wordBreak = 'break-word';
                    }
                    const duration = details?.querySelector('.duration');
                    if (duration) {
                        duration.style.fontSize = '0.8rem';
                        duration.style.marginTop = '0';
                        duration.style.color = 'var(--secondary-color)';
                    }
                });
            }

            if (educationList) {
                educationList.style.display = 'grid';
                educationList.style.gridTemplateColumns = 'repeat(2, 1fr)';
                educationList.style.gap = '1.2rem';
                educationList.style.paddingLeft = '0';

                // Eğitim kartlarının mobil stillerini ayarla
                const educationItems = educationList.querySelectorAll('.education-item');
                educationItems.forEach(item => {
                    item.style.padding = '0.8rem';
                    item.style.backgroundColor = 'white';
                    item.style.borderRadius = '8px';
                    item.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                });

                // Yıl ve detayları daha kompakt hale getir
                const years = educationList.querySelectorAll('.education-year');
                const details = educationList.querySelectorAll('.education-details');
                years.forEach(year => {
                    year.style.fontSize = '0.8rem';
                    year.style.marginBottom = '0.3rem';
                });
                details.forEach(detail => {
                    detail.style.gap = '0.2rem';
                });
            }
        } else {
            // Masaüstü görünüm
            if (certificateList) {
                certificateList.style.display = 'grid';
                certificateList.style.gridTemplateColumns = 'repeat(3, 1fr)';
                certificateList.style.gap = '1.2rem';

                // Masaüstü görünümünde sertifika kartlarını düzenle
                const certificateItems = certificateList.querySelectorAll('.certificate-item');
                certificateItems.forEach(item => {
                    item.style.backgroundColor = 'white';
                    item.style.borderRadius = '10px';
                    item.style.padding = '1rem';
                    item.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                    item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                    item.style.height = '100%';
                    item.style.minHeight = '80px';
                    
                    const details = item.querySelector('.certificate-details');
                    if (details) {
                        details.style.whiteSpace = 'normal';
                        details.style.overflow = 'visible';
                        details.style.textOverflow = 'unset';
                        details.style.paddingRight = '1.5rem';
                        details.style.display = 'flex';
                        details.style.flexDirection = 'column';
                        details.style.gap = '0';
                        details.style.height = 'auto';
                    }
                    const heading = details?.querySelector('h4');
                    if (heading) {
                        heading.style.fontSize = '0.95rem';
                        heading.style.marginBottom = '0.2rem';
                        heading.style.color = 'var(--primary-color)';
                        heading.style.lineHeight = '1.3';
                        heading.style.whiteSpace = 'normal';
                        heading.style.overflow = 'visible';
                        heading.style.textOverflow = 'unset';
                        heading.style.height = 'auto';
                        heading.style.wordBreak = 'break-word';
                        heading.style.minHeight = 'unset';
                    }
                    const duration = details?.querySelector('.duration');
                    if (duration) {
                        duration.style.fontSize = '0.8rem';
                        duration.style.marginTop = '0';
                        duration.style.color = 'var(--secondary-color)';
                    }
                });
            }
            
            if (workshopList) {
                workshopList.style.display = 'grid';
                workshopList.style.gridTemplateColumns = 'repeat(3, 1fr)';
                workshopList.style.gap = '1.2rem';

                // Masaüstü görünümünde workshop kartlarını düzenle
                const workshopItems = workshopList.querySelectorAll('.workshop-item');
                workshopItems.forEach(item => {
                    item.style.backgroundColor = 'white';
                    item.style.borderRadius = '10px';
                    item.style.padding = '1rem';
                    item.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                    item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                    item.style.height = '100%';
                    item.style.minHeight = '80px';
                    
                    const details = item.querySelector('.workshop-details');
                    if (details) {
                        details.style.whiteSpace = 'normal';
                        details.style.overflow = 'visible';
                        details.style.textOverflow = 'unset';
                        details.style.paddingRight = '1.5rem';
                        details.style.display = 'flex';
                        details.style.flexDirection = 'column';
                        details.style.gap = '0';
                        details.style.height = 'auto';
                    }
                    const heading = details?.querySelector('h4');
                    if (heading) {
                        heading.style.fontSize = '0.95rem';
                        heading.style.marginBottom = '0.2rem';
                        heading.style.color = 'var(--primary-color)';
                        heading.style.lineHeight = '1.3';
                        heading.style.whiteSpace = 'normal';
                        heading.style.overflow = 'visible';
                        heading.style.textOverflow = 'unset';
                        heading.style.height = 'auto';
                        heading.style.wordBreak = 'break-word';
                        heading.style.minHeight = 'unset';
                    }
                    const duration = details?.querySelector('.duration');
                    if (duration) {
                        duration.style.fontSize = '0.8rem';
                        duration.style.marginTop = '0';
                        duration.style.color = 'var(--secondary-color)';
                    }
                });
            }

            if (educationList) {
                educationList.style.display = 'grid';
                educationList.style.gridTemplateColumns = 'repeat(2, 1fr)';
                educationList.style.gap = '1.2rem';
                educationList.style.paddingLeft = '0';

                // Masaüstü görünümünde eğitim kartlarını düzenle
                const educationItems = educationList.querySelectorAll('.education-item');
                educationItems.forEach(item => {
                    item.style.backgroundColor = 'white';
                    item.style.borderRadius = '10px';
                    item.style.padding = '1.5rem';
                    item.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                    item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                    item.style.height = '100%';
                });

                // Yıl ve detayları düzenle
                const years = educationList.querySelectorAll('.education-year');
                const details = educationList.querySelectorAll('.education-details');
                years.forEach(year => {
                    year.style.fontSize = '0.9rem';
                    year.style.color = 'var(--secondary-color)';
                    year.style.marginBottom = '0.5rem';
                });
                details.forEach(detail => {
                    detail.style.gap = '0.4rem';
                });
            }
        }
    }

    // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde düzeni güncelle
    window.addEventListener('resize', updateLayout);
    updateLayout();
});

// SSS Modal İşlevselliği
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('sssModal');
    const sssLink = document.querySelector('a[href="#sss"]');
    const closeBtn = document.querySelector('.close-modal');
    const faqItems = document.querySelectorAll('.faq-item');

    // Modal'ı aç
    sssLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Modal'ı kapat
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Modal dışına tıklandığında kapat
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // SSS öğelerini aç/kapat
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Diğer tüm açık öğeleri kapat
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                }
            });

            // Tıklanan öğeyi aç/kapat
            item.classList.toggle('active');
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
});
