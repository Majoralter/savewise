import { useState, useEffect } from "react";

const Calculator = () => {
  const [rangeValue, setRangeValue] = useState(5000);
  const [time, setTime] = useState("12");
  const [period, setPeriod] = useState("1");
  const [futureValue, setFutureValue] = useState(60944);
  const [difference, setDifference] = useState(futureValue - rangeValue);

  const rate = 0.034;

  const calcFutureValue = () => {
    let timeInt = Number(time),
      rangeValueInt = Number(rangeValue),
      periodInt = Number(period);

    if (timeInt === 1) {
      setFutureValue(
        Math.ceil(
          rangeValueInt * Math.pow(1 + rate / timeInt, periodInt)
        ).toLocaleString()
      );
    }

    if (timeInt === 12) {
      setFutureValue(
        Math.ceil(
          (rangeValueInt *
            (Math.pow(1 + rate / timeInt, timeInt * periodInt) - 1)) /
            (rate / timeInt)
        ).toLocaleString()
      );
    }

    if (timeInt === 52) {
      setFutureValue(
        Math.ceil(
          rangeValueInt *
            ((Math.pow(1 + rate / timeInt, timeInt * periodInt) - 1) /
              (rate / timeInt)) *
            (1 / (1 + rate / timeInt))
        ).toLocaleString()
      );
    }

    setDifference(
      (
        futureValue.toString().replace(/\,/g, "") -
        rangeValue * timeInt
      ).toLocaleString()
    );
  };

  useEffect(() => {
    calcFutureValue();

    return () => {};
  }, [time, period, rangeValue, futureValue]);

  return (
    <section className="investment__section">
      <h4>investment</h4>
      <h2>Watch Your Money Grow</h2>

      <div className="output">
        <div className="calculator">
          <p>If you saved</p>

          <label htmlFor="amount">
            $
            <input
              id="amount"
              type="text"
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />
          </label>
          <input
            id="range"
            type="range"
            min={10}
            max={10000000}
            onChange={(e) => setRangeValue(e.target.value)}
          />

          <div className="select__controls">
            <select
              name="frequency"
              value={time}
              onChange={(e) => {
                setTime(Number(e.target.value));
              }}
            >
              <option value="12">Monthly</option>
              <option value="52">Weekly</option>
              <option value="1">One-time</option>
            </select>

            <select
              name="timePeriod"
              value={period}
              onChange={(e) => {
                setPeriod(e.target.value);
              }}
            >
              <option value="1">Last year</option>
              <option value="3">Three years ago</option>
              <option value="5">Five years ago</option>
            </select>
          </div>
        </div>

        <div className="output--content">
          <p>Today you'd have,</p>

          <h3>${futureValue}</h3>

          <p>
            with <b>${difference}</b> returns from Savewise
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
