/* Bastion portfolio — vanilla JS: theme, nav, terminal typing, reveal-on-scroll, mailto form. */
(function () {
    'use strict';
    document.documentElement.classList.add('js');

    /* ---------- theme (dark default, remembered) ---------- */
    var themeBtn = document.getElementById('themeBtn');
    try {
        if (localStorage.getItem('bastion-theme') === 'light') {
            document.body.classList.add('light-mode');
        }
    } catch (e) { /* private mode — ignore */ }
    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            try {
                localStorage.setItem('bastion-theme',
                    document.body.classList.contains('light-mode') ? 'light' : 'dark');
            } catch (e) { /* ignore */ }
        });
    }

    /* ---------- mobile nav ---------- */
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () { navLinks.classList.remove('open'); });
        });
    }

    /* ---------- terminal typing effect ---------- */
    var typedEl = document.getElementById('typedCmd');
    var commands = [
        'nmap -sV --top-ports 1000 target',
        'curl -s https://api.cache.local/health | jq',
        'tail -f /var/log/soc/alerts.log',
        'python3 garuda1.py --triage --auto'
    ];
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typedEl && !reduceMotion) {
        var ci = 0, ch = 0, deleting = false;
        (function tick() {
            var cmd = commands[ci];
            if (!deleting) {
                ch++;
                typedEl.textContent = cmd.slice(0, ch);
                if (ch === cmd.length) { deleting = true; setTimeout(tick, 2200); return; }
                setTimeout(tick, 45 + Math.random() * 50);
            } else {
                ch--;
                typedEl.textContent = cmd.slice(0, ch);
                if (ch === 0) { deleting = false; ci = (ci + 1) % commands.length; setTimeout(tick, 500); return; }
                setTimeout(tick, 18);
            }
        })();
    } else if (typedEl) {
        typedEl.textContent = commands[0];
    }

    /* ---------- reveal on scroll ---------- */
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---------- contact form -> opens the visitor's email client ---------- */
    var form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (ev) {
            ev.preventDefault();
            var name = document.getElementById('cfName').value.trim();
            var email = document.getElementById('cfEmail').value.trim();
            var subject = document.getElementById('cfSubject').value.trim();
            var msg = document.getElementById('cfMsg').value.trim();
            var body = 'Hi Gourav,\n\n' + msg + '\n\n— ' + name + ' (' + email + ')';
            window.location.href = 'mailto:gouravdhankhar2003@gmail.com'
                + '?subject=' + encodeURIComponent(subject)
                + '&body=' + encodeURIComponent(body);
        });
    }
})();
