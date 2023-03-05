import { FC, useState } from 'react';
interface propsType {
  count: number;
}

const About: FC<propsType> = (props) => {
  return (
    <>
      <>组件传参：{props.count}</>
    </>
  );
}

export default About;