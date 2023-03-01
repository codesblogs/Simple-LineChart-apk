import './App.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

const pdata = [
  {
    name: 'Abhi',
    Student: 11,
    fees: 14
  },
  {
    name: 'Rashi',
    Student: 12,
    fees: 9
  },
  {
    name: 'jaykal',
    Student: 9,
    fees: 10
  },
  {
    name: 'Ranbir',
    Student: 14,
    fees: 11
  },
  {
    name: 'Katherine',
    Student: 10,
    fees: 8
  },
];
function App() {
  return (
    <>
    <h1 className='char-heading'>Line chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={pdata} width={500} height={300} margin={{top: 5, right: 170, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="4 3"/>
        <XAxis dataKey="name" fill="#8884d8" interval={'preserveStartEnd'} tickFormatter={(value) => value+ " Dark"}/> //to the full view interval
         
        <YAxis /><Tooltip contentStyle={{backgroundColor: "lightgray"}}/>
        <Line type="monotone" dataKey="Student" stroke='green' activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="fees" stroke='blue' activeDot={{r: 8}}/>//tooltip & activeDot for show value on chart with move
        <Legend /> //for the bottom graphline show
      </LineChart>
    </ResponsiveContainer>
    </>
  );
}

export default App;
