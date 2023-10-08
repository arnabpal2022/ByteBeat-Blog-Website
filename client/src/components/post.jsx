import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";


export default function Post(props) {
  return (
    <div
      className="overflow-hidden transition-shadow duration-300 bg-white rounded"
      key={props.id}
    >
      <Link to={`/posts/${props._id}`} aria-label="Article">
        <img
          src={'http://localhost:4000/'+props.cover}
          className="object-cover w-full h-64 rounded"
          alt={props.cover} 
        />
      </Link>
      <div className="py-5">
        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
          {formatISO9075(new Date(props.createdAt))}
        </p>
        <Link
          to={`/posts/${props._id}`}
          aria-label="Article"
          className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <p className="text-2xl font-bold leading-5">{props.title}</p>
        </Link>
        <p className="mb-4 text-gray-700">{props.summary}</p>
      </div>
    </div>
  );
}
