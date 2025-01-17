import Pill from "./Pill";

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Luxury", "Beachfront"];

const Filters: React.FC = () => {
  const handleFilterClick = (filter: string) => {
    console.log(`Filter clicked: ${filter}`);
  };

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto flex space-x-4">
        {filters.map((filter, index) => (
          <Pill key={index} label={filter} onClick={() => handleFilterClick(filter)} />
        ))}
      </div>
    </section>
  );
};

export default Filters;
