import { FileText } from 'lucide-react';
import { publications } from '../../data/publications';
import { Button } from '@/components/ui/button';

const Publications = () => {
  return (
    <section id="publications" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Publications
        </h2>

        <div className="space-y-8">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {publication.title}
                  </h3>
                  <p className="text-blue-400 mb-2 font-medium">
                    {publication.authors} ({publication.year})
                  </p>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {publication.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {publication.venue}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:ml-6">
                  <a
                    href={publication.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                      <FileText size={16} className="mr-2" />
                      Read Paper
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
