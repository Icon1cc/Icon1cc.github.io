const About = () => {
  const techStack = {
    Languages: ['C', 'C++', 'C#', 'Java', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Python'],
    Frameworks: ['React', 'React Native', 'Bootstrap', 'FastAPI', 'Node.js', 'Node-RED', 'Vite', 'WebGL', 'OpenCV', 'Apache Spark', 'Apache Kafka', 'Elasticsearch'],
    Databases: ['MySQL', 'SQLite', 'MongoDB', 'Firebase', 'Microsoft SQL Server'],
    ML: ['NumPy', 'Pandas', 'PyTorch', 'Scikit-learn', 'TensorFlow', 'Matplotlib', 'scipy', 'Keras', 'LLM', 'Large Language Models', 'NLP', 'Natural Language Processing', 'RAG', 'Retrieval Augmentation', 'Transformers'],
    DevOps: ['Docker', 'Heroku', 'Vercel'],
    Design: ['Figma'],
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="w-80 h-80 mx-auto md:mx-0 rounded-full overflow-hidden shadow-lg">
            <img
              src="/images/me.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hey, I’m Rishabh. I’m a software developer who’s also deeply into machine learning. Right now, I’m working at SAP, helping build better UI and software tools. I’ve also worked on ML tools, LLM research, and even built VR and game projects.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Over time, I’ve explored everything from IoT systems and NLP apps to driving simulations and open-source tools. I love creating things that solve real problems and enjoy learning by building.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I’m not coding, I’m probably exploring new AI papers, testing out prototypes, or working on side projects with cool tech like Unity, React, or Python.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20 space-y-12">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
