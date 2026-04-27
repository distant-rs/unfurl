    const demos = [
        { trigger: ';thanks',    result: 'Thank you so much for getting back to me — I really appreciate your time!' },
        { trigger: ';sig',       result: 'Best regards,\nAlex Johnson\nSenior Support Engineer' },
        { trigger: ';meeting',   result: 'Let me check my calendar and get back to you shortly.' },
        { trigger: ';addr',      result: '123 Main Street, Melbourne VIC 3000, Australia' },
        { trigger: ';followup',  result: 'Just following up on my previous message — happy to chat if easier!' },
        { trigger: ';date',      result: new Date().toLocaleDateString('en-AU', { weekday:'long', year:'numeric', month:'long', day:'numeric' }) },
    ];

    let demoIdx = 0;
    const triggerEl = document.getElementById('demoTrigger');
    const resultEl  = document.getElementById('demoResult');

    function cycleDemos() {
        demoIdx = (demoIdx + 1) % demos.length;
        const d = demos[demoIdx];

        resultEl.style.opacity = '0';
        triggerEl.style.opacity = '0';

        setTimeout(() => {
            triggerEl.textContent = d.trigger;
            resultEl.textContent  = d.result;
            resultEl.style.opacity = '1';
            triggerEl.style.opacity = '1';
        }, 300);
    }

    setInterval(cycleDemos, 3000);

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
