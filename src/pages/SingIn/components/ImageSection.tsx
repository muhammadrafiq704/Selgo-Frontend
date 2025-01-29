import React from "react";
import Typography from "../../../components/Typography/Typography";

const ImageSection: React.FC = () => {
  return (
    <div className="image-container">
      <Typography
        fs={2.5}
        fw={700}
        text="Shop With Us"
        light={false}
        styleType="default"
        maxLines={1}
      />
      <Typography
        fs={1.1}
        fw={300}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id numquam rem, sequi voluptatem officiis eius, odit ratione quidem impedit repudiandae hic eaque, dicta perferendis vitae! Quod optio quaerat cum quisquam."
        light={false}
        styleType="span"
        maxLines={3}
        style={{ width: "80%", textAlign: "center" }}
      />
    </div>
  );
};

export default ImageSection;
