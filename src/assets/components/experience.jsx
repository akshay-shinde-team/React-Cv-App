
function Experience(props){

  


        return(
            <div className="form-section">
                <div className="form-group">
                    <label>Job Role: </label>
                    <input type="text"
                    value={props.userexperience.job_role}
                    onChange={e => props.setuserexperince({...props.userexperience ,
                        job_role: e.target.value})}
                    />
                </div>
                  <div className="form-group">
                    <label>Organization Name: </label>
                    <input type="text"
                    value={props.userexperience.org_name}
                    onChange={e => props.setuserexperince({...props.userexperience ,
                        org_name: e.target.value})}
                    />
                </div>
                  <div className="form-group">
                    <label>Joining Date: </label>
                    <input type="date"
                    value={props.userexperience.joining_date}
                    onChange={e => props.setuserexperince({...props.userexperience ,
                        joining_date: e.target.value})}
                    />
                </div>
                  <div className="form-group">
                    <label>End Date: </label>
                    <input type="date"
                    value={props.userexperience.end_date}
                    onChange={e => props.setuserexperince({...props.userexperience ,
                        end_date: e.target.value})}
                    />
                </div>
                 <div className="form-group">
                    <label>Current Ctc: </label>
                    <input type="number"
                    value={props.userexperience.current_ctc}
                    onChange={e => props.setuserexperince({...props.userexperience ,
                        current_ctc: e.target.value})}
                    />

                   
                </div>
            </div>
        )
    
}

export {Experience}