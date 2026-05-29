// Edunity Lab Recruitment Page Interactivity

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger animation
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // 2. Copy Email to Clipboard
    const btnCopyEmail = document.getElementById('btnCopyEmail');
    const targetEmail = document.getElementById('targetEmail');
    const copyLabel = document.getElementById('copyLabel');

    if (btnCopyEmail && targetEmail && copyLabel) {
        btnCopyEmail.addEventListener('click', () => {
            const email = targetEmail.textContent.trim();
            
            navigator.clipboard.writeText(email).then(() => {
                // Success feedback
                btnCopyEmail.classList.add('copied');
                copyLabel.textContent = '복사 완료!';
                
                // Revert after 2 seconds
                setTimeout(() => {
                    btnCopyEmail.classList.remove('copied');
                    copyLabel.textContent = '이메일 주소 복사';
                }, 2000);
            }).catch(err => {
                console.error('이메일 주소 복사에 실패했습니다: ', err);
                
                // Fallback for older browsers or permission issues
                const tempInput = document.createElement('input');
                tempInput.value = email;
                document.body.appendChild(tempInput);
                tempInput.select();
                try {
                    document.execCommand('copy');
                    btnCopyEmail.classList.add('copied');
                    copyLabel.textContent = '복사 완료!';
                    setTimeout(() => {
                        btnCopyEmail.classList.remove('copied');
                        copyLabel.textContent = '이메일 주소 복사';
                    }, 2000);
                } catch (e) {
                    alert('이메일 주소를 복사할 수 없습니다. 직접 복사해주세요: ' + email);
                }
                document.body.removeChild(tempInput);
            });
        });
    }

    // 3. Header opacity styling on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '0.75rem 0';
                navbar.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.05)';
            } else {
                navbar.style.padding = '1.25rem 0';
                navbar.style.boxShadow = 'none';
            }
        });
    }
});
