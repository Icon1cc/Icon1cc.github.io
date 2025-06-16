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
              I'm a passionate software developer with a deep fascination for machine learning and artificial intelligence. 
              My journey in technology spans from IoT systems and mobile applications to advanced NLP and computer vision projects.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With experience in both research and industry applications, I enjoy tackling complex problems that bridge 
              the gap between theoretical computer science and practical, real-world solutions. My work ranges from 
              developing proximity-based IoT monitoring systems to creating intelligent applications that leverage 
              state-of-the-art machine learning models.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I'm exploring the latest developments in AI research, contributing to open-source 
              projects, or working on innovative applications that push the boundaries of what's possible with technology.
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
