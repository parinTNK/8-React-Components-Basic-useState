import Counter from './components/Counter';
import TodoList from './components/TodoList';
import SimpleForm from './components/SimpleForm';
import LightDarkToggle from './components/LightDarkToggle';
import RandomQuoteGenerator from './components/RandomQuoteGenerator';
import ColorPicker from './components/ColorPicker';
import Stopwatch from './components/Stopwatch';
import TemperatureConverter from './components/TemperatureConverter';
import BMICalculator from './components/BMICalculator';



function App() {
  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-center text-4xl font-bold mt-10'>React Components Basic useState</h1>
        <div className='flex flex-row m-10 gap-4'>
          <Counter />
          <TodoList />
          <SimpleForm />
          <LightDarkToggle />
        </div>
        <div className='flex flex-row mx-10 gap-4'>
          <RandomQuoteGenerator />
          <Stopwatch />
          <TemperatureConverter />
          <ColorPicker />
        </div>
        <div className='flex flex-row m-10 gap-4'>
          <BMICalculator/>
        </div>
      </div>

    </>
  );
}

export default App;