import React from "react";

export default function StarRating({ stars, size }) {
  const styles = {
    width: size + "px",
    height: size + "px",
    marginRight: size / 6 + "px",
  };
  return <div>StarRating</div>;
}

function Star({ number }) {
  const halfNumber = number - 0.5;

  return stars >= number ? (
    <img src="/star-full.svg" style={styles} alt={number} />
  ) : stars >= halfNumber ? (
    <img src="/star-half.svg" style={styles} alt={number} />
  ) : (
    <img src="/star-empty.svg" style={styles} alt={number} />
  );
}

StarRating.defaultProps = {
  size: 18,
};
