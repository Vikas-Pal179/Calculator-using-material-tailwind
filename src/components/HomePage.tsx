// import { Button } from "@material-tailwind/react";
// import { useNavigate } from "react-router";
// function HomePage() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <p className="text-red-700 text-3xl">homepage</p>
//       <button onClick={() => navigate("/about")}>Navigate to Aboutpage</button>
//       <Button>Button</Button>;
//     </div>
//   );
// }

// export default HomePage;

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";

export default function HomePage() {
  const [firstFrag, setFirstFrag] = React.useState<string>("");
  const [operator, setOperator] = React.useState<string>("");
  const [secFrag, setSecFrag] = React.useState<string>("");
  const [ans, setAns] = React.useState<number | undefined>(undefined);

  const oper = ["+", "-", "*", "/"];
  function handleCalculation() {
    switch (operator) {
      case "+":
        setAns(Number(firstFrag) + Number(secFrag));
        break;
      case "-":
        setAns(Number(firstFrag) - Number(secFrag));
        break;
      case "*":
        setAns(Number(firstFrag) * Number(secFrag));
        break;
      default:
        setAns(Number(firstFrag) / Number(secFrag));
        break;
    }
  }
  console.log(firstFrag, "firstFrag");
  return (
    <div>
      <h1 className="p-10 bg-[#f0f0f0f0] text-center text-3xl text-black">
        Calculator Using Material Tailwind
      </h1>
      <div className="container mx-auto">
        <Card className="mt-10 w-96 mx-auto">
          <CardHeader
            color="blue-gray"
            className="relative h-24 flex items-center justify-center"
          >
            <div>
              {firstFrag} {operator} {secFrag} {ans && <>= {ans}</>}
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-x-2 space-y-2">
              <div></div>
              {Array(10)
                .fill(1)
                .map((item: number, index: number) => (
                  <React.Fragment key={index}>
                    <Button
                      onClick={() => {
                        if (operator)
                          return setSecFrag(secFrag.concat(String(index)));
                        setFirstFrag(firstFrag.concat(String(index)));
                      }}
                    >
                      {index}
                    </Button>
                  </React.Fragment>
                ))}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="space-x-2 space-y-2">
              <div>OPERATORS</div>
              {oper.map((item: string, index: number) => (
                <React.Fragment key={index}>
                  <Button onClick={() => setOperator(item)}>{item}</Button>
                </React.Fragment>
              ))}
            </div>

            <Button className="mt-10" onClick={() => handleCalculation()}>
              Calculate
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
