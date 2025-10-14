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
      {/* <img src={singleData.image} alt="" />
       */}
      <p>{singleData.name}</p>
      {/* <h2>{singleData.image}</h2> */}
      <img src={singleData.image} alt="" />
    </div>
  );
};

export default Card;
