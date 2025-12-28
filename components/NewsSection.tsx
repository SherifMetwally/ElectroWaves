"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { clients } from "@/lib/content";
import { getProjectImage } from "@/lib/images";
import { withBasePath } from "@/lib/basePath";

// Use first 2 clients as featured projects
const featuredProjects = clients.slice(0, 2);

export default function NewsSection() {
  return (
    <section id="projects" className="py-20">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
              Our Featured Projects
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/projects">
              <Button variant="secondary" className="flex items-center gap-2">
                <span>View All Projects</span>
                <span className="w-2 h-2 rounded-full bg-neutral-900" />
              </Button>
            </Link>
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
              className="h-full"
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:bg-white transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
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
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary mb-3 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-neutral-200 group-hover:text-primary mb-4 leading-relaxed flex-grow transition-colors duration-300">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects#project-${project.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors mt-auto"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Learn More
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

