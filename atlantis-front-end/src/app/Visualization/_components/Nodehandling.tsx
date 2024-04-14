import ReactFlow, { Controls, Background, type Node, BackgroundVariant } from "reactflow";

const data: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },
  {
    id: "2",
    data: { label: "Another Node" },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    data: { label: "A Node" },
    position: { x: 400, y: 125 },
  },
];

export default data;