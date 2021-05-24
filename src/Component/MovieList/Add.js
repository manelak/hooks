import {Modal,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'




function Add({handlemovie}) {
    const [show, setShow] = useState(false);
  const[newmovie,setNewmovie]= useState({title:"",description:"",PosterUrl:"",rating:0})
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Add New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Movie</Modal.Title>
          </Modal.Header>
          <div className='add'>
            <input type='text' placeholder='Title'onChange={e=>setNewmovie({...newmovie,title:e.target.value})} ></input> 
            <input type='text' placeholder='description'onChange={e=>setNewmovie({...newmovie,description:e.target.value})} ></input> 
            <input type='text' placeholder='posterUrl'onChange={e=>setNewmovie({...newmovie,PosterUrl:e.target.value})} ></input> 
        
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose();handlemovie()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        
      </>
    );
  }
  
  export default Add