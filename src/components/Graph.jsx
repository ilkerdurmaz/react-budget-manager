import { VictoryPie, VictoryLabel } from 'victory';

export default function Graph({ categories }) {
    const temp = categories.filter(item => item.amount > 0)
    const data = temp.length > 0 ? temp.sort((a, b) => b.amount - a.amount) : [{ name: "List is Empty", amount: 1, color: "grey" }]

    let totalExpense = data.reduce((acc, item) => acc += item.amount, 0);
    data.forEach(item => {
        item.percentage = ((100 * item.amount) / totalExpense).toFixed(2);
    })

    return (
        <>
            <svg viewBox="0 0 400 375">
                <VictoryPie
                    innerRadius={100}

                    data={data.map(category => {
                        return { x: " ", y: category.amount, fill: category.color }
                    })}
                    animate={{
                        duration: 500
                    }}
                    style={{
                        data: {
                            fill: ({ datum }) => datum.fill
                        }
                    }}
                    padAngle={1}
                    standalone={false}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20 }}
                    x={200} y={200}
                    text={temp.length > 0 ? `Total: ₺${totalExpense}` : ''}
                />
            </svg>
            <div className="mx-2">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">⨀</th>
                            <th scope="col">Category</th>
                            <th scope="col">Amount</th>
                            <th scope="col">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((category, index) => {
                                return (
                                    <tr key={index}>
                                        <th style={{ color: category.color }}>⬤</th>
                                        <td>{category.name}</td>
                                        <td>₺{category.amount}</td>
                                        <td>%{category.percentage}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}