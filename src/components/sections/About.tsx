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
              I’m Rishabh, a passionate software developer and machine learning researcher currently working at Porsche Engineering. 
              My focus is building intelligent systems that blend cutting-edge ML techniques with real-world applications.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey spans across industries and roles — from developing geoJSON to OpenDRIVE conversion tools for autonomous driving, 
              to integrating VR-based driving assistants using Unity, C#, and Python. I'm also actively exploring LLMs for geospatial data interpretation.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Previously, I worked with SAP, Datrix AI, and the University of Heidelberg on projects involving NLP, LLMs, time-series forecasting, 
              and full-stack web development. I've built tools using React, FastAPI, Docker, and more to bridge the gap between research and usable tech.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Outside of work, I enjoy contributing to open-source, mentoring peers, and working on innovative apps — from EdTech hackathon prototypes 
              to multiplayer game engines. I thrive in roles that challenge both my coding and problem-solving skills.
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
