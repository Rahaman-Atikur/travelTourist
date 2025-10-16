import type React from "react";
export interface DestinationData {
  id: number;
  name: string;
  image: string;
  description: string;
  [key: string]: unknown;
}
interface CardProps {
  singleData: DestinationData;
}
const Card: React.FC<CardProps> = ({ singleData }) => {
  console.log(singleData);
  return (
    <div>
      <div className="card bg-base-100 image-full w-96 shadow-sm mx-auto mt-5 brightness-300">
        <figure>
          <img src={singleData.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{singleData.name}</h2>
          <p>{singleData.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Visit Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
