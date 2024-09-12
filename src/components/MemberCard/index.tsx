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
        className="m-0 mb-2 aspect-square w-full rounded-xl block transition-all hover:shadow-lg"
        src={cover}
      />
      <div className="text-center">{title}</div>
    </div>
  );
};

export default MemberCard;
