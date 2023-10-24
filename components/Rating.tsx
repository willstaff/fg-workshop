"use client"

import { useState } from "react";
import Text from "./Text";

type Props = {
  value: number;
};

const Rating: React.FC<Props> = ({ value: initialValue }) => {
  const [hoverValue, setHoverValue] = useState<null | number>(null);
  const [ratingValue, setRatingValue] = useState<number>(initialValue);

  return (
    <Text
      color="white"
      size={32}
      style={{ lineHeight: 1, cursor: "pointer" }}
      onMouseLeave={() => setHoverValue(null)}
    >
      {"★"
        .repeat(hoverValue || ratingValue)
        .padEnd(5, "☆")
        .split("")
        .map((star, index) => (
          <span
            key={index}
            onClick={() => {
              setRatingValue(index + 1);
            }}
            onMouseMove={() => setHoverValue(index + 1)}
          >
            {star}
          </span>
        ))}
    </Text>
  );
};

export default Rating;
