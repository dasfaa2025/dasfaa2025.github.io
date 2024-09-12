const PageBanner = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      className="banner py-24"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className="banner-content text-[36px] max-w-[650px] font-bold">
        {title}
      </div>
    </div>
  );
};

export default PageBanner;
