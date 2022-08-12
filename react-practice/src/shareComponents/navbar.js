import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

export default function Navbar({ test, setTest }) {
  const [exdata, setExdata] = useState([]);
  const [data, setData] = useState([]);
  const onChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    const ec = (r, c) => {
      return XLSX.utils.encode_cell({ r: r, c: c });
    };

    const delete_row = (ws, row_index) => {
      let range = XLSX.utils.decode_range(ws["!ref"]);
      for (var R = row_index; R < range.e.r; ++R) {
        for (var C = range.s.c; C <= range.e.c; ++C) {
          ws[ec(R, C)] = ws[ec(R + 1, C)];
        }
      }
      range.e.r--;
      ws["!ref"] = XLSX.utils.encode_range(range.s, range.e);
    };
    let Arr = [];
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data1 = XLSX.utils.sheet_to_row_object_array(ws, { header: 1 });
      console.log("hello", data1[0]);
      delete_row(ws, 0);
      const data = XLSX.utils.sheet_to_row_object_array(ws, { header: 1 });
      console.log("yaha:", typeof data);
      data.map((item, index) => {
        // console.log("item",item);
        Arr.push(item);
      });
      setExdata(Arr);
    };
    reader.readAsBinaryString(file);
  };

  const fun = () => {
    exdata.map((item, index) => {
      let data = {
        id: item[7],
        firstName: item[1],
        lastName: item[2],
        age: item[5],
        date: item[6],
        country: item[4],
        gender: item[3],
      };
      fetch("http://192.168.1.180:5001/takenaka/newTest", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log("here", data);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    });
  };

  const clearTable = () => {
    setExdata("");
    document.getElementById("inpu").value = "";
  };
  // useEffect(() => {
  //   // Run! Like go get some data from an API.
  //   fun()
  // }, [exdata]);

  return (
    <div>
      <input id="inpu" type="file" onChange={onChange} />
      <button className="btn btn-warning" onClick={clearTable}>
        Clear Table
      </button>
      {exdata.length > 0 && (
        <table id="example" className="table ">
          <thead className="thead-dark">
            <th>#</th>
            <th>year</th>
            <th>Abbrev.</th>
            <th>Country</th>
            <th>Project's Name</th>
            <th>Client</th>
            <th>Structure</th>
            <th>B</th>
            <th>F</th>
            <th>P</th>
            <th>Floor Area (m2)</th>
            <th>Type of Contract</th>
            <th>From</th>
            <th>Hand over</th>
            <th>Location</th>
            <th>Type of Building (1)</th>
            <th>Type of Building (2)</th>
            <th>Client's Business Type</th>
            <th>Japanese / Local</th>
            <th>Project Code</th>
          </thead>
          <tbody className="table-hover">
            {exdata.map((item, index) => {
              return (
                <tr>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                  <td>{item[4]}</td>
                  <td>{item[5]}</td>
                  <td>{item[6]}</td>
                  <td>{item[7]}</td>
                  <td>{item[8]}</td>
                  <td>{item[9]}</td>
                  <td>{item[10]}</td>
                  <td>{item[11]}</td>
                  <td>{item[12]}</td>
                  <td>{item[13]}</td>
                  <td>{item[14]}</td>
                  <td>{item[15]}</td>
                  <td>{item[16]}</td>
                  <td>{item[17]}</td>
                  <td>{item[18]}</td>
                  <td>{item[19]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <div>{test}</div>
    </div>
  );
}
