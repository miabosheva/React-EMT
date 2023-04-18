import React from "react";
import Bookterm from '../bookTerm'
import {Link} from 'react-router-dom';

const books = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                    <thead>
                        <th>
                            <td scope={"col"}>Name</td>
                            <td scope={"col"}>Author</td>
                            <td scope={"col"}>Category</td>
                            <td scope={"col"}>Available Copies</td>
                        </th>
                        </thead>
                        <tbody>
                        {props.books.map((term) => {
                            return (
                                <Bookterm term={term} onDelete={props.onDelete}></Bookterm>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/add"}>Add new product</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default books;