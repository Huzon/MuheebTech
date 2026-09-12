import { ArrowRight, Images } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/projects";

export const ProjectShowcase = ({ compact = false }: { compact?: boolean }) => (
  <section id="selected-work" className={`py-20 ${compact ? "bg-gray-50" : "bg-white"}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {compact && (
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-900 mb-3">Selected projects</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Spaces. Details. Possibilities.</h2>
          </div>
          <a href="/gallery" className="inline-flex items-center font-bold text-blue-900 shrink-0">View all projects <ArrowRight className="ml-2 w-5 h-5" /></a>
        </div>
      )}
      <div className={compact ? "grid md:grid-cols-2 lg:grid-cols-4 gap-7" : "grid md:grid-cols-2 gap-9"}>
        {projects.map((project) => (
          <article key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img src={project.cover} alt={`${project.title} cover`} loading="lazy" decoding="async" width="1200" height="900" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 md:p-7 flex flex-col flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-900 mb-2">{project.category}</p>
              <h2 className={`${compact ? "text-xl" : "text-2xl"} font-bold text-gray-900 mb-3`}>{project.title}</h2>
              <ProjectGalleryButton project={project} />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ProjectGalleryButton = ({ project }: { project: Project }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50">
        <Images className="w-4 h-4 mr-2" /> View Project Images
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        <DialogDescription>{project.category} image gallery</DialogDescription>
      </DialogHeader>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {project.images.map((image, index) => (
          <img key={image.src} src={image.src} alt={image.alt} loading="lazy" decoding="async" width="1400" height="1050" className={`w-full h-64 object-cover rounded-xl ${index === 0 ? "md:col-span-2 md:h-[440px]" : ""}`} />
        ))}
      </div>
    </DialogContent>
  </Dialog>
);
