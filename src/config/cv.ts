export interface Education {
    title: string
    subtitle: string
}

export interface Experience {
    title: string
    subtitle: string
    description: string
}

export interface Certification {
    title: string
    url: string
}

export interface CVConfig {
    profileDescription: string
    education: Education[]
    experience: Experience[]
    certifications: Certification[]
    skills: string[]
}

export const cvConfig: CVConfig = {
    profileDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    education: [
        {
            title: 'Sekolah Dasar (SD)',
            subtitle:
                '2015 sampai 2020 di SDN 37 Tanjung Beringin, Dairi, Sumatera Utara',
        },
        {
            title: 'Sekolah Menengah Pertama (SMP)',
            subtitle:
                '2021 sampai 2024 di SMPN 2 Sumbul, Dairi, Sumatera Utara',
        },
    ],
    experience: [
        {
            title: 'Founder di Asterix Technology',
            subtitle: 'Dari 2023 sampai sekarang',
            description:
                'Saya adalah founder Asterix Technology, organisasi open source yang bergerak di bidang teknologi. Saat ini memiliki 8 anggota.',
        },
        {
            title: 'Job Title at Project or Company Name',
            subtitle:
                'From [Start Date] to [End Date] at [Company], [City], [Country]',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        },
        {
            title: 'Job Title at Project or Company Name',
            subtitle:
                'From [Start Date] to [End Date] at [Company], [City], [Country]',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        },
    ],
    certifications: [
        {
            title: 'FREECLASS: Data Science Fundamentals - DQLab',
            url: 'https://raw.githubusercontent.com/indra87g/indra87g/main/certificates/dqlab_1.pdf',
        },
        {
            title: 'FullStack Javascript Developer dengan Express dan Vue - SantriKoding',
            url: 'https://raw.githubusercontent.com/indra87g/indra87g/main/certificates/santrikoding_1.png',
        },
        {
            title: 'Belajar Visualisasi Data - IDCamp IOH 2024',
            url: 'https://raw.githubusercontent.com/indra87g/indra87g/main/certificates/idcamp2024_1.pdf',
        },
        {
            title: 'Memulai Pemrograman dengan Python - IDCamp IOH 2024',
            url: 'https://raw.githubusercontent.com/indra87g/indra87g/main/certificates/idcamp2024_2.pdf',
        },
    ],
    skills: [
        'Web Development Dasar (HTML, CSS, JavaScript) - Intermediate',
        'UI/UX (Lunacy) - Beginner',
        'Data Science (Microsoft Excel, Numpy, Pandas, Matplotlib, Jupyter) - Beginner',
        'AI/ML (Scikit-learn) - Beginner',
        'Backend Development (Python, Golang, C#, PHP, NodeJS, Bun, Hono) - Intermediate',
        'Frontend Development (Vue, React) - Intermediate',
        'DevOps (Vercel, Github Actions, Vagrant) - Beginner',
        'Fullstack Development (Laravel, Flask) - Intermediate',
        'Desktop Development (Tkinter, Electron) - Beginner',
        'Mobile Development (Expo) - Beginner',
        'Game Development (Pygame) - Intermediate',
        'Linux - Intermediate',
    ],
}
