const MemberCard = ({
  title,
  cover,
}: {
  title: React.ReactNode;
  cover: string;
}) => {
  return (
    <div>
      <img
        className="m-0 mb-2 aspect-square w-full rounded-2xl block transition-all duration-300 bg-black/5 hover:shadow-lg max-sm:rounded-xl"
        src={cover}
      />
      <div className="text-center">{title}</div>
    </div>
  );
};

export default MemberCard;
