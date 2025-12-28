"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { clients } from "@/lib/content";
import { getProjectImage } from "@/lib/images";

// Use first 2 clients as featured projects
const featuredProjects = clients.slice(0, 2);

export default function NewsSection() {
  return (
    <section id="projects" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <div>
            <Badge variant="default" className="mb-3">
              Clients & Partnership
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mt-2">
              Our Featured Projects
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="/projects">
              <Button variant="secondary" className="flex items-center gap-2">
                <span>View All Projects</span>
                <span className="w-2 h-2 rounded-full bg-neutral-900" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
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
                    <Badge variant="yellow">Project</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={`/projects#project-${project.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Learn More
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

