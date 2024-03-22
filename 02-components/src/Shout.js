
function Shout(props) {
    console.log(props.msg);
    return <div style={{
      backgroundColor:props.bgcolor,
      padding:"20px",
      marginTop: "10px",
      marginBottom: "10px",
      color:"darkblue",
    }}>
      {props.msg.toUpperCase()}
    </div>
  }

  export default Shout;