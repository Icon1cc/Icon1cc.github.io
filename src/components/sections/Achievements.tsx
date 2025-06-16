import { useState } from 'react';
import { X, Calendar, Award } from 'lucide-react';
import { achievements } from '../../data/achievements';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAchievement(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              onClick={() => openModal(achievement)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                    {achievement.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award size={16} className="text-yellow-500" />
                  <span className="text-sm text-gray-400">{achievement.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedAchievement && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="bg-gray-800 rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto relative animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-gray-900/80 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>

              <img 
                src={selectedAchievement.image} 
                alt={selectedAchievement.title}
                className="w-full max-h-[80vh] object-cover rounded-t-2xl"
              />

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-3">
                  {selectedAchievement.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedAchievement.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <Calendar size={16} />
                  <span>{selectedAchievement.date}</span>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {selectedAchievement.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
