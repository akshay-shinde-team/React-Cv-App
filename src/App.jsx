import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Personal } from './assets/components/personal'
import { Experience } from './assets/components/experience'

function App() {

    const[userexperience, setuserexperince] = useState({
        job_role:"Full Stack Developer",
        org_name:"Allstate",
        joining_date:"2014-10-13",
        end_date:"2014-10-13",
        current_ctc:5
    })
    const [user, setuser] = useState({name:'John Doe' , email:'john@gmail.com'
        , contact_no:987654321 , address:'USA California'
    })

    const [submitted, setsubmitted] = useState(false)
  return (
    <>
    <h3>Application form</h3>
    <form onSubmit={(e) => {
      e.preventDefault();
      setsubmitted(true)
      console.log("Submiteeed");

    }}>
      { submitted ? (
        <div className='submitted-data'>
        <h4>Form is Submitted</h4>
        <h4>Personal Details</h4>

        <p>
          <strong> Full Name:</strong>{user.name}
        </p>
        <p>
          <strong>Emailid:</strong>{user.email}
        </p>
        <p>
          <strong>Contact No:</strong>{user.contact_no}
        </p>
        <p>
          <strong>Mailing Address:</strong>{user.address}
        </p>
        <p>
          <strong>Job role:</strong>{userexperience.job_role}
        </p>
        <p>
          <strong>Organization Name:</strong>{userexperience.org_name}
        </p>
        <p>
          <strong>Joining Date:</strong>{userexperience.joining_date}
        </p>
        <p>
          <strong>End Date:</strong>{userexperience.end_date}
        </p>
        <p>
          <strong>Current Ctc:</strong>{userexperience.current_ctc}
        </p>

        <button type='button'
        onClick={() => setsubmitted(false)}
        >Edit</button>
        </div>

      ) : (
        <>
    <h4>Personal Details</h4>

    <Personal user={user} setuser={setuser} />
    <h4>Experience Details</h4>
    <Experience userexperience={userexperience} setuserexperince={setuserexperince} />
    <button type='submit'>Submit</button>
      </>
      )}
    </form>
    </>
  )
}

export default App
