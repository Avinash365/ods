'use client';
import { useState } from "react";
import Button from "../ui/Button";
import Divider from "../ui/Divider";
import CourseStructure from "./CourseStructure";
import CurriImages from "./CurriImages";



const CurriculumDetails = () => {
  const [component, setComponent] = useState("Gallery");

  const handleComponentChange = (name) => {
    setComponent(name);
  };

  return (
    <div>
      <div className="flex gap-1 md:gap-7 mt-20 py-5 overflow-x-auto whitespace-nowrap">
        {["Gallery", "Fee Structure", "Reviews"].map((item) => (
          <Button
            key={item}
            text={item}
            onClick={() => handleComponentChange(item)}
          />
        ))}
      </div>

      <Divider />

      {/* Render selected component */}
      {component === "Gallery" && <CurriImages />}
      {component === "Fee Structure" && <CourseStructure />}

    </div>
  );
};

export default CurriculumDetails;
