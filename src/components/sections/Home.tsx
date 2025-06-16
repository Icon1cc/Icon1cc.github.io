import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Rishabh Tiwari
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Software Developer & Machine Learning Engineer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions at the intersection of software development and artificial intelligence. 
            Building the future, one line of code at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="/assets/resume.pdf" download>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </a>

            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-400 text-gray-800 hover:bg-gray-800 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              onClick={() =>
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={32} />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              aria-label="Go to Contact"
            >
              <Mail size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
