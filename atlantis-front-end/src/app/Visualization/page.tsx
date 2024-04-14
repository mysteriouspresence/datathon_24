"use client";
import ReactFlow, {
  Controls,
  Background,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import data from "./_components/Nodehandling";
import { TRPCReactProvider } from "~/trpc/react";
import { NextUIProvider, Spinner } from "@nextui-org/react";
import { Suspense } from "react";
import { edges } from "./_components/Edges";

function page() {
  return (
    <NextUIProvider>
      <Suspense fallback={<Spinner />}>
        <TRPCReactProvider>
          <div style={{ height: "100vh" }}>
            <ReactFlow className="w-full h-100vh" nodes={data} fitView edges={edges}>
              <Controls position="top-left" />

              <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
          </div>
        </TRPCReactProvider>
      </Suspense>
    </NextUIProvider>
  );
}

export default page;
