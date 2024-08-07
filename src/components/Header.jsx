import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Css/Header.css" ;
import headerImg from "../assets/btc.png"
const Header = () => {
  return (
    <HStack style={{justifyContent:"center", alignContent:"center"} } spacing='10%' p={"5"} shadow={"base"} bgColor={"blackAlpha.900"} >
     <img src={headerImg} alt="Crypto" style={{height:"4%",width:"4%"}}></img>
      <Button  variant={"unstyled"} color={"white"} >
        <Link className="bttn-text" to="/">Home</Link>
      </Button>
      <Button  variant={"unstyled"} color={"white"}>
        <Link className="bttn-text" to="/coins">Coins</Link>
      </Button>
      <Button  variant={"unstyled"} color={"white"}>
        <Link className="bttn-text" to="/exchanges">Exchanges</Link>
      </Button>
      
    </HStack>
  );
};

export default Header;
