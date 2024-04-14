"use client";
import ReactFlow, { Controls, Background, type Node, BackgroundVariant } from "reactflow";
import "reactflow/dist/style.css";
import data from "./_components/Nodehandling";

function page() {
  return (
    <div style={{ height: "1000px" }}>
      <ReactFlow className="w-[300px]" nodes={data} fitView>
        <Controls position="top-left" />

        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default page;
