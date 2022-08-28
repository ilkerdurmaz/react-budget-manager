import "./Graph.css"
import { VictoryPie } from 'victory';

export default function Graph({ categories }) {

    let data = categories.filter(item => item.amount > 0)
    return (
        <div className="border rounded my-2 shadow-sm pb-5 m-0">
            <div className="bg-dark bg-gradient rounded-top p-2 text-light d-flex justify-content-between align-items-center">
                <h2>Expanses</h2>
            </div>
            <VictoryPie
                categories={{ x: ["dogs", "cats", "mice"] }}
                innerRadius={50}
                width={175}
                height={175}
                data={data.map(category => {
                    return { x: category.name, y: category.amount, fill: category.color }
                })}
                animate={{
                    duration: 500
                }}
                style={{
                    data: {
                        fill: ({ datum }) => datum.fill
                    },
                    labels: { fontSize: 5 }
                }}
                labelRadius={({ innerRadius }) => innerRadius + 5}
            />
        </div>
    )
}



//return { x: category.name, y: category.amount, fill: category.color }