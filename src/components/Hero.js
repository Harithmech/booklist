import { FacebookShare,TwitterShare,WhatsappShare,TelegramShare,EmailShare } from 'react-share-kit/dist/index.es'

const Hero = () => {
  const shareUrl = 'https://pagesonfire.com/';
  const shareTitle = 'the directory of books!';
  return (
    <div className="relative bg-gray-100 text-center py-16 lg:py-32">
      
      <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-gray-900">
        Opening Doors to Infinite Worlds: 
        <span className="text-red-500">Explore</span>, 
        <span className="text-blue-500">Read</span>,
        <span className="text-green-500">Connect</span>
      </h1>

      <p className="mt-2 text-base sm:text-lg lg:text-2xl text-gray-900">Explore the best in every genre with our curated top 10 book lists, each promising to captivate and inspire.</p>
      

    </div>
  );
};

export default Hero;