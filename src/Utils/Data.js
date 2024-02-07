import codingImage from "../assets/Skills/coding.png"
import embedded from "../assets/Skills/system.png"
import settings from "../assets/Skills/settings.png"
import abilities from "../assets/Skills/abilities.png"
import theDocky1 from "../assets/TheDocky/TheDocky_Login.png"
import theDocky2 from "../assets/TheDocky/homeScreen.png"
import theDocky3 from "../assets/TheDocky/TheDocky_Map.png"
import theDocky4 from "../assets/TheDocky/TheDocky_Dock.png"
import theDocky5 from "../assets/TheDocky/TheDocky_Settings.png"
import hardware1 from "../assets/dockyHardware/dockyHardware1.jpg"
import hardware2 from "../assets/dockyHardware/dockyHardware2.jpg"
import pcb from "../assets/dockyHardware/pcbDesign.png"
import chain from "../assets/dockyHardware/dockyChain.jpg"
import fullDesign from "../assets/dockyHardware/allDesign.png"



export const SKILLS = [
    {
        title: "WebDev",
        icon: codingImage,
        skills: [
            {skill: "HTML5/CSS (Sass/SCSS)", percentage: "90%"},
            {skill: "JavaScript", percentage: "70%"},
            {skill: "React", percentage: "85%"},
            {skill: "REST Api", percentage: "66%"},
        ],
    },
    {
        title: "Embedded",
        icon: embedded,
        skills: [
            {skill: "IP/DHCP/TCP/UDP", percentage: "76%"},
            {skill: "C/C++", percentage: "92%"},
            {skill: "Python", percentage: "84%"},
            {skill: "SPI/UART/I2C", percentage: "74%"},
        ],
    },
    {
        title: "Tools",
        icon: settings,
        skills: [
            {skill: "Linux OS's", percentage: "90%"},
            {skill: "Cisco Networking", percentage: "75%"},
            {skill: "Git/GitHub", percentage: "84%"},
            {skill: "Wireshark/Tcpdumb", percentage: "73%"},
        ],
    },
    {
        title: "SoftSkills",
        icon: abilities,
        skills: [
            {skill: "Problem-Solving", percentage: "78%"},
            {skill: "Creativity", percentage: "98%"},
            {skill: "Collabaration", percentage: "80%"},
            {skill: "Negotiation", percentage: "85%"},
        ],
    },
]

export const EXPERIENCE =[
    {
        title: "Website Tester and Traffic Arbitrage",
        date: "May 2020 - June 2020",
        skills: "HTML/SCSS/JS + Node.js",
        pics: "",
        responsibilities: [
            "Proficiency in gathering and analyzing large sets of data to inform decision-making and strategy development.",
            "Conducted tests to compare the effectiveness of different web page versions.",
            "Basic understanding of backend development, working with databases and servers.",
            "Collaboration skills to work closely with developers for issue resolution.",
            "Attention to detail in identifying and documenting software bugs and glitches.",
        ],
        full_descr: "Demonstrating a high level of proficiency in data gathering and analysis, I inform strategic decision-making and contribute substantively to business strategy formulation. My comprehensive testing protocols for web page optimization and collaboration with developers underscore a commitment to seamless digital functionality. With a meticulous approach, I navigate complex datasets to extract meaningful insights, driving informed decision-making and strategic planning. My foundational knowledge in backend development ensures a comprehensive understanding of digital infrastructures, allowing for effective collaboration and issue resolution."

    },

    {   
        title: "TheDocky - Android App",
        date: "September 2022 - May 2023",
        skills: "Java, Real-Time DB, API's",
        pics: [theDocky2, theDocky1, theDocky3, theDocky4, theDocky5],
        responsibilities: [
            "Established real-time communication where the app sends requests for user verification, and signals are sent to the Raspberry PI for bike lock control.",
            "Designed a flexible rate system based on bike lock duration, ensuring fair and accurate pricing for users.",
            "Incorporated user authentication, secure payment processing, and data encryption for safeguarding user information",
            "Docky app offers seamless features like login, signup, easy bike parking with GPS tracking, lock/unlock, real-time updates, and a payment system charging 1 cent per second.",
            "Stored and retrieved user information and bike lock data in the Cloud Database, ensuring secure access and operation.",
        ],
        full_descr: "The Docky system envisions a citywide network of bike docks, accessible to all through a user-friendly app featuring a simple lock/unlock feature. To achieve this, hardware components include a solenoid to secure bikes, a weight sensor for movement detection, LED lights indicating lock availability, and an LCD display showing parking duration and user details. The app encompasses login/signup screens, a timer with dock/undock options, a GPS location page displaying nearby docks, lock/unlock functionality, and a payment page charging 1 cent per second, offering a $100 wallet balance at signup. Individualized development involves fragment-based work, with one fragment per group member focusing on login, GPS, lock/unlock, and payment functionalities. Firebase integration ensures secure storage of user data, with real-time connectivity between the Android app and Raspberry PI. The database manages user IDs, passwords, lock times, and pricing based on usage duration.",
    },

    {   
        title: "Smart Bike Locker - Hardware",
        date: "January 2023 - May 2023",
        skills: "PCB Design, Python/C, I2C",
        pics: [hardware1, hardware2, pcb, chain, fullDesign],
        responsibilities: [
            "The hardware boasts a compact build, integrating Raspberry Pi, sensors, and PCB into a space-efficient unit.",
            "Utilizes solenoid actuation controlled by Raspberry Pi to ensure secure locking mechanisms for bikes.",
            "Sensors provide real-time data on weight and lock status, accessible through the Android app interface.",
            "LCD display and LED indicators offer intuitive feedback, enhancing user interaction and system understanding.",
            "Suitable for various environments including educational institutes, offices, and homes, catering to diverse user needs.",
        ],
        full_descr: "The hardware system, with its central Raspberry Pi unit, stands as a beacon of sophistication within a remarkably compact form factor. Boasting an array of cutting-edge components, including precision weight sensors and a meticulously engineered solenoid-driven locking mechanism, it establishes an impregnable fortress of security around bicycles. Moreover, the integration of an expansive LCD display and a network of vibrant LED indicators enhances user engagement to unprecedented levels, offering crystal-clear, real-time feedback and meticulously detailed system status updates. This harmonious convergence of hardware components not only ensures seamless bike monitoring but also facilitates flawless integration with the Android application. Its unparalleled versatility transcends boundaries, effortlessly adapting to a diverse array of environments ranging from bustling educational institutions to corporate complexes and serene residential neighborhoods. With its intuitive interface and a comprehensive suite of security features, it stands ready to cater to an extensive spectrum of user needs with unparalleled finesse and precision."
    },
]


export const QUOTES = [
    {
      author: "Unknown",
      text: "Life is a journey of self-discovery. Along the way, we encounter challenges that shape our character, joys that brighten our path, and moments that define our existence. Embrace the journey within, for it is the key to unlocking the extraordinary potential within yourself."
    },
    {
      author: "Ralph Waldo Emerson",
      text: "The universe is a canvas of infinite possibilities, waiting for the strokes of our aspirations. With every dream we pursue and every goal we set, we contribute to the masterpiece of our existence. Dare to dream, for in the vastness of potential, we discover the true essence of our being."
    },
    {
      author: "Dalai Lama",
      text: "In the symphony of life, let compassion be the melody that resonates in every heart. A compassionate act creates ripples of kindness that echo across time and space. Embrace the power of compassion, and witness the profound impact it has on the world around you."
    },
    {
      author: "Albert Einstein",
      text: "Imagination is the dance of the mind, a waltz between reality and the boundless realms of creativity. With each step, we create worlds, invent wonders, and breathe life into the fantastical. Dance with your imagination, for it is the choreographer of innovation and the architect of dreams."
    },
    {
      author: "Heraclitus",
      text: "Change is the constant companion on our journey through life. Like the seasons, it brings transformation, growth, and the promise of new beginnings. Embrace change with an open heart, for in its ebb and flow, we discover the resilience of our spirit and the beauty of evolving into our best selves."
    },
  ];