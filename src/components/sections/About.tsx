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
              I'm a software developer and machine learning enthusiast currently working at Porsche Engineering and SAP. At Porsche, I'm building tools that turn geospatial data into real-world driving simulations, and I’m also exploring how large language models can help with map-based systems. At SAP, I’m focused on frontend development using SAPUI5, fixing bugs, and helping build features that improve real user workflows.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My background includes working on projects across machine learning, full-stack development, and even VR integrations with robotics. I enjoy switching between research and real-world software problems.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether I’m working on a game prototype or optimizing LLM models for research, I love learning and building things that make tech more usable, smart, and scalable.
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
