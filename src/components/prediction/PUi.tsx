import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import React from "react";
type IProps = {
  randNum: number;
  accValue: number;
  increasingNum: number;
  timerToStartGame: number;
  userBettedAmt: number;
  setUserBettedAmt: (userBettedAmt: number) => void;
  totalAmt: number;
  seTotalAmt: (totalAmt: number) => void;
};
function PUi(props: IProps) {
  const {
    randNum,
    accValue,
    increasingNum,
    timerToStartGame,
    userBettedAmt,
    setUserBettedAmt,
    totalAmt,
    seTotalAmt,
  } = props;
  function isGameTimer() {
    if (timerToStartGame >= 0) return <p>Staring in {timerToStartGame}</p>;
    return (
      <p>
        {accValue}.{increasingNum}
      </p>
    );
  }
  React.useEffect(() => {
    setUserBettedAmt(0);
  }, [!!(randNum === Number(`${accValue}.${increasingNum}`))]);
  console.log(userBettedAmt, "userBettedAmt");
  return (
    <div>
      <div>
        <h1 className="p-10 bg-[#f0f0f0f0] text-center text-3xl text-black">
          This is Your Betting App
        </h1>
        <p className="text-center text-2xl text-black">
          Your Amt: Rs.{totalAmt}
        </p>
      </div>
      <div className="container mx-auto">
        <Card className="mt-10 w-96 mx-auto">
          <CardHeader color="cyan" className="relative h-24 ">
            <div className="h-full">
              <div
                className={
                  accValue === randNum
                    ? "text-red-900 text-3xl"
                    : "text-brown-500 text-3xl h-[70%] flex border items-center justify-center"
                }
              >
                {isGameTimer()}
              </div>
              <div>
                <p>Your Ans: {(randNum + 0.01).toFixed(2)}</p>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-x-2 space-y-2">
              <div></div>
              {Array(10)
                .fill(1)
                .map((item: number, index: number) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <Button
                        disabled={timerToStartGame <= 0}
                        onClick={() => {
                          if (index > totalAmt)
                            return alert("Insufficient Amt");
                          setUserBettedAmt(index);
                        }}
                      >
                        {index}
                      </Button>
                    )}
                  </React.Fragment>
                ))}
            </div>
          </CardBody>
          <CardFooter className="pt-0 w-full">
            <Button
              className="mt-10 w-full"
              onClick={() => {
                if (userBettedAmt < 0) return;
                seTotalAmt(
                  totalAmt +
                    userBettedAmt * Number(`${accValue}.${increasingNum}`)
                );
                return setUserBettedAmt(0);
              }}
            >
              {userBettedAmt > 0 ? "CashOut" : "Bet Amt"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default PUi;
