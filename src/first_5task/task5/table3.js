import React from "react";
import withTableEnhancements from "./table1";
import BasicTable from "./table2";
import "bootstrap/dist/css/bootstrap.min.css";

const columns = [
  { id: "name", label: "Name" },
  { id: "age", label: "Age" },
  { id: "country", label: "Country" },
];

const data = [
  { name: "John Doe", age: 28, country: "USA" },
  { name: "Jane Smith", age: 34, country: "UK" },
  { name: "Carlos Santana", age: 40, country: "Mexico" },
  { name: "Anitha", age: "20", country: "India" },
  { name: "Subash", age: "25", country: "Angola" },
  { name: "Alya", age: "40", country: "Australia" },
  { name: "Surya", age: "50", country: "Albania" },
  { name: "Vignesh", age: "60", country: "Armenia" },
  { name: "Santra", age: "70", country: "Algeria" },
  { name: "Milton", age: "80", country: "Australia" },
  { name: "Rajesh", age: "90", country: "Albania" },
  { name: "Ramesh", age: "30", country: "Armenia" },
  { name: "Suresh", age: "70", country: "Algeria" },
  { name: "Sudhakar", age: "45", country: "Bahamas" },
  { name: "Ananthi", age: "55", country: "Cameroon" },
  { name: "Raj", age: "65", country: "Cambodia" },
  { name: "Ranjani", age: "75", country: "Bolivia" },
  { name: "Kanish", age: "85", country: "Botswana" },
  { name: "Yasmine", age: "95", country: "Bhutan" },
  { name: "Shivashree", age: "95", country: "Belize" },
];

const EnhancedTable = withTableEnhancements(BasicTable);

function Final() {
  return (
    <div className="App">
      
        <h1 className="text-center mt-3 mb-3">Component Composition:</h1>
  
      <EnhancedTable columns={columns} data={data} />
    </div>
  );
}

export default Final;
