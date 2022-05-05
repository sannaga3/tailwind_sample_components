export const TopicItem = (prop) => {
  const { date, title, content } = prop.topic;

  return (
    <div className="container py-4 grid gap-1 grid-cols-4 font-semibold border-b-2 border-gray-500 text-center md:grid-cols-12 md:text-left md:py-4">
      <div className="md:col-span-2 col-span-1">{date}</div>
      <div className="md:col-span-2 col-span-2">{title}</div>
      <div className="md:col-span-6 col-span-4 text-left font-normal pl-5">
        {content}
      </div>
    </div>
  );
};