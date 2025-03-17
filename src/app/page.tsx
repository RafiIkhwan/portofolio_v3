'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Component imports
// NOTE: Create these components in a /components folder
// import Hero from '../components/Hero';
// import ProjectCard from '../components/ProjectCard';
// import ServiceCard from '../components/ServiceCard';
// import ContactForm from '../components/ContactForm';
// import ProcessStep from '../components/ProcessStep';
// import BlogPreview from '../components/BlogPreview';
// import TestimonialSlider from '../components/TestimonialSlider';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  // These would typically come from a CMS or API
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack web applications with focus on performance and user experience',
      icon: 'code',
      features: ['Custom Frontend', 'API Development', 'Database Design'],
      pricing: 'Mulai dari Rp 15 juta'
    },
    {
      id: 2,
      title: 'Enterprise Solutions',
      description: 'Scalable applications for businesses with complex requirements',
      icon: 'server',
      features: ['Microservice Architecture', 'CI/CD Integration', 'Performance Optimization'],
      pricing: 'Mulai dari Rp 30 juta'
    },
    {
      id: 3,
      title: 'Maintenance & Support',
      description: 'Ongoing support and feature additions for existing applications',
      icon: 'settings',
      features: ['Bug Fixes', 'Performance Monitoring', 'Feature Enhancement'],
      pricing: 'Mulai dari Rp 5 juta/bulan'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Teman Sehat',
      description: 'Platform e-commerce untuk produk kesehatan.',
      image: '/images/teman-sehat.jpg',
      tech: ['NestJS', 'React', 'PostgreSQL'],
      problem: 'Kesulitan distribusi produk kesehatan secara online dengan sistem pemesanan rumit dan minimnya kepercayaan konsumen.',
      solution: 'Sistem microservices dengan NestJS, integrasi inventory, payment gateway, dan UI/UX yang intuitif dengan React.',
      challenges: 'Sinkronisasi real-time inventory, sistem rekomendasi produk, dan scaling database.',
      resolution: 'Implementasi Redis untuk caching, algoritma rekomendasi kolaboratif, dan horizontal scaling architecture.',
      results: 'Peningkatan konversi 40%, waktu loading berkurang 60%, peningkatan retensi 35%.',
      role: 'Lead Backend Developer & Database Architect'
    },
    {
      id: 2,
      title: 'Sisfobekangad',
      description: 'Sistem informasi manajemen logistik dan transportasi.',
      image: '/images/sisfobekangad.jpg',
      tech: ['Laravel', 'ReactJS', 'PostgreSQL'],
      problem: 'Pengelolaan logistik dan transportasi yang tidak efisien dan kesulitan tracking.',
      solution: 'Sistem modular terintegrasi dengan fitur real-time tracking dan reporting komprehensif.',
      challenges: 'Integrasi dengan sistem legacy dan kebutuhan performa tinggi untuk data besar.',
      resolution: 'Implementasi caching layer dan optimasi query untuk mempercepat rendering data kompleks.',
      results: 'Efisiensi operasional meningkat 50%, error dalam pencatatan inventory berkurang 75%.',
      role: 'Full Stack Developer'
    },
    {
      id: 3,
      title: 'Finpos ID',
      description: 'Platform manajemen keuangan untuk bisnis.',
      image: '/images/finpos.jpg',
      tech: ['Laravel', 'ReactJS', 'MongoDB'],
      problem: 'Kesulitan tracking keuangan dan pembuatan laporan keuangan yang akurat untuk UKM.',
      solution: 'Dashboard interaktif dengan visualisasi data dan otomatisasi laporan keuangan.',
      challenges: 'Keamanan data sensitif dan performa agregasi data keuangan.',
      resolution: 'Implementasi enkripsi end-to-end dan strategi indexing MongoDB untuk query cepat.',
      results: 'Pengurangan waktu pembuatan laporan keuangan sebesar 80%, akurasi data meningkat 95%.',
      role: 'Product Manager & Full Stack Developer'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Konsultasi & Analisis',
      description: 'Memahami kebutuhan bisnis dan teknis secara mendalam melalui diskusi komprehensif.',
      icon: 'chat'
    },
    {
      step: 2,
      title: 'Perencanaan & Desain',
      description: 'Merancang arsitektur sistem dan UI/UX yang optimal berdasarkan kebutuhan spesifik.',
      icon: 'design'
    },
    {
      step: 3,
      title: 'Pengembangan',
      description: 'Mengimplementasikan solusi dengan pendekatan iteratif dan komunikasi transparan.',
      icon: 'code'
    },
    {
      step: 4,
      title: 'Pengujian & QA',
      description: 'Melakukan testing komprehensif untuk memastikan kualitas dan performa optimal.',
      icon: 'bug'
    },
    {
      step: 5,
      title: 'Deployment & Support',
      description: 'Meluncurkan aplikasi dan menyediakan dukungan teknis berkelanjutan.',
      icon: 'rocket'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Optimasi Performa React dengan Memoization',
      excerpt: 'Teknik-teknik untuk meningkatkan performa aplikasi React yang kompleks menggunakan useMemo dan useCallback.',
      date: '2023-12-10',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Mengelola State Kompleks dengan Redux Toolkit',
      excerpt: 'Panduan langkah demi langkah untuk mengimplementasikan Redux Toolkit pada aplikasi skala besar.',
      date: '2023-11-25',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'Arsitektur Microservices dengan NestJS',
      excerpt: 'Membangun sistem backend yang skalabel dan maintainable menggunakan NestJS dan prinsip microservices.',
      date: '2023-10-18',
      readTime: '8 min'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Head>
        <title>Rafi Ikhwan | Full Stack Developer</title>
        <meta name="description" content="Portfolio Rafi Ikhwan - Full Stack Developer dengan fokus pada pengembangan web yang menghasilkan dampak bisnis nyata." />
        <meta name="keywords" content="full stack developer, web development, react, nextjs, laravel, nestjs" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Rafi Ikhwan | Full Stack Developer" />
        <meta property="og:description" content="Portfolio profesional dengan fokus pada solusi pengembangan web yang menghasilkan dampak bisnis nyata." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://rafiikhwan.my.id" />
        
        {/* Enable next/image optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 bg-[#2B373F] text-[#AFB3B4] shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <span className="text-xl font-bold text-white cursor-pointer flex items-center">
              <span className="mr-2 text-blue-400">{"<"}</span>
              Rafi Ikhwan
              <span className="ml-2 text-blue-400">{"/>"}</span>
            </span>
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link onClick={() => setActiveSection('about')} href="#about" className={`transition duration-300 ${activeSection === 'about' ? 'text-white font-medium' : 'hover:text-white'}`}>About</Link></li>
              <li><Link onClick={() => setActiveSection('services')} href="#services" className={`transition duration-300 ${activeSection === 'services' ? 'text-white font-medium' : 'hover:text-white'}`}>Services</Link></li>
              <li><Link onClick={() => setActiveSection('projects')} href="#projects" className={`transition duration-300 ${activeSection === 'projects' ? 'text-white font-medium' : 'hover:text-white'}`}>Projects</Link></li>
              <li><Link onClick={() => setActiveSection('process')} href="#process" className={`transition duration-300 ${activeSection === 'process' ? 'text-white font-medium' : 'hover:text-white'}`}>Process</Link></li>
              <li><Link onClick={() => setActiveSection('blog')} href="#blog" className={`transition duration-300 ${activeSection === 'blog' ? 'text-white font-medium' : 'hover:text-white'}`}>Blog</Link></li>
              <li><Link onClick={() => setActiveSection('contact')} href="#contact" className={`transition duration-300 ${activeSection === 'contact' ? 'text-white font-medium' : 'hover:text-white'}`}>Contact</Link></li>
            </ul>
          </nav>
          
          <button className="md:hidden">
            {/* Mobile menu button - need to implement */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <Link href="#contact" className="hidden md:block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 shadow-lg">
              Let&apos;s Talk
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-r from-[#1e2a36] to-[#2B373F] text-white py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="block">Hi, My Name is</span>
                <span className="text-blue-400 text-5xl md:text-6xl">Rafi Ikhwan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">Full Stack Developer</h2>
              <p className="text-lg mb-8 text-gray-300 max-w-xl">
                Saya mengembangkan solusi web yang tidak hanya berfungsi dengan baik, tetapi juga memberikan dampak bisnis nyata. Fokus pada performa, user experience, dan code quality.
              </p>
              <div className="flex space-x-4">
                <Link href="#projects">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300 shadow-lg">
                    Lihat Portofolio
                  </button>
                </Link>
                <Link href="/Curicullum-Vitae-Rafi-Ikhwan.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="border border-gray-300 hover:border-white text-white px-6 py-3 rounded-md transition duration-300">
                    Download CV
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Replace with your profile image */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
                <Image 
                  src="/images/hero.jpg" 
                  alt="Rafi Ikhwan" 
                  fill
                  style={{objectFit: "cover", transform: "scale(1.2)"}}
                  priority
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                  {/* Replace with a professional photo of you working */}
                  <Image 
                    src="/images/rafi-working.jpg" 
                    alt="Rafi working" 
                    fill
                    style={{objectFit: "cover", transform: "scale(2)"}}
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-semibold mb-4">Full Stack Developer dengan Pendekatan Bisnis</h3>
                <p className="text-gray-700 mb-4">
                  Saya adalah seorang Full Stack Developer dengan pengalaman profesional yang fokus pada teknologi web modern. Dengan keahlian di pengembangan front-end dan back-end, saya membantu bisnis mengubah ide menjadi produk digital yang berdampak.
                </p>
                <p className="text-gray-700 mb-6">
                  Pendekatan kerja saya didasarkan pada tiga filosofi utama:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-blue-600 mb-2">Innovate</h4>
                    <p className="text-sm text-gray-600">Mencari pendekatan inovatif untuk setiap tantangan teknis yang dihadapi</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-blue-600 mb-2">Elevate</h4>
                    <p className="text-sm text-gray-600">Meningkatkan kualitas dan performa aplikasi melalui praktik terbaik dan teknologi terbaru</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-blue-600 mb-2">Elaborate</h4>
                    <p className="text-sm text-gray-600">Menguraikan setiap detail teknis untuk memastikan solusi yang tepat dan efisien</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex items-center">
                    <div className="text-blue-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">5+ Project Completed</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-blue-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">1+ Year Experience</span>
                  </div>
                  <div className="flex items-center">
                    <div className="text-blue-500 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Backend Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         {/* Services Section */}
         <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Layanan Saya</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Menawarkan solusi digital komprehensif untuk kebutuhan bisnis modern dengan fokus pada kualitas, performa, dan keamanan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map(service => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6 text-white">
                    {/* Replace with actual icon components */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="font-medium text-blue-600">{service.pricing}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Project Terbaru</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Beberapa proyek yang telah saya kerjakan sebagai bukti komitmen terhadap kualitas dan dampak positif bagi klien.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="relative h-64 w-full">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      style={{objectFit: "cover"}}
                      className="transition duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap mb-4">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link href={`/projects/${project.id}`}>
                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded transition duration-300 flex items-center justify-center">
                        <span>Lihat Detail</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/projects">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300 shadow-lg inline-flex items-center">
                  <span>Lihat Semua Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section id="process" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Proses Kerja</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Metodologi yang saya gunakan untuk memastikan hasil yang konsisten dan berkualitas tinggi.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step) => (
                <div key={step.step} className="flex flex-col items-center">
                  <div className="mb-4 relative">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full text-white text-xl font-bold">
                      {step.step}
                    </div>
                    {step.step < process.length && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-300"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-center text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Section */}
        <section id="blog" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Blog Terbaru</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Tulisan-tulisan terbaru saya tentang pengembangan web, teknologi, dan best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`}>
                      <button className="text-blue-500 hover:text-blue-700 inline-flex items-center">
                        <span>Baca Selengkapnya</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/blog">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition duration-300 shadow-lg inline-flex items-center">
                  <span>Lihat Semua Blog</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Testimonial</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Apa kata klien tentang pengalaman bekerja sama dengan saya.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {/* Testimonial Slider would go here */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      <Image 
                        src="/images/testimonial-1.jpg" 
                        alt="Client" 
                        width={64} 
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Ahmad Suparjo</h4>
                    <p className="text-gray-600 text-sm">PT. BARA Prima Multi Teknovasi</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &quot;Rafi memiliki pemahaman yang kuat tentang pengembangan web modern dan mampu bekerja dengan baik dalam tim. Dia sangat proaktif dalam menyelesaikan masalah dan selalu memberikan solusi yang efektif untuk setiap tantangan yang dihadapi.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Hubungi Saya</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya untuk diskusi lebih lanjut.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-500 rounded-full p-3 mr-4 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Telepon</h4>
                      <p className="text-gray-700">+62 815-7207-1823</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-500 rounded-full p-3 mr-4 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-gray-700">rafiikhwan2006@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-500 rounded-full p-3 mr-4 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Lokasi</h4>
                      <p className="text-gray-700">Cimahi, Jawa Barat, 40526</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-bold mb-4">Sosial Media</h4>
                    <div className="flex space-x-4">
                      <a href="https://github.com/rafiikhwan" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a href="https://linkedin.com/in/rafi-ikhwan" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="https://instagram.com/rafiikhwan_" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <form className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                  
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Nama Lengkap"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subjek</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Subjek Pesan"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Tulis pesan Anda di sini..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md transition duration-300 shadow-lg"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2B373F] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <Link href="/">
                <span className="text-xl font-bold cursor-pointer flex items-center">
                  <span className="mr-2 text-blue-400">{"<"}</span>
                  Rafi Ikhwan
                  <span className="ml-2 text-blue-400">{"/>"}</span>
                </span>
              </Link>
              <p className="mt-4 text-gray-400 max-w-md">
                Full Stack Developer dengan fokus pada solusi web yang memberikan dampak bisnis nyata.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="https://github.com/rafiikhwan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/rafi-ikhwan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://instagram.com/rafiikhwan_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition duration-300">Beranda</Link></li>
                  <li><Link href="/tentang" className="text-gray-400 hover:text-white transition duration-300">Tentang</Link></li>
                  <li><Link href="/proyek" className="text-gray-400 hover:text-white transition duration-300">Proyek</Link></li>
                  <li><Link href="/kontak" className="text-gray-400 hover:text-white transition duration-300">Kontak</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Teknologi</h3>
                <ul className="space-y-2">
                  <li><span className="text-gray-400">PHP (Laravel)</span></li>
                  <li><span className="text-gray-400">Javascript (React, Next.js)</span></li>
                  <li><span className="text-gray-400">Express.js, NestJS</span></li>
                  <li><span className="text-gray-400">PostgreSQL, MongoDB</span></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Kontak</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+6281572071823" className="text-gray-400 hover:text-white transition duration-300 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +62 815-7207-1823
                    </a>
                  </li>
                  <li>
                    <a href="mailto:rafiikhwan2006@gmail.com" className="text-gray-400 hover:text-white transition duration-300 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      rafiikhwan2006@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://rafiikhwan.my.id" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      rafiikhwan.my.id
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-400 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Cimahi, Jawa Barat, 40526
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Rafi Ikhwan Purnama. Hak Cipta Dilindungi.
              </p>
              <div className="mt-4 md:mt-0">
                <p className="text-gray-400 text-sm">
                  Dibuat dengan <span className="text-red-500">❤</span> menggunakan Next.js & TailwindCSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}