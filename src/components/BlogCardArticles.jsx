import { useNavigate } from "react-router-dom";

export function BlogCard({ animal }) {
  //   console.log(animal);
  const navigator = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-4" key={animal.id}>
        <a
          href="#"
          className="relative h-[212px] sm:h-[360px]"
          onClick={navigator("/landingpage")}
        >
          <img
            className="w-full h-full object-cover rounded-md"
            src={animal.image}
            alt="Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do"
          />
        </a>
        <div className="flex flex-col">
          <div className="flex">
            <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
              {animal.category}
            </span>
          </div>
          <a href="#">
            <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
              {animal.title}
            </h2>
          </a>
          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
            {animal.description}
          </p>
          <div className="flex items-center text-sm">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
              alt="Tomson P."
            />
            <span>{animal.author}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>{animal.date}</span>
          </div>
        </div>
      </div>
    </>
  );
}
