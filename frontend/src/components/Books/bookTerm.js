import React from "react";
import { Link } from "react-router-dom";

const BookTerm = (props) => {
    return (
        <tr>
            <td>
                {props.term.name}
            </td>
            <td>
                {props.term.author.name}
            </td>
            <td>
                {props.term.category}
            </td>
            <td>
                {props.term.availableCopies}
            </td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/edit/${props.term.id}`}>
                    Edit
                </Link>
                <button className={"btn btn-info ml-2"}
                      onClick={() => {
                          props.onMarkAsTaken(props.term.id)
                      }}>
                    Mark As Taken
                </button>
            </td>
        </tr>

    );
}

export default BookTerm;