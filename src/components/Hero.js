import { FacebookShare,TwitterShare,WhatsappShare,TelegramShare,EmailShare } from 'react-share-kit/dist/index.es'

const Hero = () => {
  const shareUrl = 'https://pagesonfire.com/';
  const shareTitle = 'the directory of books!';
  return (
    <div className="relative bg-gray-100 text-center py-16 lg:py-32">

      <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-gray-900">Discover Your Next Adventure: Explore Our Book Collection!</h1>
      <p className="mt-2 text-base sm:text-lg lg:text-2xl text-gray-900">Stop getting lost...</p>
      <div className='py-2'>
      <WhatsappShare
  url={shareUrl}
  title={shareTitle}
  separator=":: "
  round="true"
  size={"32px"}
  onClick={() => {
    // Track the share button click event
    trackEvent('Share Button Clicked', {
      platform: 'WhatsApp',
      url: shareUrl,
      title: shareTitle,
    });
  }}
> </WhatsappShare>
  <TelegramShare
  url={shareUrl}
  title={shareTitle}
  separator=":: "
  round="true"
  size={"32px"}
   onClick={() => {
    // Track the share button click event
    trackEvent('Share Button Clicked', {
      platform: 'Telegram',
      url: shareUrl,
      title: shareTitle,
    });
  }}>
 </TelegramShare>
  <TwitterShare
  url={shareUrl}
  title={shareTitle}
  separator=":: "
  round="true"
  size={"32px"}
   onClick={() => {
    // Track the share button click event
    trackEvent('Share Button Clicked', {
      platform: 'Twitter',
      url: shareUrl,
      title: shareTitle,
    });
  }}>
</TwitterShare>  
    </div> 
    </div>
  );
};

export default Hero;
