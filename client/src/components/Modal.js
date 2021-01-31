import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    ModalFooter
} from 'reactstrap' ;
import { addApost } from '../actions/posts';


const ModalComponent = () => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [descreption, setDescreption] = useState('');
    const message = useSelector(state => state.posts.message)
    const toggle = () => setModal(!modal);
    const [modal2, setModal2] = useState(false);
    const toggle2 = () => setModal(!modal2);
    
    const addThePost =  async () => {
        try {
            if(title !== '' && descreption !== '') {
                await dispatch(addApost(title, descreption))
                toggle()
            } 
        } catch (err) {
            toggle2()
        }
    }
    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <Button color="danger" onClick={toggle}>Add a post</Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add a post</ModalHeader>
                <ModalBody>
                    <Input 
                        onChange={(e) => setTitle(e.target.value)}
                    className="mb-3" type="text" placeholder="Write the title of your post " rows={1} />
                    <Input 
                        onChange={(e) => setDescreption(e.target.value)}
                    type="textarea" placeholder="Write the descreption here" rows={5} />
                </ModalBody>
                <ModalFooter>
                    <Button 
                        onClick={addThePost}
                    color="primary" >Post</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={modal2} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                toggle={toggle2} >
                <ModalHeader toggle={toggle2}>Modal title</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
            </Modal>
        </div>
      );
    
}

export default ModalComponent
