const PageBanner = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      className="banner pt-28 pb-20"
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className="banner-content text-[46px] max-w-[650px] font-bold">
        {title}
      </div>
    </div>
  );
};

export default PageBanner;
