import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { Users, Target, Heart, Clock, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Srinivas Surepally",
      role: "Founder & Lead Engineer",
      experience: "15+ Years Experience",
      image: "/assets/about/1.webp" // Local image path
    },
    {
      name: "Team Member 2",
      role: "Senior Engineer",
      experience: "10+ Years Experience",
      image: "/assets/about/2.webp" // Local image path
    },
    {
      name: "Team Member 3",
      role: "Product Designer",
      experience: "8+ Years Experience",
      image: "/assets/about/3.webp" // Local image path
    }
  ];

  const values = [
    { icon: Lightbulb, title: "Innovation", description: "Cutting-edge solutions for modern challenges" },
    { icon: Award, title: "Quality", description: "Uncompromising standards in every product" },
    { icon: Users, title: "Customer Focused", description: "Your success is our priority" },
    { icon: Heart, title: "Integrity", description: "Honest and transparent business practices" },
    { icon: Clock, title: "24/7 Available", description: "Round-the-clock support and service" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingWhatsApp />
      <div className="pt-32 pb-16">
        {/* About ARSTECH (Introduction Section) + Mission & Vision - Combined and uses the first alternating background */}
        {/* Changed background color to FCFCFF */}
        <section className="mb-16 py-16 bg-[#FCFCFF]">
          <div className="max-w-7xl mx-auto px-4">
            {/* Introduction Content */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">
              <div className="lg:col-span-3 animate-on-scroll">
                <h1 className="text-5xl font-bold text-foreground mb-6">
                  About -
                  <span
                    className="bg-gradient-to-r from-[#ff2c2c] to-[#004578]     /* Default gradient */
                               bg-clip-text text-transparent                     /* Apply gradient to text */
                               hover:from-[#004578] hover:to-[#ff2c2c]           /* Hover gradient (reversed) */
                               transition-all duration-300                       /* Smooth transition on hover */
                               "
                  >
                    - ARSTECH
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Established in 2012, ARS Tech is a leading technology-driven company based in Telangana, India. As a Sole Proprietorship, we specialize in manufacturing, wholesaling, and trading innovative automation systems.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our core mission is to provide comprehensive water management solutions for domestic, industrial, and agricultural sectors. We are pioneers in products like Wireless Water Level Controllers, Home Protectors, and especially mobile-based automatic water pump controllers and starters, which have significantly impacted the agricultural field. We also offer customized solutions for various needs, including residential, commercial, and public lighting.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Committed to quality and driven by a dynamic team at our technology center, we strive to deliver excellent products and provide expert site inspection and installation services throughout Telangana and Andhra Pradesh, with technicians based in each district headquarters.
                </p>

                {/* --- ADDED CERTIFICATES IMAGE HERE --- */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Certifications</h3>
                  <img
                    src="/assets/about/certificates.webp"
                    alt="ARS Tech Certificates"
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                  />
                </div>
                {/* --- END ADDED CERTIFICATES IMAGE --- */}
              </div>
              <div className="lg:col-span-2 animate-on-scroll">
                <img
                  src="/assets/about/office.webp"
                  alt="ARSTECH Office"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Mission & Vision - Now part of the About ARSTECH section */}
            <div className="animate-on-scroll">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <Target className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide innovative, reliable, and customer-centric embedded solutions that enhance efficiency and productivity across various industries while maintaining the highest standards of quality and service.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <Lightbulb className="text-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading embedded engineering company in India, recognized for our innovation, quality, and commitment to transforming how businesses and individuals interact with technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story - Second alternating background */}
        {/* Changed background color to F4F4FB */}
        <section className="mb-16 py-16 bg-[#F4F4FB]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">From Vision to Reality</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  ARSTECH was born in 2012 from a simple yet powerful vision: to make embedded technology accessible and beneficial for everyone. What started as a one-person operation has grown into a trusted name in the embedded systems industry.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Over the years, we've evolved from creating simple automation solutions to developing complex, customized embedded systems for commercial and industrial applications. Our journey has been marked by continuous learning, innovation, and an unwavering commitment to quality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, ARSTECH stands as a testament to the power of dedication, technical expertise, and customer-first approach in building lasting business relationships.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="ARSTECH Journey"
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Third alternating background */}
        {/* Changed background color to FCFCFF */}
        <section className="mb-16 py-16 bg-[#FCFCFF]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center bg-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-t-lg"
                  />
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The ARSTECH Way - Fourth alternating background */}
        {/* Changed background color to F4F4FB */}
        <section className="mb-16 py-16 bg-[#F4F4FB]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">The ARSTECH Way</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <value.icon className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones (Our Achievements) - Fifth alternating background */}
        {/* Changed background color to FCFCFF */}
        <section className="py-16 animate-on-scroll bg-[#FCFCFF]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center bg-primary/10 p-8 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-lg font-semibold text-foreground">Products Delivered</div>
              </div>
              <div className="text-center bg-primary/10 p-8 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-lg font-semibold text-foreground">Custom Projects Completed</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;