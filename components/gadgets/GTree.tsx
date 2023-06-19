"use client";
import React, {useEffect, useRef, useState} from "react";
import {a, useSpring} from "@react-spring/web";
import useMeasure from "react-use-measure";
import {Content, Frame, Title, toggle} from "./styles";
import * as Icons from "./icons";
import {Experience} from "types/experience";

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    name: string | JSX.Element;
  }
>(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });
  // @ts-ignore
  const Icon = Icons[
    `${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`
  ] as any;
  return (
    <Frame>
      <div className="flex justify-start items-stretch">
        <Icon
          style={{ ...toggle, opacity: children ? 1 : 0.4 }}
          onClick={() => setOpen(!isOpen)}
        />
        <Title
          style={style}
          className="text-slate-800 dark:text-slate-200 self-start"
        >
          {name}
        </Title>
      </div>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div ref={ref} style={{ y }}>
          {children}
        </a.div>
      </Content>
    </Frame>
  );
});

export default function GTree(props: { expList: Experience[] }) {
  const edu = props.expList.filter((exp) => exp.category === "EDU");
  const work = props.expList.filter((exp) => exp.category === "WORK");
  return (
    <Tree name="About me" defaultOpen>
      <ExpTree category="Work" expList={work} defaultOpen={false}></ExpTree>
      <ExpTree category="Education" expList={edu} defaultOpen={false}></ExpTree>
      <Tree
        name={
          <span className="dark:text-slate-200">
            🙀 More contents coming...
          </span>
        }
      />
    </Tree>
  );
}

Tree.displayName = "Tree";

const ExpTree = (props: {
  category: string;
  expList: Experience[];
  defaultOpen: boolean;
}) => {
  const today = new Date();
  return (
    <Tree name={props.category} defaultOpen={props.defaultOpen}>
      <ul className="w-full lg:w-full list-disc mx-2">
        {props.expList.map((edu, eduIdx) => {
          const startDate = new Date(edu.start);
          const endDate = new Date(edu.end);
          return (
            <li
              key={eduIdx}
              className="text-xs lg:text-sm text-slate-900 dark:text-slate-200"
            >
              <div
                className="grid grid-flow-dense
                  grid-cols-1 lg:grid-cols-4 
                  justify-items-stretch space-y-1
                  transition duration-300
                  rounded-lg p-1 
                hover:bg-sky-500/40"
              >
                <div className="col-span-1">{edu.institute}</div>
                <div className="lg:col-span-2 lg:block justify-end align-top py-0">
                  {edu.role}
                </div>
                <div className="justify-self-start">
                  {startDate.getFullYear()} ~{" "}
                  {endDate > today ? "Present" : endDate.getFullYear()}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Tree>
  );
};
