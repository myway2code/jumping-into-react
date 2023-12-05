import { useState } from "react";

const Calculator = () => {
    const arrayCalcNumber = [
        ['7', '8', '9', '+'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '/'],
        ['0', '.', '*', '='],
        ['clear']
    ];
    let i = 0;
    const [myCalc, setMyCalc] = useState('');
    const handleClick = (element) => {
        const tempValue = element.target.value;
        if (myCalc === '') { setMyCalc(Number(tempValue)); }
        else {
            switch (tempValue) {
                case '=':
                    setMyCalc(eval(myCalc));
                    break;
                case 'clear':
                    setMyCalc('');
                    break;
                default:
                    setMyCalc(myCalc + tempValue);
            }
        }

    };

    return (
        <div className="calculatorWrap"> 
            <h1 className="title">my react calculator</h1>
            <div className="calculator">
                <div className="total"><span className="result">&nbsp;{myCalc}</span></div>
                {
                    arrayCalcNumber.flat().map((element) => {
                        i++;
                        return (<button
                            className="digit"
                            value={element}
                            key={i}
                            onClick={handleClick}
                        >
                            {element}
                        </button>)
                    })
                }
                
            </div>
        </div>
     );
}
 
export default Calculator;