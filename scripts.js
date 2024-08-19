document.addEventListener('DOMContentLoaded', () => {
    // Function to handle resume download
    function handleResumeDownload() {
        window.open('path/to/your/resume.pdf', '_blank');
    }

    // Add event listeners for resume download buttons
    const resumeButton = document.getElementById('resumeButton');
    const resumeButtonSmall = document.getElementById('resumeButtonSmall');

    if (resumeButton) {
        resumeButton.addEventListener('click', handleResumeDownload);
    }

    if (resumeButtonSmall) {
        resumeButtonSmall.addEventListener('click', handleResumeDownload);
    }

    // Dynamic content for Projects
    const projects = [
        {
            title: 'NTT Data Global Pvt Ltd',
            period: 'July 2023 – Till Now',
            role: 'System Integration Analyst | Project: BMW DevOps India Hub | Microsoft Full Stack Developer | Implementation',
            description: 'Handled PowerApps & SharePoint development, leading a team and managing the end-to-end process from scratch. This included agile methodologies, UI design, development, and deployment, 30% improvement in team performance, and 35% boost in user satisfaction. Additionally, maintained comprehensive reports and facilitated team development.',
            achievements: [
                '30% improvement in team performance',
                '35% boost in user satisfaction'
            ]
        },
        {
            title: 'NTT Data Global Pvt Ltd',
            period: 'Sep 2022 – July 2023',
            role: 'System Integration Analyst | Project: BMW DevOps India Hub | IT Infrastructure | Enhancement',
            description: 'Successfully ensured 100% data protection compliance across all systems, maintained a 95% closure rate in ITSM ticketing using Jira and Confluence, upheld 99.9% uptime for over 10 portals as a console administrator, rigorously enforced server security policies with full compliance, and conducted quarterly audits for detailed inventory reports.',
            achievements: [
                '100% data protection compliance',
                '95% closure rate in ITSM ticketing',
                '99.9% uptime for portals'
            ]
        },
        {
            title: 'Business Integrity Services',
            period: 'Aug 2021 – Sep 2022',
            role: 'Associate IT Support | Project: Healthcare(PPOA, Yitro) | Networking & System Administrator | Enhancement',
            description: 'Configured and managed 50+ networking devices with 99.9% uptime. Reduced vulnerabilities by 95% through patch management. Maintained Active Directory for 1,000+ users and administered McAfee/Sophos consoles for 1,000+ devices, ensuring security compliance. Globally collaborated to enhance communication and improve project delivery by 20%.',
            achievements: [
                '99.9% uptime for networking devices',
                '95% reduction in vulnerabilities',
                '20% improvement in project delivery'
            ]
        },
        {
            title: 'Allset Business Solution',
            period: 'Feb 2021 – Aug 2021',
            role: 'IT Support - Network Engineer | Project: Banking(HDFC, YesBank) | Hardware & Networking | Enhancement',
            description: 'Managed inventory for 500+ equipment, software, and licenses, resolving 95% of technical issues within 24 hours. Installed, configured, and updated software/hardware for 300+ devices, diagnosing 98% of LAN, WAN, and hardware issues.',
            achievements: [
                '95% resolution rate for technical issues',
                '98% diagnosis rate for LAN, WAN, and hardware issues'
            ]
        }
    ];

    function loadProjects() {
        const projectContainer = document.querySelector('.project');
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project-item');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p><strong>Period:</strong> ${project.period}</p>
                <p><strong>Role:</strong> ${project.role}</p>
                <p>${project.description}</p>
                <ul>
                    ${project.achievements.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
            projectContainer.appendChild(projectElement);
        });
    }

    loadProjects();

    // Example function for handling form submissions or interactions
    function handleFormSubmission(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    // Additional functionalities can be added here
});
