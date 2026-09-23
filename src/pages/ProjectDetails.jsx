import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaLightbulb,
} from "react-icons/fa";
import { projectsData } from "../data/projectsData";

const renderDescription = (description) =>
  description.split("\n").map((line, index) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) return <div key={index} className="h-2" />;

    if (trimmedLine.startsWith("**") && trimmedLine.endsWith("**")) {
      return (
        <h3 key={index} className="text-lg font-bold mt-5 mb-2">
          {trimmedLine.replaceAll("**", "")}
        </h3>
      );
    }

    if (trimmedLine.startsWith("• ")) {
      return (
        <p key={index} className="mb-2 pl-4 before:content-['•'] before:mr-2">
          {trimmedLine.slice(2)}
        </p>
      );
    }

    return (
      <p key={index} className="mb-4">
        {line}
      </p>
    );
  });

const ProjectDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));
  const projectImages = project?.images?.length
    ? project.images
    : project
      ? [project.image]
      : [];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="btn btn-primary">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/#projects" className="btn btn-ghost gap-2 mb-8">
          <FaArrowLeft />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {project.name}
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Project Images */}
        <div className="mb-12">
          <img
            src={projectImages[0]}
            alt={project.name}
            className="w-full rounded-2xl shadow-2xl"
          />

          {projectImages.length > 1 && (
            <div className="flex flex-wrap gap-4 mt-4">
              {projectImages.slice(1).map((imgSrc, index) => (
                <button
                  key={imgSrc}
                  type="button"
                  onClick={() => setSelectedImage(imgSrc)}
                  className="rounded-xl overflow-hidden shadow-lg border border-base-300"
                >
                  <img
                    src={imgSrc}
                    alt={`${project.name} thumbnail ${index + 2}`}
                    className="w-48 h-32 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Description */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <div className="prose prose-lg max-w-none text-base-content/80">
                {renderDescription(project.fullDescription)}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-base-200 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaCheckCircle className="text-warning" />
                Challenges Faced
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-warning/20 text-warning rounded-full flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-base-content/80">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future Improvements */}
            <div className="bg-base-200 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaLightbulb className="text-info" />
                Future Improvements
              </h2>
              <ul className="space-y-4">
                {project.futureImprovements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-info/20 text-info rounded-full flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-base-content/80">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Action Buttons */}
            <div className="bg-base-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full gap-2"
                >
                  <FaExternalLinkAlt />
                  View Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full gap-2"
                >
                  <FaGithub />
                  View Source Code
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-base-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="badge badge-primary badge-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-base-200 p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Project Info</h3>
              <ul className="space-y-3 text-base-content/70">
                <li className="flex justify-between">
                  <span>Status:</span>
                  <span className="badge badge-success">Completed</span>
                </li>
                <li className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-medium">Web Application</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <div className="mt-16 pt-12 border-t border-base-300">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projectsData
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="card bg-base-200 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <figure>
                    <img
                      src={p.images?.[0] || p.image}
                      alt={p.name}
                      className="w-full h-40 object-cover"
                    />
                  </figure>
                  <div className="card-body p-4">
                    <h4 className="card-title text-lg">{p.name}</h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-black font-bold shadow-lg"
              aria-label="Close image preview"
            >
              X
            </button>

            <img
              src={selectedImage}
              alt="Project preview"
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
