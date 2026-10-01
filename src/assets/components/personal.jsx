
function Personal(props){

    

    return(
        <div className="form-section">
            <div className="form-group">
            <label>Full Name</label>
        <input 
        type="text"
        value={props.user.name}
        onChange={e => props.setuser({...props.user,name:e.target.value})}
        />
        </div>
        <div className="form-group">
        <label>Email id</label>
         <input 
        type="text"
        value={props.user.email}
        onChange={e => props.setuser({...props.user,email:e.target.value})}
        />
        </div>
        <div className="form-group">
        <label>Contact No</label>
         <input 
        type="text"
        value={props.user.contact_no}
        onChange={e => props.setuser({...props.user,contact_no:e.target.value})}
        />
        </div>
          <div className="form-group">
        <label>Mailing Address</label>
         <input 
        type="text"
        value={props.user.address}
        onChange={e => props.setuser({...props.user,address:e.target.value})}
        />
        </div>
        </div>
    )
}

export {Personal}