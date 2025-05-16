import { Category, Product } from '../types';

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Laptops',
    icon: 'laptop',
    description: 'High-performance laptops for work and entertainment'
  },
  {
    id: 'cameras',
    name: 'Cameras',
    icon: 'camera',
    description: 'Professional cameras for photography and filmmaking'
  },
  {
    id: 'audio',
    name: 'Audio Equipment',
    icon: 'headphones',
    description: 'High-quality audio gear for music and production'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: 'gamepad-2',
    description: 'Latest gaming consoles and accessories'
  },
  {
    id: 'smart-home',
    name: 'Smart Home',
    icon: 'home',
    description: 'Smart devices to automate your living space'
  },
  {
    id: 'tablets',
    name: 'Tablets',
    icon: 'tablet',
    description: 'Portable tablets for work and entertainment on the go'
  },
  {
    id: 'monitors',
    name: 'Monitors',
    icon: 'monitor',
    description: 'High-resolution displays for productive work and gaming'
  },
  {
    id: 'printers',
    name: 'Printers',
    icon: 'printer',
    description: 'Professional printing solutions for home and office'
  }
];

export const products: Product[] = [
  {
    id: 'laptop-1',
    name: 'MacBook Pro 16"',
    categoryId: 'laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
    description: 'Powerful MacBook Pro with M2 Pro chip, perfect for creative professionals.',
    specifications: {
      'Processor': 'M2 Pro',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Display': '16-inch Retina',
      'Battery': 'Up to 22 hours'
    },
    pricePerDay: 45,
    stock: 10,
    featured: true
  },
  {
    id: 'laptop-2',
    name: 'Dell XPS 15',
    categoryId: 'laptops',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    description: 'High-performance Windows laptop with stunning display and powerful specs.',
    specifications: {
      'Processor': 'Intel Core i7',
      'RAM': '16GB',
      'Storage': '1TB SSD',
      'Display': '15.6-inch 4K',
      'Battery': 'Up to 12 hours'
    },
    pricePerDay: 35,
    stock: 8,
    featured: false
  },
  {
    id: 'laptop-3',
    name: 'Lenovo ThinkPad X1 Carbon',
    categoryId: 'laptops',
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    description: 'Business-class ultrabook with exceptional build quality and battery life.',
    specifications: {
      'Processor': 'Intel Core i7',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Display': '14-inch WQHD',
      'Battery': 'Up to 19 hours'
    },
    pricePerDay: 30,
    stock: 5,
    featured: false
  },
  {
    id: 'laptop-4',
    name: 'ASUS ROG Zephyrus G14',
    categoryId: 'laptops',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80',
    description: 'Compact gaming powerhouse with AMD Ryzen 9 processor and RTX graphics.',
    specifications: {
      'Processor': 'AMD Ryzen 9',
      'RAM': '32GB',
      'Storage': '1TB NVMe SSD',
      'Display': '14-inch 2K 120Hz',
      'Graphics': 'NVIDIA RTX 4070',
      'Battery': 'Up to 10 hours'
    },
    pricePerDay: 40,
    stock: 3,
    featured: true
  },
  {
    id: 'laptop-5',
    name: 'Microsoft Surface Laptop Studio',
    categoryId: 'laptops',
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Versatile laptop with innovative form factor for creative professionals.',
    specifications: {
      'Processor': 'Intel Core i7',
      'RAM': '32GB',
      'Storage': '1TB SSD',
      'Display': '14.4-inch PixelSense Touch',
      'Graphics': 'NVIDIA RTX 3050 Ti',
      'Battery': 'Up to 18 hours'
    },
    pricePerDay: 38,
    stock: 4,
    featured: false
  },
  {
    id: 'camera-1',
    name: 'Sony Alpha A7 III',
    categoryId: 'cameras',
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    description: 'Full-frame mirrorless camera with exceptional image quality and autofocus.',
    specifications: {
      'Sensor': '24.2MP Full-Frame',
      'ISO Range': '100-51,200',
      'Video': '4K HDR',
      'Autofocus': '693-point phase-detection',
      'Battery': 'Up to 700 shots'
    },
    pricePerDay: 40,
    stock: 5,
    featured: true
  },
  {
    id: 'camera-2',
    name: 'Canon EOS R5',
    categoryId: 'cameras',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Flagship mirrorless camera with 8K video recording and advanced AF.',
    specifications: {
      'Sensor': '45MP Full-Frame',
      'ISO Range': '100-51,200',
      'Video': '8K RAW, 4K 120p',
      'Autofocus': 'Dual Pixel CMOS AF II',
      'Battery': 'Up to 320 shots'
    },
    pricePerDay: 50,
    stock: 3,
    featured: true
  },
  {
    id: 'camera-3',
    name: 'Nikon Z9',
    categoryId: 'cameras',
    image: 'https://mocha-cdn.com/0196d744-b64b-79b1-9c16-5cfc07e41b19/nikon-z9.jpeg',
    description: 'Professional flagship mirrorless camera with exceptional speed and performance.',
    specifications: {
      'Sensor': '45.7MP Full-Frame Stacked CMOS',
      'ISO Range': '64-25,600',
      'Video': '8K30p, 4K120p',
      'Autofocus': '493-point phase-detection',
      'Battery': 'Up to 760 shots',
      'Max Burst': '20 fps RAW'
    },
    pricePerDay: 65,
    stock: 2,
    featured: true
  },
  {
    id: 'camera-4',
    name: 'Blackmagic Pocket Cinema Camera 6K',
    categoryId: 'cameras',
    image: 'https://images.unsplash.com/photo-1589872337893-252017d1e8b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    description: 'Professional cinema camera with Super 35 sensor and EF lens mount for filmmakers.',
    specifications: {
      'Sensor': 'Super 35 6K',
      'Dynamic Range': '13 stops',
      'Video': '6K 50fps, 4K 60fps',
      'Recording': 'Blackmagic RAW, ProRes',
      'Monitor': '5-inch touchscreen',
      'Media': 'CFast, SD UHS-II, USB-C SSD'
    },
    pricePerDay: 55,
    stock: 3,
    featured: false
  },
  {
    id: 'audio-1',
    name: 'Sony WH-1000XM5',
    categoryId: 'audio',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80',
    description: 'Premium noise-canceling headphones with exceptional sound quality.',
    specifications: {
      'Type': 'Over-ear',
      'Noise Cancellation': 'Adaptive',
      'Battery': 'Up to 30 hours',
      'Connectivity': 'Bluetooth 5.2',
      'Weight': '250g'
    },
    pricePerDay: 15,
    stock: 12,
    featured: false
  },
  {
    id: 'audio-2',
    name: 'Rode VideoMic Pro+',
    categoryId: 'audio',
    image: 'https://images.unsplash.com/photo-1607016284318-d1e718174i76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Professional shotgun microphone for DSLR and video cameras.',
    specifications: {
      'Type': 'Shotgun',
      'Frequency Response': '20Hz-20kHz',
      'Battery': 'Rechargeable lithium-ion',
      'Connectivity': '3.5mm TRS',
      'Weight': '122g'
    },
    pricePerDay: 18,
    stock: 7,
    featured: false
  },
  {
    id: 'audio-3',
    name: 'Shure SM7B',
    categoryId: 'audio',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Professional dynamic microphone perfect for vocals, podcasting, and streaming.',
    specifications: {
      'Type': 'Dynamic',
      'Frequency Response': '50Hz-20kHz',
      'Impedance': '150 ohms',
      'Connectivity': 'XLR',
      'Includes': 'Switchable presence boost, bass roll-off',
      'Weight': '765g'
    },
    pricePerDay: 20,
    stock: 5,
    featured: true
  },
  {
    id: 'audio-4',
    name: 'Sennheiser MKH 416',
    categoryId: 'audio',
    image: 'https://images.unsplash.com/photo-1615559103458-10d290aedd04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Industry-standard shotgun microphone for film and broadcast applications.',
    specifications: {
      'Type': 'Shotgun',
      'Frequency Response': '40Hz-20kHz',
      'Polar Pattern': 'Supercardioid/Lobe',
      'Sensitivity': '25 mV/Pa',
      'Self Noise': '13 dB(A)',
      'Connectivity': 'XLR'
    },
    pricePerDay: 25,
    stock: 3,
    featured: false
  },
  {
    id: 'gaming-1',
    name: 'PlayStation 5',
    categoryId: 'gaming',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    description: 'Next-gen gaming console with lightning-fast loading and stunning graphics.',
    specifications: {
      'CPU': 'AMD Zen 2',
      'GPU': 'AMD RDNA 2',
      'Storage': '825GB SSD',
      'Resolution': 'Up to 8K',
      'Frame Rate': 'Up to 120fps'
    },
    pricePerDay: 25,
    stock: 3,
    featured: true
  },
  {
    id: 'gaming-2',
    name: 'Xbox Series X',
    categoryId: 'gaming',
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    description: 'Powerful gaming console with 4K gaming, rapid loading times, and Game Pass.',
    specifications: {
      'CPU': 'Custom Zen 2',
      'GPU': '12 TFLOPS, 52 CUs',
      'Storage': '1TB SSD',
      'Resolution': 'Up to 8K',
      'Frame Rate': 'Up to 120fps'
    },
    pricePerDay: 22,
    stock: 4,
    featured: false
  },
  {
    id: 'gaming-3',
    name: 'Nintendo Switch OLED',
    categoryId: 'gaming',
    image: 'https://images.unsplash.com/photo-1662997486626-2d0ec69fa2d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Versatile gaming console with vibrant OLED display, perfect for handheld and docked play.',
    specifications: {
      'Display': '7-inch OLED',
      'Storage': '64GB (expandable)',
      'Battery': '4.5-9 hours',
      'Modes': 'Handheld, Tabletop, TV',
      'Connectivity': 'Wi-Fi, Bluetooth, LAN (docked)'
    },
    pricePerDay: 18,
    stock: 6,
    featured: false
  },
  {
    id: 'gaming-4',
    name: 'Oculus Quest 2 VR Headset',
    categoryId: 'gaming',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'All-in-one VR headset with advanced features and immersive gaming experiences.',
    specifications: {
      'Display': 'LCD 1832 x 1920 per eye',
      'Refresh Rate': '90Hz',
      'Storage': '128GB/256GB',
      'Processor': 'Snapdragon XR2',
      'Tracking': '6DoF',
      'Battery': '2-3 hours'
    },
    pricePerDay: 20,
    stock: 5,
    featured: true
  },
  {
    id: 'smart-home-1',
    name: 'Amazon Echo Show 10',
    categoryId: 'smart-home',
    image: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
    description: 'Smart display with motion tracking and premium sound for your smart home.',
    specifications: {
      'Display': '10.1-inch HD',
      'Audio': 'Directional speakers',
      'Camera': '13MP',
      'Features': 'Motion tracking',
      'Connectivity': 'Wi-Fi, Bluetooth'
    },
    pricePerDay: 12,
    stock: 7,
    featured: false
  },
  {
    id: 'smart-home-2',
    name: 'Philips Hue Lighting Kit',
    categoryId: 'smart-home',
    image: 'https://images.unsplash.com/photo-1558002038-d5262c677f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Complete smart lighting solution for your home with app and voice control.',
    specifications: {
      'Bulbs': '4 color bulbs',
      'Bridge': 'Included',
      'Compatibility': 'Alexa, Google Home, HomeKit',
      'Control': 'App, Voice, Switches',
      'Connectivity': 'Zigbee, Wi-Fi'
    },
    pricePerDay: 14,
    stock: 5,
    featured: false
  },
  {
    id: 'smart-home-3',
    name: 'Ring Video Doorbell Pro 2',
    categoryId: 'smart-home',
    image: 'https://images.unsplash.com/photo-1582816911023-d8264d9faa6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    description: 'Advanced video doorbell with head-to-toe HD video and 3D motion detection.',
    specifications: {
      'Resolution': '1536p HD',
      'Field of View': '150° horizontal, 150° vertical',
      'Features': '3D motion detection, Bird\'s Eye View',
      'Power': 'Hardwired',
      'Connectivity': 'Wi-Fi',
      'Storage': 'Cloud (subscription)'
    },
    pricePerDay: 10,
    stock: 8,
    featured: false
  },
  {
    id: 'smart-home-4',
    name: 'Nest Learning Thermostat',
    categoryId: 'smart-home',
    image: 'https://images.unsplash.com/photo-1567030889431-379c9626ef73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Smart thermostat that learns your preferences and helps save energy.',
    specifications: {
      'Display': '2.08-inch color display',
      'Sensors': 'Temperature, Humidity, Proximity, Occupancy',
      'Compatibility': 'Works with 95% of HVAC systems',
      'Features': 'Auto-Schedule, Home/Away Assist, Energy History',
      'Connectivity': 'Wi-Fi, Bluetooth'
    },
    pricePerDay: 8,
    stock: 6,
    featured: false
  },
  {
    id: 'tablet-1',
    name: 'iPad Pro 12.9"',
    categoryId: 'tablets',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
    description: 'Powerful tablet with M2 chip and stunning mini-LED display for creatives.',
    specifications: {
      'Processor': 'Apple M2',
      'RAM': '8GB',
      'Storage': '256GB',
      'Display': '12.9-inch mini-LED',
      'Battery': 'Up to 10 hours'
    },
    pricePerDay: 30,
    stock: 6,
    featured: true
  },
  {
    id: 'tablet-2',
    name: 'Samsung Galaxy Tab S9 Ultra',
    categoryId: 'tablets',
    image: 'https://mocha-cdn.com/0196d744-b64b-79b1-9c16-5cfc07e41b19/sam.jpeg',
    description: 'Premium Android tablet with massive AMOLED display and S Pen included.',
    specifications: {
      'Processor': 'Snapdragon 8 Gen 2',
      'RAM': '12GB',
      'Storage': '256GB (expandable)',
      'Display': '14.6-inch Dynamic AMOLED 2X',
      'Battery': '11,200 mAh',
      'S Pen': 'Included'
    },
    pricePerDay: 28,
    stock: 4,
    featured: true
  },
  {
    id: 'tablet-3',
    name: 'Microsoft Surface Pro 9',
    categoryId: 'tablets',
    image: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    description: 'Versatile 2-in-1 Windows tablet that transforms into a laptop with optional keyboard.',
    specifications: {
      'Processor': 'Intel Core i7-1255U',
      'RAM': '16GB',
      'Storage': '512GB SSD',
      'Display': '13-inch PixelSense Flow',
      'Battery': 'Up to 15.5 hours',
      'Ports': 'USB-C, Surface Connect'
    },
    pricePerDay: 25,
    stock: 5,
    featured: false
  },
  {
    id: 'monitor-1',
    name: 'LG UltraWide 34"',
    categoryId: 'monitors',
    image: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80',
    description: 'Ultra-wide curved monitor perfect for productivity and immersive gaming.',
    specifications: {
      'Resolution': '3440x1440',
      'Panel': 'IPS',
      'Refresh Rate': '160Hz',
      'Response Time': '1ms',
      'HDR': 'HDR10'
    },
    pricePerDay: 20,
    stock: 4,
    featured: false
  },
  {
    id: 'monitor-2',
    name: 'Dell UltraSharp 32" 4K',
    categoryId: 'monitors',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Professional 4K monitor with exceptional color accuracy for creative work.',
    specifications: {
      'Resolution': '3840x2160 (4K)',
      'Panel': 'IPS',
      'Color Coverage': '100% sRGB, 98% DCI-P3',
      'Calibration': 'Factory calibrated',
      'Ports': 'HDMI, DisplayPort, USB-C',
      'Features': 'KVM switch, Picture-by-Picture'
    },
    pricePerDay: 25,
    stock: 3,
    featured: true
  },
  {
    id: 'monitor-3',
    name: 'Samsung Odyssey G9 49"',
    categoryId: 'monitors',
    image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Massive super ultrawide curved gaming monitor with immersive 1000R curvature.',
    specifications: {
      'Resolution': '5120x1440 (32:9)',
      'Panel': 'VA',
      'Refresh Rate': '240Hz',
      'Response Time': '1ms',
      'HDR': 'HDR1000',
      'Curvature': '1000R',
      'Features': 'G-Sync, FreeSync Premium Pro'
    },
    pricePerDay: 35,
    stock: 2,
    featured: true
  },
  {
    id: 'printer-1',
    name: 'Canon PIXMA Pro-100',
    categoryId: 'printers',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Professional photo printer with 8-color dye based ink system.',
    specifications: {
      'Type': 'Inkjet',
      'Max Resolution': '4800x2400 dpi',
      'Connectivity': 'Wi-Fi, Ethernet, USB',
      'Paper Size': 'Up to 13x19"',
      'Ink System': '8-color dye'
    },
    pricePerDay: 25,
    stock: 3,
    featured: false
  },
  {
    id: 'printer-2',
    name: 'Epson EcoTank ET-8550',
    categoryId: 'printers',
    image: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1201&q=80',
    description: 'All-in-one photo printer with high-capacity ink tanks for cost-effective photo printing.',
    specifications: {
      'Type': 'Inkjet',
      'Functions': 'Print, Scan, Copy',
      'Max Resolution': '5760x1440 dpi',
      'Connectivity': 'Wi-Fi, Ethernet, USB, SD card',
      'Paper Size': 'Up to 13x19"',
      'Ink System': '6-color',
      'Features': 'Borderless printing, duplex printing'
    },
    pricePerDay: 22,
    stock: 4,
    featured: false
  },
  {
    id: 'printer-3',
    name: 'HP LaserJet Pro M479fdw',
    categoryId: 'printers',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Color laser all-in-one business printer with advanced security features.',
    specifications: {
      'Type': 'Laser',
      'Functions': 'Print, Scan, Copy, Fax',
      'Speed': 'Up to 28 ppm',
      'Resolution': '600x600 dpi (up to 38,400x600 enhanced)',
      'Connectivity': 'Wi-Fi, Ethernet, USB, NFC tap-to-print',
      'Paper Size': 'Up to Legal',
      'Features': 'Automatic document feeder, auto duplex printing'
    },
    pricePerDay: 30,
    stock: 3,
    featured: true
  }
];
