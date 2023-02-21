// import logo from './logo.svg';
import './App.css';



function App() {

  const list = [
    {
      Access: 'prabhat,bhargav,smit',
      Project: 'CRM',
      Status: 'Done',
      Numberofrenwals: '1-2 times',
      Paid: "yes",
      Owner: 'Catherine Johnson',
      Numberofhours: 684,
      Cost: 1
    },
    {
      Access: 'maynk,ishita,deep,meet',
      Project: 'ERP',
      Status: 'In Progress',
      Numberofrenwals: '1-2 times',
      Paid: "yes",
      Owner: 'Catherine Johnson',
      Numberofhours: 6678,
      Cost: 1
    },
    {
      Access: 'monak,khusi',
      Project: 'School Managemet',
      Status: 'In Progress',
      Numberofrenwals: '1-2 times',
      Paid: "yes",
      Owner: 'Catherine Johnson',
      Numberofhours: 6678,
      Cost: 2
    }, {
      Access: 'maynk,ishita,deep,meet',
      Project: 'Real Esate',
      Status: 'In Progress',
      Numberofrenwals: '1-2 times',
      Paid: "yes",
      Owner: 'Catherine Johnson',
      Numberofhours: 6678,
      Cost: 2
    }, {
      Access: 'maynk,ishita,deep,meet',
      Project: 'ERP',
      Status: 'Done',
      Numberofrenwals: '1-2 times',
      Paid: "yes",
      Owner: 'Catherine Johnson',
      Numberofhours: 78,
      Cost: 2
    }, {
      Access: 'maynk,ishita,deep',
      Project: 'Social Media app',
      Status: 'Done',
      Numberofrenwals: '1-2 times',
      Paid: "yes",
      Owner: 'Catherine Johnson',
      Numberofhours: 78,
      Cost: 2
    },

  ]

  const total = list.reduce((acc, curr) => {
    // let cost = Number(curr.Cost.charAt(curr.Cost.length-1))
    return acc +curr.Cost
  }, 0)

  return (
    <div className="App">
      <h1>DHTMLX</h1>

     <center>
     <table border={1} className="">
        <thead>
          <tr>
            <th>Access</th>
            <th>Project</th>
            <th>Status</th>
            <th>Number of renwals</th>
            <th>paid</th>
            <th>Owner</th>
            <th>Number of hours</th>
            <th>Cost</th>
            {/* <th>total</th> */}
          </tr>
        </thead>
        <tbody>
          {
            list.filter(j => j.Status == 'Done').map((i) => {
              return (
                <tr>
                  <td>{i?.Access}</td>
                  <td>{i?.Project}</td>
                  <td className="text">{i?.Status}</td>
                  <td>{i?.Numberofhours}</td>
                  <td>{i?.Paid}</td>
                  <td>{i?.Owner}</td>
                  <td>{i?.Numberofhours}</td>
                  <td>${i?.Cost}</td>
                </tr>
              )
            })
          }
          {/* <tr>
            <td colspan={7}></td>
            <td>25225</td>
          </tr> */}
        </tbody>
        <tbody>
          {
            list.filter(j => j.Status != 'Done').map((i) => {
              return (
                <tr>
                  <td>{i?.Access}</td>
                  <td>{i?.Project}</td>
                  <td className="text2">{i?.Status}</td>
                  <td>{i?.Numberofhours}</td>
                  <td>{i?.Paid}</td>
                  <td>{i?.Owner}</td>
                  <td>{i?.Numberofhours}</td>
                  <td>${i?.Cost}</td>
                </tr>
              )
            })
          }
          <tr>
            <td colspan={7}>total</td>
            <td>${total}</td>
          </tr>
        </tbody>
      </table>
     </center>
    </div>
  );
}

export default App;
