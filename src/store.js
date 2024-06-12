import { reactive } from 'vue';

export const store = reactive({
  header: [
    { name: 'Home', link: 'home' },
    { name: 'Services', link: '' },
    { name: 'Why Us', link: '' },
    { name: 'Case Studies', link: '' },
    { name: 'About', link: 'about' },
    { name: 'Blog', link: '' },
  ],
  footer: {
    headingText: 'Grow Your Online Business Strategically, and Improve Customer Retention.',
    // Collegamenti ai social media con icone, URL e nomi
    socialMediaLinks: [
      { icon: 'facebook', url: '#', name: 'Facebook' },
      { icon: 'twitter', url: '#', name: 'Twitter' },
      { icon: 'instagram', url: '#', name: 'Instagram' },
      { icon: 'youtube', url: '#', name: 'YouTube' },
      { icon: 'linkedin', url: '#', name: 'LinkedIn' },
      { icon: 'tiktok', url: '#', name: 'TikTok' },
    ],
    // Elenco dei servizi offerti con nomi e URL
    services: [
      { name: 'Marketing Plan', url: '#' },
      { name: 'Sales Development', url: '#' },
      { name: 'Digital Marketing', url: '#' },
      { name: 'Pricing', url: '#' },
      { name: 'Why Us', url: '#' },
      { name: 'Case Studies', url: '#' },
    ],
    // Elenco delle risorse disponibili con nomi e URL
    resources: [
      { name: 'Learning Center', url: '#' },
      { name: 'Video Tutorials', url: '#' },
      { name: 'Customers', url: '#' },
      { name: 'Blog', url: '#' },
    ],
    // Informazioni sulla compagnia con nomi e URL
    companyInfo: [
      { name: 'Who We Are', url: '#' },
      { name: 'Contact Us', url: '#' },
      { name: 'Careers', url: '#' },
    ],
    // Informazioni di contatto con numero di telefono e indirizzo email
    contactInfo: {
      phone: '(555) 802-1234',
      email: 'info@yourcompany.com',
    },
    // Testo del copyright
    copyrightText: '© 2012 - 2020 • Avada Consultant • Powered by WordPress',
  },  
  componentRepeatHome: [
    {
      id: 0,
      images: [],
      logoText: { id: 0, logo: '', text: 'Business Growth' },
      title: 'Increase Brand Awareness',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
      button: 'Get A Consultation',
    },
    {
      id: 1,
      images: [],
      logoText: { id: 1, logo: '', text: 'Investors in People' },
      title: 'In-House Sales Training',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
      button: 'Get A Consultation',
    },
    {
      id: 2,
      images: [],
      logoText: { id: 2, logo: '', text: 'Social Media Analysis' },
      title: 'Harness Your Social Proof',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestiae earum atque, assumenda officia ducimus vero.',
      button: 'Get A Consultation',
    },
  ],
});
