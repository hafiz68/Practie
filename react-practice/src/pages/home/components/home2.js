import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { Picky } from "react-picky";
import "react-picky/dist/picky.css";
import ReCAPTCHA from "react-google-recaptcha";
import { MultiSelect } from "react-multi-select-component";
// Import Interfaces`
import { ICountry, IState, ICity } from "country-state-city";
import * as XLSX from "xlsx";
import "./home2.css";

const Upper1 = ({test, setTest}) => {
  const [count, setCount] = useState("");
  let country = Country.getAllCountries();
  let [Arr, setArr] = useState([]);
  const [selected, setSelected] = useState([]);
  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };
  const setcities = (e) => {
    console.log(e.target.value);
    setCount(e.target.value);
    let data = {
      city: e.target.value,
    };
    fetch("http://192.168.1.180:5001/takenaka/cities", {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setArr(data);
        // downloadExcel(data);
        console.log("here", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const [cap, setCap] = useState(false);
 

  const handletouch = (e) => {
    // fetch("http://18.141.204.254/kunji-api/api/society-admin/profile", {
    //   method: "GET", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "`Bearer 947|pShg2JAUGiJdhZ53obObGf7adhPp0hm27OhbWBoe",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data, "testing");
    //     // downloadExcel(data);
    //     localStorage.removeItem("hello");
    //     console.log("here", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    setCap(true)
  };

  const testProp = (e) => {
    console.log(e.target.value);
    setTest(e.target.value);
  }

  const handleKuj = (e) => {
    fetch("http://api.cardano.fans/dapps/list-releases", {
      mode: "no-cors", // 'cors' by default
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "testing");
        // downloadExcel(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    handleKuj();
  }, []);

  const handleVerify = () => {
    alert("hello");
    setCap(false)
  };

  const options = Arr;
  return (
    <>
      <label for="cars">Choose a Country:</label>
      <select onChange={setcities} name="cars" id="cars">
        {country.map((user) => (
          <>
            <option value={user.isoCode} className="user">
              {user.name}
            </option>
          </>
        ))}
      </select>
      <select name="cities" id="cities1">
        {Arr.map((user) => (
          <>
            <option value={user.value} className="user">
              {user.label}
            </option>
          </>
        ))}
      </select>
      {/* <select class=" multiple selectpicker" name="states" multiple> */}
      {/* {Arr.map((user) => (
          <>
            <option value={user.value} className="user">
            {user.label}
          </option>
            
          </>
        ))}
      </select> */}
      <MultiSelect
        className="input-adduser"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch={true}
      />
      <Picky
        valueKey="value"
        labelKey="label"
        id="picky"
        options={Arr}
        value={selected}
        multiple={true}
        includeSelectAll={true}
        includeFilter={true}
        onChange={(values) => {
          console.log(values);
          setSelected(values);
        }}
        dropdownHeight={600}
      />
      <button className="btn btn-danger btn-sm" onClick={handletouch}>
        Testing
      </button>
      {cap && <ReCAPTCHA
        type="audio"
        sitekey="6Lf50Y4gAAAAAHFat2Wy7DLLdhNoRAObHjUUPJpJ"
        onChange={handleVerify}
      />}
      <div>
    <input type='text' placeholder="Test" onChange={testProp}></input></div>
    <a href="whatsapp://send?text=Hello World!&phone=+923214898395">Ping me on WhatsApp</a>
    </>
  );
};

export default Upper1;
