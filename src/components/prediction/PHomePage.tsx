import React from "react";
import PUi from "./PUi";

function PHomePage() {
  const [randNum, setRandomNum] = React.useState<number>(-1);
  const [totalAmt, seTotalAmt] = React.useState<number>(10);
  const [userBettedAmt, setUserBettedAmt] = React.useState<number>(0);
  const [timerToStartGame, setTimerToStartGame] = React.useState<number>(-1);
  const [isGameStarted, setGameStarted] = React.useState<boolean>(false);
  const [increasingNum, setIncreasingNum] = React.useState<number>(0);
  const [accValue, setAccValue] = React.useState<number>(1);
  const generateRandomNumber = () => {
    const randomNumber = Math.random() * 2 + 1;
    setRandomNum(Number(randomNumber.toFixed(2)));
  };
  //   randNum >= 0 && randNum !== Number(`${accValue}.${increasingNum}`)
  if (isGameStarted) {
    console.log(randNum, Number(`${accValue}.${increasingNum}`));
    setTimeout(() => {
      if (increasingNum !== 100) return setIncreasingNum(increasingNum + 1);
      else {
        setAccValue(accValue + 1);
        setIncreasingNum(0);
      }
    }, 100);
  }
  if (!isGameStarted) {
    setTimeout(() => {
      if (timerToStartGame !== 6)
        return setTimerToStartGame(timerToStartGame + 1);
      else {
        userBettedAmt > 0 && seTotalAmt(totalAmt - userBettedAmt);
        setRandomNum(-1);
        setIncreasingNum(0);
        setAccValue(1);
        generateRandomNumber();
        setTimerToStartGame(-1);
        setGameStarted(true);
        // if (!isGameStarted && userBettedAmt > 0) {
        //   seTotalAmt(totalAmt - userBettedAmt);
        //   setUserBettedAmt(0);
        // }
      }
    }, 1000);
  }
  //   this is lisner
  React.useEffect(() => {
    return setGameStarted(false);
  }, [!!(randNum >= 0 && randNum === Number(`${accValue}.${increasingNum}`))]);
  return (
    <div>
      <PUi
        randNum={randNum}
        accValue={accValue}
        increasingNum={increasingNum}
        timerToStartGame={timerToStartGame}
        // helpercomment:- userBetting
        userBettedAmt={userBettedAmt}
        setUserBettedAmt={setUserBettedAmt}
        // helpercomment:- user tottal amout amount
        totalAmt={totalAmt}
        seTotalAmt={seTotalAmt}
      />
    </div>
  );
}

export default PHomePage;
