import React, { useEffect, useRef, useState } from "react";
import "../../styles/speed.scss"
import * as d3 from "d3";
//import { VscSmiley } from "react-icons/vsc";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { IoSad } from "react-icons/io5";
import { FaSadCry } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { FaAngry } from "react-icons/fa";
import { FaSadTear } from "react-icons/fa";
import { BsEmojiGrimaceFill } from "react-icons/bs";

const Speedometer = ({speed,setSpeed}) => {
  const svgRef = useRef(null); 

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous elements
  
    // Define dimensions
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
    
    // Define segment colors
    const segmentColors = ["green", "yellowgreen", "yellow", "orange", "orangered", "red"];
    const segmentCount = segmentColors.length;
    const subSegmentCount = 4; // Each big segment will have 4 sub-segments
    const totalSegments = segmentCount * subSegmentCount;
    
    // Create gauge segments
    const segmentAngle = Math.PI / totalSegments;
    
    segmentColors.forEach((color, i) => {
      for (let j = 0; j < subSegmentCount; j++) {
        const segmentArc = d3.arc()
          .innerRadius(radius - 40)
          .outerRadius(radius - 20)
          .startAngle(-Math.PI / 2 + (i * subSegmentCount + j) * segmentAngle)
          .endAngle(-Math.PI / 2 + (i * subSegmentCount + j + 1) * segmentAngle);
  
        svg.append("path")
          .attr("d", segmentArc())
          .attr("fill", color)
          .attr("transform", `translate(${width / 2},${height / 2})`);
  
        // White separator lines between sub-segments
        const separatorArc = d3.arc()
          .innerRadius(radius - 42)
          .outerRadius(radius - 18)
          .startAngle(-Math.PI / 2 + (i * subSegmentCount + j + 1) * segmentAngle - 0.002)
          .endAngle(-Math.PI / 2 + (i * subSegmentCount + j + 1) * segmentAngle + 0.002);
  
        svg.append("path")
          .attr("d", separatorArc())
          .attr("fill", "white")
          .attr("transform", `translate(${width / 2},${height / 2})`);
      }
    });
    
    // Needle
    const needle = svg.append("line")
      .attr("x1", width / 2)
      .attr("y1", height / 2)
      .attr("x2", width / 2)
      .attr("y2", height / 2 - radius + 40)
      .attr("stroke", "black")
      .attr("stroke-width", 4);
    
    // Update function for needle rotation
    const updateNeedle = (value) => {
      const angleScale = d3.scaleLinear()
        .domain([0, 100]) // Speed range
        .range([-90, 90]); // Angle range in degrees

      const angle = angleScale(value);

      needle.attr("transform", `rotate(${angle},${width / 2},${height / 2})`);
    };
    
    updateNeedle(speed);
  }, [speed]);
  

  return (
    <div className="speedo">
      <svg ref={svgRef}></svg>
      <div className="emoji" style={{display:"flex",gap:"10px", justifyContent:"center", marginBottom:"10px"}} >
        <FaSmile onClick={(e) => setSpeed(Number(16))}  value={speed}  color="#55C03A" fontSize="30px"   />
          <FaFaceGrinHearts onClick={(e) => setSpeed(Number(32)) } value={speed} color="#BBBB0F" fontSize="30px"   />
            <FaSadCry  onClick={(e) => setSpeed(Number(48))} value={speed} color="#FFFF02" fontSize="30px"  />
              <FaSadTear onClick={(e) => setSpeed(Number(64))} value={speed} color="#FBA500" fontSize="30px" />
                <FaAngry onClick={(e) => setSpeed(Number(80))} value={speed} color="#F84600" fontSize="30px" />
                <BsEmojiGrimaceFill onClick={(e) => setSpeed(Number(100))} value={speed} color="#F80100" fontSize="30px"  />
      </div>
      
    </div>
  );
};

export default Speedometer;
