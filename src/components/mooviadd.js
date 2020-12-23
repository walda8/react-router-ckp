import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddMovie = ({movies, setMovies}) => {


  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  const [newname,setNewname]=useState('')
  const [newtype,setNewtype]=useState('')
  const [newrate,setNewrate]=useState(0)
  const [newimage,setNewimage]=useState('')

  const handleAdd =()=>{
    setMovies ([...movies,{name:newname,type:newtype,rate:newrate,image:newimage,id:Math.random()}])
    setNewname('')
    toggle()
  }

  return (
    <div>
      <Button class="btn-secondary" onClick={toggle}>Add Movie</Button>
      <Modal isOpen={modal} toggle={toggle} className='popout' >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
<label>Title</label> <input type='text' placeholder='write the name of the movie' onChange={(e)=>setNewname(e.target.value)} /> <br />
           <label>Type</label> <input type='text' placeholder='write the type of the movie' onChange={(e)=>setNewtype(e.target.value)} /> <br />
           <label>Image</label> <input type='text' placeholder='add the image of the poster' onChange={(e)=>setNewimage(e.target.value)} /> <br />
           <label>Rate</label> <input type='text' placeholder='give a rate to the movie' onChange={(e)=>setNewrate(e.target.value)} /> <br /> 
          <br />
        
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Nested Modal title</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
    
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button className='btn' onClick={handleAdd}>Submit</Button>
          <Button className='btn' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddMovie;