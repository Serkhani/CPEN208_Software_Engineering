import './App.css';
import Background from './components/background/Background'
import StudentInfoEntry from './pages/student_info/StudentInfoEntry';
// import StudentRegistration from './pages/StudentRegistration';
// import Login from './pages/login/Login';

function App() {
  return (
    <div>
      <Background />
      {/* <StudentRegistration /> */}
      {/* <Login /> */}
      <StudentInfoEntry />
    </div>
   
   );
}

export default App;
