import "..//componenets/ComponentsStyling/TableRow.css"
import CountUp from "..//componenets/CountUp.tsx";

export interface TableValues {
    id: number;
    packageType: string;
    duration: number;
    priceOrg: number;
    priceNew: number;
}

function TableRow({ packageType, duration, priceOrg, priceNew }: TableValues) {
    return (
        <tr className="componenets-table-row">
            {/*List for the quick trips*/}
            <td className="packageType">{packageType}</td>
            <td>{duration} days</td>
            <td className="priceOrg">{priceOrg}</td>
            {/*the price for those trips which counts down using react bits*/}
            <td className="priceNew"><CountUp
                from={priceNew}
                to={priceOrg}
                separator=". "
                direction="down"
                duration={2.5}
                className="count-down-text"
            /></td>
            <td ><button className="booknowButton">Book Now</button></td>
        </tr>
    );
}

export default TableRow;