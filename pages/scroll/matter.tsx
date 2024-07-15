import React, { useEffect, useRef, useState } from "react";
import {
  Engine,
  Render,
  Runner,
  Bodies,
  Composite,
  Vector,
  Body,
  Mouse,
  MouseConstraint,
  Events,
  Common,
} from "matter-js";

type EngineProps = React.MutableRefObject<Engine | null>;
type RenderProps = React.MutableRefObject<Render | null>;
type ElementProps = React.MutableRefObject<HTMLDivElement | null>;
type CanvasProps = React.MutableRefObject<HTMLCanvasElement | null>;

const WALL_DEPTH = 100;
const BODY_SCALE = 0.05;

export default function MatterPage() {
  const [hasMounted, setHasMounted] = useState(false);
  const engineRef: EngineProps = useRef(null);
  const renderRef: RenderProps = useRef(null);
  const elementRef: ElementProps = useRef(null);
  const canvasRef: CanvasProps = useRef(null);

  const rightWallRef = useRef(null);
  const groundRef = useRef(null);

  useEffect(() => {
    if (hasMounted) return;
    setHasMounted(true);
    // create an engine
    engineRef.current = Engine.create();

    // create a renderer
    renderRef.current = Render.create({
      element: elementRef.current,
      engine: engineRef.current,
      canvas: canvasRef.current,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: window.devicePixelRatio,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false,
      },
    });

    // Set pixel ratio
    // @ts-ignore
    Render.setPixelRatio(renderRef.current, "auto");

    let circleDiameter = window.innerWidth * BODY_SCALE;
    for (let i = 0; i < 30; i++) {
      let circle = Bodies.circle(i, circleDiameter, circleDiameter / 2, {
        friction: 0.3,
        frictionAir: 0.00001,
        restitution: 0.8,
        label: "ball",
      });
      Composite.add(engineRef.current.world, circle);
    }

    groundRef.current = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + WALL_DEPTH / 2,
      window.innerWidth,
      WALL_DEPTH,
      { isStatic: true, label: "ground" }
    );

    let leftWall = Bodies.rectangle(
      0 - WALL_DEPTH / 2,
      window.innerHeight / 2,
      WALL_DEPTH,
      window.innerHeight * 5,
      {
        isStatic: true,
        label: "leftWall",
      }
    );

    rightWallRef.current = Bodies.rectangle(
      window.innerWidth + WALL_DEPTH / 2,
      window.innerHeight / 2,
      WALL_DEPTH,
      window.innerHeight * 5,
      { isStatic: true, label: "rightWall" }
    );

    // add all of the bodies to the world
    Composite.add(engineRef.current.world, [
      groundRef.current,
      leftWall,
      rightWallRef.current,
    ]);

    let mouse = Mouse.create(renderRef.current?.canvas);
    let mouseConstraint = MouseConstraint.create(engineRef.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engineRef.current.world, mouseConstraint);

    // allow scroll through the canvas
    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );

    // run the renderer
    Render.run(renderRef.current);

    // create runner
    const runner = Runner.create();

    // run the engine
    Runner.run(runner, engineRef.current);

    return () => {
      // const render = renderRef.current!;
      // Render.stop(renderRef.current);
      // render.canvas.remove();
      // @ts-ignore
      // render.canvas = null;
      // @ts-ignore
      // render.context = null;
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      const render = renderRef.current;
      const width = 500;
      const height = 500;
      // const width = window.innerWidth;
      // const height = window.innerHeight;
      render.bounds.max.x = width;
      render.bounds.max.y = height;
      render.options.width = width;
      render.options.height = height;
      render.canvas.width = width;
      render.canvas.height = height;

      // reposition ground
      Body.setPosition(
        groundRef.current,
        Vector.create(width / 2, height + WALL_DEPTH / 2)
      );

      // reposition right wall
      Body.setPosition(
        rightWallRef.current,
        Vector.create(width + WALL_DEPTH / 2, height / 2)
      );

      const allBodies = Composite.allBodies(engineRef.current.world);

      allBodies.forEach((body: any) => {
        // don't scale walls and ground
        if (body.isStatic !== true) {
          const { min, max } = body.bounds;
          const bodyWidth = max.x - min.x;
          let scaleFactor = (width * BODY_SCALE) / bodyWidth;
          Body.scale(body, scaleFactor, scaleFactor);
        }

        // scale ground width
        if (body.label === "ground") {
          const { min, max } = body.bounds;
          const bodyWidth = max.x - min.x;
          let scaleFactor = (width * 1) / bodyWidth;
          Body.scale(body, scaleFactor, 1);
        }
      });

      Render.setPixelRatio(render, window.devicePixelRatio);
    }

    window.addEventListener("resize", () => handleResize());

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="app">
      <div className="wrapper" ref={elementRef}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
