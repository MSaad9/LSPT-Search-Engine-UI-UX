import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, InputGroup, Input, Label } from 'reactstrap';
import './FilterModal.css';

export function FilterModal() {
    let [modalOpen, setModalOpen] = useState<boolean>(false);

    const cancelFilterChange = () => {
        setModalOpen(false); 
    }

    const saveFilterChange = () => {
        setModalOpen(false); 
    }

    return (
        <div className="filter-modal">
            <Button className="modal-btn" onClick={() => {setModalOpen(true)}}>
                <span className="heading-item">Filter Results</span>
            </Button>
            <Modal isOpen={modalOpen} fade={false} toggle={() => {setModalOpen(!modalOpen)}} className="filter">
                <ModalHeader toggle={() => {cancelFilterChange()}}>Search Filters</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        Site(s):
                        <Label className="site-label" check>
                            <Input type="checkbox" className="check-input" />
                            Amazon
                        </Label>
                        <Label className="site-label" check>
                            <Input type="checkbox" className="check-input" />
                            Github
                        </Label>
                        <Label className="site-label" check>
                            <Input type="checkbox" className="check-input" />
                            Reddit
                        </Label>
                        <Label className="site-label" check>
                            <Input type="checkbox" className="check-input" />
                            Wikipedia
                        </Label>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-red" onClick={() => {saveFilterChange()}}>Save</Button>
                    <Button color="secondary" onClick={() => {cancelFilterChange()}}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}