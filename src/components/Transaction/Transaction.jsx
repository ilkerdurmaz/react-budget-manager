import "./Transaction.css"
import { useContext, useState } from "react"
import { AppContext } from './../App';
import { GrCoatCheck, GrCafeteria, GrTrain, GrAidOption, GrCart, GrCopy, GrMore } from "react-icons/gr";




function Icons({ icon, size }) {
    switch (icon) {
        case "Clothing":
            return <GrCoatCheck size={size} />;
        case "Food":
            return <GrCafeteria size={size} />;
        case "Travel":
            return <GrTrain size={size} />;
        case "Health Care":
            return <GrAidOption size={size} />;
        case "Shopping":
            return <GrCart size={size} />;
        case "Bills":
            return <GrCopy size={size} />;
        default: return <GrMore size={size} />;
    }
}

export default function Transaction({ index, selectedListHandler }) {

    const [isSelected, setIsSelected] = useState(false);
    const transactionList = useContext(AppContext).transactionList;

    function handleClick() {

        setIsSelected(current => !current);
        selectedListHandler(transactionList[index].id);
    }

    return (
        <div className={`p-0 my-1 mx-2 shadow-sm alert d-flex align-items-center
        ${isSelected ? 'alert-danger' : 'border'}`} onClick={handleClick} >

            <div className="mx-1 my-1 d-flex justify-content-center align-items-center border border-primary"
                style={{ width: '40px', height: '40px', borderRadius: '50%' }}>
                <Icons icon={transactionList[index].category} size={20} />
            </div>
            <small className="m-1 ">{transactionList[index].desc}</small>
            <small className="m-1 ms-auto">₺{transactionList[index].amount}</small>
        </ div >
    )
}