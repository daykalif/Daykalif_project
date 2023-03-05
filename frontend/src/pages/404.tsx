import img1 from "../assets/image/dva.png";

const NotFound = () => {
  return (
    <div>
      404...
      <br />
      <img
        src="https://img2.baidu.com/it/u=1837122525,4132569123&fm=253&fmt=auto&app=138&f=JPEG?w=396&h=500"
        alt=""
      />
      <br />
      <img src={require('../assets/image/dva.png')} alt="" />
      <img src={img1} alt="" />
    </div>
  );
}

export default NotFound;