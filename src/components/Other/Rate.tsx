import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface RateProps {
    currentRate: number | undefined
}

const Rate: React.FC<RateProps> = ({currentRate}) => {
    let arrOfStar = [];
    for (let i = 0; i < 5; i++) {
        if (currentRate !== undefined) {
            if (i >= currentRate) {
                arrOfStar.push(<Icon.Star key={i} size={12} color="#9FA09C" weight="fill" />);
            } else {
                arrOfStar.push(<Icon.Star key={i} size={12} color="#FDA72F" weight="fill" />);
            }
        }
    }
    return <div className="rate flex">{arrOfStar}</div>;
}

export default Rate