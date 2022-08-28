import "./Graph.css"
import { AppContext } from './../App';
import { useContext, useEffect } from "react"
import { VictoryPie } from 'victory';

export default function Graph() {
    const transactionList = useContext(AppContext).transactionList;
    const expenseCategories = useContext(AppContext).expenseCategories;
    const incomeCategories = useContext(AppContext).incomeCategories;
    //const values = Object.values(expenseCategories).filter(item => item > 0)
    //const keys = Object.keys(expenseCategories).filter(item => item > 0)
    return (
        <div className="graph">
            <VictoryPie
                categories={{ x: ["dogs", "cats", "mice"] }}
                innerRadius={100}
                data={[
                    { x: "Cats", y: 35, fill: "tomato" },
                    { x: "Dogs", y: 50, fill: "black" },
                    { x: "Birds", y: 55, fill: "tomato" },
                    { x: "Birds", y: 55, fill: "tomato" }
                ]}
                animate={{
                    duration: 1000
                }}
                style={{
                    data: {
                        fill: ({ datum }) => datum.fill
                    }
                }}
            />
        </div>
    )
}



