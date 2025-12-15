import "..//componenets/ComponentsStyling/TableRow.css"

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
            <td className="packageType">{packageType}</td>
            <td>{duration} days</td>
            <td className="priceOrg">{priceOrg}</td>
            <td className="priceNew">{priceNew}</td>
            <td ><button className="booknowButton">Book Now</button></td>
        </tr>
    );
}

export default TableRow;