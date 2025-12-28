"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollToTop from "@/components/ScrollToTop";
import { clients } from "@/lib/content";
import { getProjectImage } from "@/lib/images";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-primary">
      <Header forceScrolled={true} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="default" className="mb-4">
              Clients & Partnership
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Featured Projects
            </h1>
            <p className="text-lg text-neutral-200">
              Explore our portfolio of successful electrical panel installations across various industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col group hover:bg-white transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={getProjectImage(project.name)}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="yellow">{project.category}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary mb-2 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-sm text-neutral-300 group-hover:text-primary mb-4 transition-colors duration-300">
                      {project.location}
                    </p>
                    <p className="text-neutral-200 group-hover:text-primary mb-4 leading-relaxed flex-grow transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <div className="w-full h-1 bg-neutral-100 rounded-full mb-4">
                        <div className="h-full bg-primary rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Contact us today to discuss your electrical panel needs
            </p>
            <Link href="/#contact">
              <Button variant="secondary">Get In Touch</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}

