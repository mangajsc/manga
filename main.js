
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        const body = document.body;
        
        if (localStorage.getItem('theme') === 'light' || 
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            body.classList.add('light-mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
        }
        
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline';
                localStorage.setItem('theme', 'light');
            } else {
                sunIcon.style.display = 'inline';
                moonIcon.style.display = 'none';
                localStorage.setItem('theme', 'dark');
            }
        });
        
        const thumbnails = document.querySelectorAll('.stui-vodlist__thumb');
        thumbnails.forEach(thumb => {
            thumb.addEventListener('error', function() {
                this.style.backgroundImage = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'><rect width=\'100\' height=\'100\' fill=\'%232a2d45\'/><text x=\'50\' y=\'50\' font-family=\'Arial\' font-size=\'12\' fill=\'%23a0a0c0\' text-anchor=\'middle\' dominant-baseline=\'middle\'>Image loading failed</text></svg>")';
                this.classList.add('thumb-error');
            });
        });
    });
	
