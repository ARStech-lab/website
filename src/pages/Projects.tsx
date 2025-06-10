
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Projects = () => {
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('fade-left')) {
              entry.target.classList.add('fade-in-left');
            } else if (entry.target.classList.contains('fade-right')) {
              entry.target.classList.add('fade-in-right');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-left, .fade-right');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Smart Water Management for Residential Complex",
      challenge: "A 200-unit residential complex needed automated water distribution and monitoring system to ensure equitable water supply and prevent wastage.",
      solution: "Implemented IoT-enabled water level controllers with real-time monitoring dashboard, automated pump controls, and SMS alerts for maintenance.",
      outcome: "40% reduction in water wastage and 99.9% uptime for water supply system.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Industrial Power Management System",
      challenge: "Manufacturing unit required intelligent power distribution system to optimize energy consumption and prevent equipment damage from power fluctuations.",
      solution: "Developed custom power management controllers with load balancing, surge protection, and predictive maintenance capabilities.",
      outcome: "25% energy savings and zero equipment failures due to power issues.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Automated Greenhouse Control System",
      challenge: "Agriculture facility needed precise environmental control for optimal crop growth with minimal human intervention.",
      solution: "Created integrated system controlling irrigation, ventilation, temperature, and humidity with weather forecast integration.",
      outcome: "35% increase in crop yield and 50% reduction in manual monitoring time.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Smart Campus Energy Management",
      challenge: "Educational institution wanted to reduce energy costs while maintaining optimal learning environment across multiple buildings.",
      solution: "Implemented centralized control system for lighting, HVAC, and power distribution with occupancy-based automation.",
      outcome: "30% reduction in energy bills and improved campus-wide environmental monitoring.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingWhatsApp />
      <h1> random text to space </h1>
      <h1> random text to space </h1>
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Opening Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-8">
              <span className="bg-gradient-to-r from-primary to-[#ff2c2c] bg-clip-text text-transparent">
                WE ALSO MAKE CUSTOMIZED PRODUCTS
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every challenge is unique, and so are our solutions. Discover how we've partnered with businesses 
              to create tailored embedded systems that solve real-world problems.
            </p>
          </div>

          {/* Projects Showcase */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Alternating layout: even projects have image on left, odd on right */}
                {index % 2 === 0 ? (
                  <>
                    <div className="fade-left">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-80 object-cover rounded-lg shadow-xl"
                      />
                    </div>
                    <div className="fade-right space-y-6">
                      <h2 className="text-3xl font-bold text-foreground">
                        {project.title}
                      </h2>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Solution</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Outcome</h3>
                        <p className="text-muted-foreground leading-relaxed font-medium">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="fade-left space-y-6">
                      <h2 className="text-3xl font-bold text-foreground">
                        {project.title}
                      </h2>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Solution</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Outcome</h3>
                        <p className="text-muted-foreground leading-relaxed font-medium">
                          {project.outcome}
                        </p>
                      </div>
                    </div>
                    <div className="fade-right">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-80 object-cover rounded-lg shadow-xl"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-12 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Custom Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can create a tailored solution for your unique requirements.
            </p>
            <a
              href="https://wa.me/919494947970"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg inline-block"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
